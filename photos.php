<?php

function getSectionPath($section) {
  return "images/{$section}/pics/";
}

function getSectionThumbPath($section) {
  return "images/{$section}/thumbs/";
}

function getName($filename, $section) {
  $startIndex = strlen(getSectionPath($section));
  return substr($filename, $startIndex, -4);
}

$sections = ['photos', 'designs'];
$template = file_get_contents('templates/photos.js');

foreach ($sections as $section) {
  $fileList = glob(getSectionPath($section) . '*.jpg');
  $json = [];

  foreach ($fileList as $filename) {
    $name = getName($filename, $section);

    $json[] = [
      'name' => $name,
      'thumb' => getSectionThumbPath($section) . $name . '.jpg',
      'src' => $filename
    ];
  }

  file_put_contents("js/{$section}.js" ,str_replace('{photos}', json_encode($json), $template));
}
