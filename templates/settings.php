<div class="wrap">
	<h1>Smart Image Tag</h1>
	<?php settings_errors() ?>

	<form method="post" action="options.php">
		<?php
  settings_fields('smart_image_tag_options_group');
  do_settings_sections('smart_image_tag_settings');
  submit_button();
         ?>
	</form>

</div>