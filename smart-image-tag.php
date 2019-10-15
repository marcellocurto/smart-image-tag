<?php

/**
 *
 * @link              https://roark.at
 * @since             1.0.0
 * @package           Smart_Image_Tag
 *
 * @wordpress-plugin
 * Plugin Name:       Smart Image Tag
 * Plugin URI:        https://roark.at/plugin/auto-tag
 * Description:       Use A.I. to automatically tag images.
 * Version:           1.0.0
 * Author:            Roark
 * Author URI:        https://roark.at
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       smart-image-tag
 * Domain Path:       /languages
 */

// If this file is called firectly, abort.
defined('ABSPATH') or die('Dead');

// Require once the Composer Autoload
if (file_exists(dirname(__FILE__) . '/vendor/autoload.php')) {
    require_once dirname(__FILE__) . '/vendor/autoload.php';
}

/**
 * The code that runs during plugin activation
 */
function activate_smart_image_tag()
{
    Inc\Base\Activate::activate();
}

register_activation_hook(__FILE__, 'activate_smart_image_tag');

/**
 * The code that runs during plugin deactivation
 */
function deactivate_smart_image_tag()
{
    Inc\Base\Deactivate::deactivate();
}

register_deactivation_hook(__FILE__, 'deactivate_smart_image_tag');

/**
 * Initialize all the core classes of the plugin
 */
if (class_exists('Inc\\Init')) {
    Inc\Init::register_services();
}