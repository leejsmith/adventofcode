<!DOCTYPE html>
<html>
	<head>
		<script defer src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"></script>
		<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
		<link rel="stylesheet" href="/style.css"/>
		<title>Advent of Code - Home</title>
		<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
		<script type="text/javascript" src="/script.js"></script>
	</head>
	<body>
		<h1>Lee Smith - Advent of Code</h1>

		<?php 
		$homeLoc = '/home/leejsmith91/advent';
		$level = 0;
		echo display_folders('<li class="{file_class}"><a href="{file_loc}">{file_name}</a>{file_sublist}</li>', '/home/leejsmith91/advent', $level, '/'); ?>
		<?php
		$text = '';
		function display_folders($template, $location, $level, $link)
		{
		    $files = array_diff(scandir($location), array('..', '.'));
		    
		    switch ($level) {
		    	case 0:
		    		$text = 'Year';
		    		break;
		    	case 1:
		    		$text = 'Day';
		    		break;
		    	case 2:
		    		$text = 'Puzzle';
		    		break;
		    }
		    $retVal .= '<ul class="'.strtolower($text).'">';
		    if ($files) {
		        foreach ($files as $file) {
		        	if (!is_file($location . '/' .$file) && !($file == 'js')){
			            $temp = $template;
			            $temp = str_replace("{file}", $file, $temp);
			            $temp = str_replace("{file_loc}", $link . $file, $temp);
			            $temp = str_replace("{file_name}", $text . ' ' . $file, $temp);
			            $temp = str_replace("{file_class}", strtolower($text) . '--' . $file, $temp);
			            $temp = str_replace("{file_sublist}", display_folders('<li class="{file_class}"><a href="{file_loc}">{file_name}</a>{file_sublist}</li>', $location .'/' . $file, $level + 1, $link . $file . '/'), $temp);
			            $retVal .= $temp;
			        }

		        }
		    }
		    
		    $retVal .= "</ul>";
		    return $retVal;
		}
		?>
	</body>
</html>