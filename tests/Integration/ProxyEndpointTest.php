<?php
/**
 * Integration Tests: API Proxy Endpoint
 *
 * @package Parsely\Tests
 * @since   3.5.0
 */

declare(strict_types=1);

namespace Parsely\Tests\Integration;

use Parsely\Endpoints\Base_API_Proxy;
use Parsely\Endpoints\User_Meta\Base_Endpoint_User_Meta;
use Parsely\Parsely;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

/**
 * Integration Tests for the API Proxy Endpoint.
 *
 * @phpstan-import-type Parsely_Options from Parsely
 */
abstract class ProxyEndpointTest extends TestCase {

	/**
	 * Holds a reference to the global $wp_rest_server object to restore in
	 * tear_down().
	 *
	 * @var WP_REST_Server $wp_rest_server_global_backup
	 */
	private $wp_rest_server_global_backup;

	/**
	 * Holds a reference to the callback that initializes the endpoint to remove
	 * in tear_down().
	 *
	 * @var callable $rest_api_init_proxy
	 */
	protected $rest_api_init_proxy;

	/**
	 * Route of the WP REST endpoint.
	 *
	 * @var string
	 */
	protected static $route;

	/**
	 * String used in hook names in order to pick the hooks related to the
	 * specific endpoint.
	 *
	 * @var string
	 */
	protected static $filter_key;

	/**
	 * Initializes all required values for the test.
	 */
	abstract public static function initialize(): void;

	/**
	 * Returns the endpoint to be used in tests.
	 *
	 * @return Base_API_Proxy|Base_Endpoint_User_Meta The endpoint to be tested.
	 */
	abstract public function get_endpoint();

	/**
	 * Runs once before all tests.
	 */
	public static function set_up_before_class(): void {
		static::initialize();
	}

	/**
	 * Setup method called before each test.
	 *
	 * Sets up globals and initializes the Endpoint.
	 */
	public function set_up(): void {
		parent::set_up();

		TestCase::set_options();

		$this->wp_rest_server_global_backup = $GLOBALS['wp_rest_server'] ?? null;
		$endpoint                           = $this->get_endpoint();
		$this->rest_api_init_proxy          = static function () use ( $endpoint ) {
			$endpoint->run();
		};
		add_action( 'rest_api_init', $this->rest_api_init_proxy );
	}

	/**
	 * Teardown method called after each test.
	 *
	 * Resets globals.
	 */
	public function tear_down(): void {
		parent::tear_down();
		remove_action( 'rest_api_init', $this->rest_api_init_proxy );

		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
		$GLOBALS['wp_rest_server'] = $this->wp_rest_server_global_backup;
	}

	/**
	 * Verifies that the route is registered.
	 *
	 * @param array<string, bool> $methods The methods supported by the route.
	 */
	public function run_test_register_routes_by_default(
		array $methods = array( 'GET' => true )
	): void {
		$routes = rest_get_server()->get_routes();
		self::assertArrayHasKey( self::$route, $routes );
		self::assertCount( 1, $routes[ self::$route ] );
		self::assertSame( $methods, $routes[ self::$route ][0]['methods'] );
	}

	/**
	 * Verifies that the route is not registered when the respective filter is
	 * set to false.
	 */
	public function run_test_do_not_register_route_when_proxy_is_disabled(): void {
		// Override some setup steps in order to set the filter to false.
		remove_action( 'rest_api_init', $this->rest_api_init_proxy );
		$endpoint                  = $this->get_endpoint();
		$this->rest_api_init_proxy = static function () use ( $endpoint ) {
			add_filter( 'wp_parsely_enable_' . self::$filter_key . '_api_proxy', '__return_false' );
			$endpoint->run();
		};
		add_action( 'rest_api_init', $this->rest_api_init_proxy );

		$routes = rest_get_server()->get_routes();
		self::assertFalse( array_key_exists( self::$route, $routes ) );
	}

	/**
	 * Verifies that calls return an error and do not perform a remote call when
	 * the Site ID is not populated in site options.
	 *
	 * @param WP_REST_Request|null $request The request object to be used.
	 */
	public function run_test_get_items_fails_without_site_id_set(
		?WP_REST_Request $request = null
	): void {
		$this->run_test_get_items_fails(
			array( 'apikey' => '' ),
			'parsely_site_id_not_set',
			'A Parse.ly Site ID must be set in site options to use this endpoint',
			$request
		);
	}

	/**
	 * Verifies that calls return an error and do not perform a remote call when
	 * the API Secret is not populated in site options.
	 *
	 * @param WP_REST_Request|null $request The request object to be used.
	 */
	public function run_test_get_items_fails_without_api_secret_set(
		?WP_REST_Request $request = null
	): void {
		$this->run_test_get_items_fails(
			array(
				'apikey'     => 'example.com',
				'api_secret' => '',
			),
			'parsely_api_secret_not_set',
			'A Parse.ly API Secret must be set in site options to use this endpoint',
			$request
		);
	}

	/**
	 * Verifies that attempting to get items under the given conditions will
	 * fail.
	 *
	 * @param array<string, mixed> $options The WordPress options to be set.
	 * @param string               $expected_error_code The expected error code.
	 * @param string               $expected_error_message The expected error message.
	 * @param WP_REST_Request|null $request The request object to be used.
	 */
	private function run_test_get_items_fails(
		array $options,
		string $expected_error_code,
		string $expected_error_message,
		?WP_REST_Request $request = null
	): void {
		TestCase::set_options( $options );
		if ( null === $request ) {
			$request = new WP_REST_Request( 'GET', self::$route );
		}

		$response = rest_get_server()->dispatch( $request );
		/**
		 * Variable.
		 *
		 * @var WP_Error
		 */
		$error = $response->as_error();
		self::assertSame( 403, $response->get_status() );
		self::assertSame( $expected_error_code, $error->get_error_code() );
		self::assertSame( $expected_error_message, $error->get_error_message() );
	}

	/**
	 * Verifies default user capability filter.
	 */
	public function run_test_user_is_allowed_to_make_proxy_api_call_if_default_user_capability_is_changed(): void {
		$this->set_current_user_to_contributor();
		add_filter(
			'wp_parsely_user_capability_for_all_private_apis',
			function () {
				return 'edit_posts';
			}
		);

		self::assertTrue( static::get_endpoint()->is_available_to_current_user() );
	}

	/**
	 * Verifies endpoint specific user capability filter.
	 *
	 * @param string|null $filter_key The key to use for the filter.
	 */
	public function run_test_user_is_allowed_to_make_proxy_api_call_if_endpoint_specific_user_capability_is_changed(
		$filter_key = null
	): void {
		$this->set_current_user_to_contributor();
		$filter_key = $filter_key ?? static::$filter_key;

		add_filter(
			'wp_parsely_user_capability_for_' . $filter_key . '_api',
			function () {
				return 'edit_posts';
			}
		);

		self::assertTrue( static::get_endpoint()->is_available_to_current_user() );
	}
}
