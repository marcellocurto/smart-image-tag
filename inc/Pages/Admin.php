<?php
/**
 * @package  Smart_Image_Tag
 */
namespace Inc\Pages;

use \Inc\Api\Callbacks\AdminCallbacks;
use \Inc\Api\SettingsApi;
use \Inc\Base\BaseController;

class Admin extends BaseController
{
    public $settings;

    public $callbacks;

    public $pages = array();

    public $subpages = array();

    public function register()
    {
        $this->settings = new SettingsApi();

        $this->callbacks = new AdminCallbacks();

        $this->setPages();

        $this->setSubpages();

        $this->setSettings();
        $this->setSections();
        $this->setFields();

        $this->settings->addPages($this->pages)->withSubPage('Dashboard')->addSubPages($this->subpages)->register();
    }

    public function setPages()
    {
        $this->pages = array(
            array(
                'page_title' => 'Smart Image Tag',
                'menu_title' => 'Image Tag',
                'capability' => 'manage_options',
                'menu_slug' => 'smart_image_tag',
                'callback' => array($this->callbacks, 'adminMedia'),
                'icon_url' => 'dashicons-format-gallery',
                'position' => 99,
            ),
        );
    }

    public function setSubpages()
    {
        $this->subpages = array(
            array(
                'parent_slug' => 'smart_image_tag',
                'page_title' => 'Settings',
                'menu_title' => 'Settings',
                'capability' => 'manage_options',
                'menu_slug' => 'smart_image_tag_settings',
                'callback' => array($this->callbacks, 'adminSettings'),
            ),
            array(
                'parent_slug' => 'smart_image_tag',
                'page_title' => 'Support',
                'menu_title' => 'Support',
                'capability' => 'manage_options',
                'menu_slug' => 'smart_image_tag_support',
                'callback' => array($this->callbacks, 'adminSupport'),
            ),
        );
    }

    public function setSettings()
    {
        $args = array(
            array(
                'option_group' => 'smart_image_tag_options_group',
                'option_name' => 'smart_image_tag',
                'callback' => array($this->callbacks, 'smartimagetagSanitize'),
            ),
        );

        $this->settings->setSettings($args);
    }
}
