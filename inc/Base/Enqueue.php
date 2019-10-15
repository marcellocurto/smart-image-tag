<?php
/**
 * @package  Smart_Image_Tag
 */
namespace Inc\Base;

use \Inc\Base\BaseController;

class Enqueue extends BaseController
{
    public function register()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueue'));
    }

    public function enqueue()
    {
        wp_enqueue_script('media_upload');
        wp_enqueue_media();
        wp_enqueue_style('smartimagetagstyle', $this->plugin_url . 'assets/smartimagetag.min.css');
        wp_enqueue_script('smartimagetagscript', $this->plugin_url . 'assets/smartimagetag.min.js');

    }
}
