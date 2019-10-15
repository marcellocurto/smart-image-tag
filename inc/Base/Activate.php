<?php

/**
 * Fired during plugin activation
 *
 * @link       https://roark.at
 * @since      1.0.0
 *
 * @package    Smart_Image_Tag
 * @subpackage Smart_Image_Tag/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Smart_Image_Tag
 * @subpackage Smart_Image_Tag/includes
 * @author     Roark <marcello@roark.at>
 */

namespace Inc\Base;

class Activate
{
    public static function activate()
    {
        flush_rewrite_rules();

        if (get_option('smart_image_tag')) {
            return;
        }

        $smart_image_default_options = array(
            'api_key' => '',
            'max_requests' => 10,
            'label_detection' => 1,
            'web_entities' => 0,
            'image_properties' => 0,
            'landmark_detection' => 0,
            'logo_detection' => 0,
            'image_alt_text' => 1,
            'image_caption' => 0,
            'image_tags' => 0,
            'image_categories' => 0,
            'post_tags' => 0,
            'post_categories' => 0,
            'confidence_treshold' => 85,
        );

        update_option('smart_image_tag', $smart_image_default_options);
    }
}
