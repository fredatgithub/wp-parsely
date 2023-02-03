<?php
/**
 * Integration Tests: Referrers Post Detail API Proxy Endpoint
 *
 * @package Parsely\Tests
 * @since   3.7.0
 */

declare(strict_types=1);

namespace Parsely\Tests\Integration;

use Parsely\Endpoints\Base_API_Proxy;
use Parsely\Endpoints\Referrers_Post_Detail_API_Proxy;
use Parsely\Parsely;
use Parsely\RemoteAPI\Referrers_Post_Detail_API;
use WP_REST_Request;

/**
 * Integration Tests for the Referrers Post Detail API Proxy Endpoint.
 */
final class ReferrersPostDetailProxyEndpointTest extends ProxyEndpointTest {

	/**
	 * Initializes all required values for the test.
	 */
	public static function initialize(): void {
		self::$route      = '/wp-parsely/v1/referrers/post/detail';
		self::$filter_key = 'referrers_post_detail';
	}

	/**
	 * Returns the endpoint to be used in tests.
	 *
	 * @return Base_API_Proxy
	 */
	public function get_endpoint(): Base_API_Proxy {
		return new Referrers_Post_Detail_API_Proxy(
			new Parsely(),
			new Referrers_Post_Detail_API( new Parsely() )
		);
	}

	/**
	 * Verifies that the route is registered.
	 *
	 * @covers \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::run
	 * @uses \Parsely\Endpoints\Base_API_Proxy::register_endpoint
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::__construct
	 * @uses \Parsely\RemoteAPI\Remote_API_Base::__construct
	 */
	public function test_register_routes_by_default(): void {
		parent::run_test_register_routes_by_default();
	}

	/**
	 * Verifies that the route is not registered when the
	 * wp_parsely_enable_referrers_post_details_api_proxy filter is set to false.
	 *
	 * @covers \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::run
	 * @uses \Parsely\Endpoints\Base_API_Proxy::register_endpoint
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::__construct
	 * @uses \Parsely\RemoteAPI\Remote_API_Base::__construct
	 */
	public function test_verify_that_route_is_not_registered_when_proxy_is_disabled(): void {
		parent::run_test_do_not_register_route_when_proxy_is_disabled();
	}

	/**
	 * Verifies that calling `GET /wp-parsely/v1/referrers/post/detail` returns
	 * an error and does not perform a remote call when the Site ID is not
	 * populated in site options.
	 *
	 * @covers \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::get_items
	 * @uses \Parsely\Endpoints\Base_API_Proxy::get_data
	 * @uses \Parsely\Endpoints\Base_API_Proxy::register_endpoint
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::__construct
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::permission_callback
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::run
	 * @uses \Parsely\Parsely::site_id_is_missing
	 * @uses \Parsely\Parsely::site_id_is_set
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\RemoteAPI\Remote_API_Base::__construct
	 */
	public function test_get_items_fails_when_site_id_is_not_set(): void {
		parent::run_test_get_items_fails_without_site_id_set();
	}

	/**
	 * Verifies that calling `GET /wp-parsely/v1/referrers/post/detail` returns
	 * an error and does not perform a remote call when the Site ID is not
	 * populated in site options.
	 *
	 * @covers \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::get_items
	 * @uses \Parsely\Endpoints\Base_API_Proxy::get_data
	 * @uses \Parsely\Endpoints\Base_API_Proxy::register_endpoint
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::__construct
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::permission_callback
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::run
	 * @uses \Parsely\Parsely::site_id_is_missing
	 * @uses \Parsely\Parsely::site_id_is_set
	 * @uses \Parsely\Parsely::api_secret_is_set
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\RemoteAPI\Remote_API_Base::__construct
	 */
	public function test_get_items_fails_when_api_secret_is_not_set(): void {
		parent::run_test_get_items_fails_without_api_secret_set();
	}

