<div class="wrap" style="max-width:720px">
	<h1><?php esc_attr_e('Analyze your Images', 'Smart_Image_Tag'); ?></h1>

	<div class="notice notice-success is-dismissible hide-element">
		<p>
			<?php printf(esc_attr__('Keywords were saved.', 'Smart_Image_Tag'));?>
		</p>
	</div>

	<div class="upload-wrapper">

		<h2><?php esc_attr_e('Select images to automatically create tags for them', 'Smart_Image_Tag'); ?>
		</h2>

		<span class="dashicons dashicons-format-gallery"></span>

		<button type="button" id="clickbtn" class="browser button button-hero js-image-upload">
			<?php esc_attr_e('Media Library', 'Smart_Image_Tag'); ?>
		</button>

	</div>

	<div id="items" class="hide-element">
	</div>

	<div id="whereToSave" class="hide-element">
		<fieldset id="fieldsetSave">
			<legend class="screen-reader-text">
				<span>Where would you like to save the keywords?</span>
			</legend>
			<div class="whereToSaveInputWrapper">
				<div class="ui-toggle">
					<input type="checkbox" id="image-tags" name="image-tags" value="image-tags">
					<label for="image-tags">
						<div></div>
					</label>
				</div>
				<div class="ui-label-text">
					<span>Image Tags</span>
					<span class="dashicons dashicons-editor-help"></span>
				</div>
			</div>

			<div class="whereToSaveInputWrapper">
				<div class="ui-toggle">
					<input type="checkbox" id="alt-text" name="alt-text" value="alt-text">
					<label for="alt-text">
						<div></div>
					</label>
				</div>
				<div class="ui-label-text">
					<span>Alternative Text</span>
					<span class="dashicons dashicons-editor-help"></span>
				</div>
			</div>
		</fieldset>

		<div class="save-button-wrapper">
			<input class="button button-hero button-primary" type="submit"
				value="<?php esc_attr_e('Add Selected Keywords'); ?>" id="buttonToDatabase" />
		</div>
	</div>
</div>