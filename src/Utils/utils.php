<?php
/**
 * Util Functions.
 *
 * To enforce typing on commonly used functions.
 *
 * @package Parsely
 * @since   3.7.0
 */

declare(strict_types=1);

namespace Parsely\Utils;

use WP_Post;
use WP_Error;

use const Parsely\PARSELY_FILE;

const DATE_UTC_FORMAT     = 'Y-m-d';
const WP_DATE_TIME_FORMAT = 'Y-m-d H:i:s';

/**
 * Gets UTC Date.
 *
 * @since 3.7.0
 *
 * @param int $days Number of days before or after the current date.
 *
 * @return string
 */
function get_utc_date_format( int $days = 0 ): string {
	if ( 0 === $days ) {
		return gmdate( DATE_UTC_FORMAT );
	}

	return gmdate( DATE_UTC_FORMAT, (int) strtotime( "{$days} days" ) );
}

/**
 * Gets default category.
 *
 * @since 3.7.0
 *
 * @return int
 */
function get_default_category(): int {
	/**
	 * Variable.
	 *
	 * @var string
	 */
	$default_category = get_option( 'default_category' );

	return (int) $default_category;
}

/**
 * Gets option `page_for_posts`.
 *
 * @since 3.7.0
 *
 * @param bool $default Default Value.
 *
 * @return int|WP_Post
 */
function get_page_for_posts( $default = false ) {
	/**
	 * Variable.
	 *
	 * @var int|WP_Post
	 */
	return get_option( 'page_for_posts', $default );
}

/**
 * Gets option `page_on_front`.
 *
 * @since 3.7.0
 *
 * @return bool
 */
function get_page_on_front() {
	/**
	 * Variable.
	 *
	 * @var bool
	 */
	return get_option( 'page_on_front' );
}

/**
 * Gets 'string' query variable from WP_Query class.
 *
 * @since 3.7.0
 *
 * @param string $var Variable key to retrieve.
 *
 * @return string
 */
function get_string_query_var( $var ): string {
	/**
	 * Variable.
	 *
	 * @var string
	 */
	return get_query_var( $var );
}

/**
 * Gets site date format.
 *
 * @since 3.7.0
 */
function get_date_format(): string {
	/**
	 * Variable.
	 *
	 * @var string
	 */
	return get_option( 'date_format' );
}

/**
 * Gets site time format.
 *
 * @since 3.7.0
 */
function get_time_format(): string {
	/**
	 * Variable.
	 *
	 * @var string
	 */
	return get_option( 'time_format' );
}

/**
 * Gets number in formatted form i.e. express bigger numbers in form of
 * thousands (k), millions (M), billions (B).
 *
 * Note: This function is not made to process float numbers, and it is a PHP
 * port of our formatToImpreciseNumber() TypeScript function.
 *
 * Example:
 *   - Represent 10000 as 10K.
 *
 * @since 3.7.0
 *
 * @param string $value           The number to process. It can be formatted.
 * @param int    $fraction_digits The number of desired fraction digits.
 * @param string $glue            A string to put between the number and unit.
 *
 * @return string The number formatted as an imprecise number.
 */
function get_formatted_number( string $value, int $fraction_digits = 1, string $glue = '' ): string {
	$number = (int) preg_replace( '/\D/', '', $value );

	if ( $number < 1000 ) {
		return $value;
	} elseif ( $number < 10000 ) {
		$fraction_digits = 1;
	}

	$unit_names               = array(
		'1000'             => 'k',
		'1000000'          => 'M',
		'1000000000'       => 'B',
		'1000000000000'    => 'T',
		'1000000000000000' => 'Q',
	);
	$current_number           = $number;
	$current_number_as_string = (string) $number;
	$unit                     = '';
	$previous_number          = 0;

	foreach ( $unit_names as $thousands => $suffix ) {
		$thousands_int = (int) preg_replace( '/\D/', '', (string) $thousands );

		if ( $number >= $thousands_int ) {
			$current_number = $number / $thousands_int;
			$precision      = $fraction_digits;

			// For over 10 units, we reduce the precision to 1 fraction digit.
			if ( 0 !== $previous_number && $current_number % 1 > 1 / $previous_number ) {
				$precision = $current_number > 10 ? 1 : 2;
			}

			// Precision override, where we want to show 2 fraction digits.
			$zeroes                   = floatval( number_format( $current_number, 2 ) ) ===
										floatval( number_format( $current_number, 0 ) );
			$precision                = $zeroes ? 0 : $precision;
			$current_number_as_string = number_format( $current_number, $precision, '.', '' );
			$unit                     = $suffix;
		}

		$previous_number = $current_number;
	}

	return $current_number_as_string . $glue . $unit;
}

/**
 * Gets time in formatted form.
 *
 * Example:
 *   - Input `1000` (seconds) and Output `16:40` which represents "16 minutes, 40 seconds”
 *
 * @since 3.7.0
 *
 * @param int|float $seconds Time in seconds that we have to format.
 *
 * @return string
 */
function get_formatted_time( $seconds ): string {
	$seconds = round( $seconds );
	$hours   = floor( $seconds / 3600 );

	if ( $hours >= 1 ) {
		$seconds = $seconds - ( $hours * 3600 );
		$minutes = floor( $seconds / 60 );
		$seconds = round( $seconds % 60 );

		return esc_html( /* translators: 1: Number of hours 2: Number of minutes 3: Number of seconds */
			sprintf( __( '%1$d:%2$02d:%3$02d', 'wp-parsely' ), $hours, $minutes, $seconds )
		);
	}

	$minutes = floor( $seconds / 60 );
	$seconds = round( $seconds % 60 );

	if ( $minutes >= 1 ) {
		return esc_html( /* translators: 1: Number of minutes 2: Number of seconds */
			sprintf( __( '%1$d:%2$02d', 'wp-parsely' ), $minutes, $seconds )
		);
	}

	return esc_html( /* translators: 1: Number of seconds */
		sprintf( __( '%1$d sec.', 'wp-parsely' ), round( $seconds ) )
	);
}

/**
 * Converts to associate array.
 *
 * @since 3.7.0
 *
 * @param mixed $obj Input object.
 *
 * @return array<string, mixed>|WP_Error
 */
function convert_to_associative_array( $obj ) {
	$encoded = wp_json_encode( $obj );

	if ( false === $encoded ) {
		return new WP_Error( 'parsely_encoding_failed', __( 'Unable to encode API response for associative array', 'wp-parsely' ) );
	}

	/**
	 * Variable.
	 *
	 * @var array<string, mixed>
	 */
	return json_decode( $encoded, true );
}

/**
 * Converts a string to a positive integer, removing any non-numeric
 * characters.
 *
 * @param string $string The string to be converted to an integer.
 * @return int The integer resulting from the conversion.
 */
function convert_to_positive_integer( string $string ): int {
	return (int) preg_replace( '/\D/', '', $string );
}

/**
 * Converts endpoint to filter key by replacing `/` with `_`.
 *
 * @param string $endpoint Route of the endpoint.
 *
 * @since 3.7.0
 *
 * @return string
 */
function convert_endpoint_to_filter_key( string $endpoint ): string {
	return trim( str_replace( '/', '_', $endpoint ), '_' );
}

/**
 * Gets content of asset file.
 *
 * @param string $path Path of the asset file.
 *
 * @since 3.8.0
 *
 * @return Asset_Info
 */
function get_asset_info( string $path ) {
	return require plugin_dir_path( PARSELY_FILE ) . $path;
}
