<?php

/**
 * Fired during plugin deactivation
 *
 * @link       https://roark.at
 * @since      1.0.0
 *
 * @package    Smart_Image_Tag
 * @subpackage Smart_Image_Tag/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    Smart_Image_Tag
 * @subpackage Smart_Image_Tag/includes
 * @author     Roark <marcello@roark.at>
 */

namespace Inc\Base;

class Deactivate
{
    public static function deactivate()
    {
        flush_rewrite_rules();
    }
}