	/**
	 * Verifies that calls to `GET /wp-parsely/v1/referrers/post/detail` return
	 * results in the expected format.
	 *
	 * @covers \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::get_items
	 * @uses \Parsely\Endpoints\Base_API_Proxy::get_data
	 * @uses \Parsely\Endpoints\Base_API_Proxy::register_endpoint
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::__construct
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::generate_data
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::permission_callback
	 * @uses \Parsely\Endpoints\Referrers_Post_Detail_API_Proxy::run
	 * @uses \Parsely\Parsely::site_id_is_missing
	 * @uses \Parsely\Parsely::site_id_is_set
	 * @uses \Parsely\Parsely::api_secret_is_set
	 * @uses \Parsely\Parsely::get_site_id
	 * @uses \Parsely\Parsely::get_options
	 * @uses \Parsely\RemoteAPI\Remote_API_Base::__construct
	 * @uses \Parsely\RemoteAPI\Remote_API_Base::get_api_url
	 * @uses \Parsely\RemoteAPI\Remote_API_Base::get_items
	 */
	public function test_get_items() {
		TestCase::set_options(
			array(
				'apikey'     => 'example.com',
				'api_secret' => 'test',
			)
		);

		$dispatched = 0;

		add_filter(
			'pre_http_request',
			function () use ( &$dispatched ) {
				$dispatched++;
				return array(
					'body' => '{"data":[
						{
							"metrics": {"referrers_views": 1768},
							"name": "google",
							"type": "search"
						},
						{
							"metrics": {"referrers_views": 65},
							"name": "blog.parse.ly",
							"type": "internal"
						},
						{
							"metrics": {"referrers_views": 12},
							"name": "bing",
							"type": "search"
						},
						{
							"metrics": {"referrers_views": 5},
							"name": "facebook.com",
							"type": "social"
						},
						{
							"metrics": {"referrers_views": 4},
							"name": "okt.to",
							"type": "other"
						},
						{
							"metrics": {"referrers_views": 4},
							"name": "yandex",
							"type": "search"
						},
						{
							"metrics": {"referrers_views": 3},
							"name": "parse.ly",
							"type": "internal"
						},
						{
							"metrics": {"referrers_views": 3},
							"name": "yahoo!",
							"type": "search"
						},
						{
							"metrics": {"referrers_views": 1},
							"name": "site1.com",
							"type": "other"
						},
						{
							"metrics": {"referrers_views": 1},
							"name": "link.site2.com",
							"type": "other"
						}
					]}',
				);
			}
		);

		$expected_top = (object) array(
			'direct'        => (object) array(
				'views'                  => '1,866',
				'viewsPercentage'        => false,
				'datasetViewsPercentage' => '50.22',
			),
			'google'        => (object) array(
				'views'                  => '1,768',
				'viewsPercentage'        => false,
				'datasetViewsPercentage' => '47.58',
			),
			'blog.parse.ly' => (object) array(
				'views'                  => '65',
				'viewsPercentage'        => false,
				'datasetViewsPercentage' => '1.75',
			),
			'bing'          => (object) array(
				'views'                  => '12',
				'viewsPercentage'        => false,
				'datasetViewsPercentage' => '0.32',
			),
			'facebook.com'  => (object) array(
				'views'                  => '5',
				'viewsPercentage'        => false,
				'datasetViewsPercentage' => '0.13',
			),
			'totals'        => (object) array(
				'views'                  => '3,716',
				'viewsPercentage'        => false,
				'datasetViewsPercentage' => '100.00',
			),
		);

		$expected_types = (object) array(
			'social'   => (object) array(
				'views'           => '5',
				'viewsPercentage' => false,
			),
			'search'   => (object) array(
				'views'           => '1,787',
				'viewsPercentage' => false,
			),
			'other'    => (object) array(
				'views'           => '6',
				'viewsPercentage' => false,
			),
			'internal' => (object) array(
				'views'           => '68',
				'viewsPercentage' => false,
			),
			'direct'   => (object) array(
				'views'           => '-1,866',
				'viewsPercentage' => false,
			),
			'totals'   => (object) array(
				'views'           => '0',
				'viewsPercentage' => false,
			),
		);

		$response = rest_get_server()->dispatch( new WP_REST_Request( 'GET', '/wp-parsely/v1/referrers/post/detail' ) );

		self::assertSame( 1, $dispatched );
		self::assertSame( 200, $response->get_status() );
		self::assertEquals(
			(object) array(
				'data' => array(
					'top'   => $expected_top,
					'types' => $expected_types,
				),
			),
			$response->get_data()
		);
	}
}
