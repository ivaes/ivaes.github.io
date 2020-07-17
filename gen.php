<?php

function createLink ($year, $month, $day) {
  return "blog-$year-$month-$day.html";
}

function padlen ($s) {
  strlen($s) == 1 && ($s = "0$s");
  return $s;
}

function menu ($year, $month, $day, $minYear, $maxYear, $data) {
  $monthDict = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  $menu = "<p class=\"h_font dates\">";

  for ($y = $minYear; $y < $maxYear + 1; ++$y) {
    $active = $y == $year ? " class=\"active\"" : "";
    $url = isset($data[$y]) ? $data[$y]["url"] : "";
    $menu .= "<a$active href=\"$url\">$y</a>";
  }

  $menu .= "</p><p class=\"h_font dates\">";

  for ($m = 0; $m < 12; ++$m) {
    $pm = padlen($m + 1);
    $active = $pm == $month ? " class=\"active\"" : "";
    $url = isset($data[$year][$pm]) ? $data[$year][$pm]["url"] : "";
    $menu .= "<a$active href=\"$url\">{$monthDict[$m]}</a>";
  }

  $menu .= "</p><p class=\"h_font dates\">";
  $numDays = date("t", mktime(0, 0, 0, intval($month) - 1, 10, $year));

  for ($d = 1; $d < $numDays + 1; ++$d) {
    $pd = padlen($d);
    $active = $pd == $day ? " class=\"active\"" : "";
    $url = isset($data[$year][$month][$pd]) ? $data[$year][$month][$pd]["url"] : "";
    $menu .= "<a$active href=\"$url\">$d</a>";
  }

  return "$menu</p>";
}

$fileList = glob("blog/data/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]");
sort($fileList);
$data = [];
$minYear = 0;
$maxYear = 0;
$total = count($fileList);
$indexFile = '';

for ($i = $total - 1; $i >= 0; --$i) {
  $year = substr($fileList[$i], 10, 4);
  $month = substr($fileList[$i], 14, 2);
  $day = substr($fileList[$i], 16, 2);
  $url = createLink($year, $month, $day);
  $i == 0 && ($minYear = $year) && ($indexFile = createLink($year, $month, $day));
  $i == $total - 1 && ($maxYear = $year);

  ! isset($data[$year]) && ($data[$year]["url"] = $url);
  ! isset($data[$year][$month]) && ($data[$year][$month]["url"] = $url);
  $data[$year][$month][$day] = [
    "url" => $url,
    "filename" => $fileList[$i]
  ];
}

unset($year); unset($month); unset($day);
$template = file_get_contents("templates/blog.html");

foreach ($data as $year => $yearV) {
  foreach ($yearV as $month => $monthV) {
    if ($month == "url") {
      continue;
    }

    foreach ($monthV as $day => $dayV) {
      if ($day == "url") {
        continue;
      }

      $filename = createLink($year, $month, $day);
      echo "Generating $filename\n";
      file_put_contents($filename, str_replace("{content}", file_get_contents($dayV["filename"]), str_replace("{menu}", menu($year, $month, $day, $minYear, $maxYear, $data), $template)));
    }
  }
}

echo "Creating index file\n";
copy($indexFile, "blog.html");
echo "DONE\n";
