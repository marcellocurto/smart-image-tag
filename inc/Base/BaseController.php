<?php

/**
 * @package    Smart_Image_Tag
 */

namespace Inc\Base;

class BaseController
{
    public $plugin_path;
    public $plugin_url;
    public $plugin;

    public function __construct()
    {
        $this->plugin_path = plugin_dir_path(dirname(__FILE__, 2));
        $this->plugin_url = plugin_dir_url(dirname(__FILE__, 2));
        $this->plugin = plugin_basename(dirname(__FILE__, 3)) . '/smart-image-tag.php';

        $this->entitiesList = array(
            'label_detection' => 'General Labels',
            'landmark_detection' => 'Landmarks',
            'web_entities' => 'Web Entities',
            'image_properties' => 'Color Names',
            'logo_detection' => 'Logos',
            'text_detection' => 'Text Transcription (OCR)',
            'object_localization' => 'Objects'
        );

        $this->entitiesListBulk = array(
            'label_detection_bulk' => 'General Labels',
            'landmark_detection_bulk' => 'Landmarks',
            'web_entities_bulk' => 'Web Entities',
            'image_properties_bulk' => 'Color Names',
            'logo_detection_bulk' => 'Logos',
            'text_detection_bulk' => 'Text Transcription (OCR)',
            'object_localization_bulk' => 'Objects'
        );

        $this->saveOptionsListUpload = array(
            'image_alt_text' => 'Alt Text',
            'image_caption' => 'Caption',
            'image_description' => 'Description',
            'image_tags' => 'Image Tags',
            'image_categories' => 'Image Categories',
        );

        $this->saveOptionsListBulkMedia = array(
            'image_alt_text' => 'Alt Text',
            'image_caption' => 'Caption',
            'image_description' => 'Description',
            'image_tags' => 'Image Tags',
            'image_categories' => 'Image Categories',
        );

        $this->saveOptionsListBulkPosts = array(
            'post_tags' => 'Post Tags',
            'post_categories' => 'Post Categories',
            'acf_post' => 'Advanced Custom Fields',
        );

        $this->saveOptionsListBulkProducts = array(
            'product_tags' => 'Product Tags',
            'product_categories' => 'Product Categories',
        );
    }
}
