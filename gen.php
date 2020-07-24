<?php

function createLink ($year, $month, $day, $lang) {
  return "blog/$lang/$year-$month-$day.html";
}

function padlen ($s) {
  strlen($s) == 1 && ($s = "0$s");
  return $s;
}

function menu ($year, $month, $day, $minYear, $maxYear, $data, $lang) {
  $monthDict = [
    'default' => ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
    'ru' => ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
  ];
  $monthDictLang = isset($monthDict[$lang]) ? $lang : 'default';
  $menu = "<p class=\"h_font dates\">";

  for ($y = $minYear; $y < $maxYear + 1; ++$y) {
    $active = $y == $year ? " class=\"active\"" : "";
    $url = isset($data[$y]) ? ' href="' . $data[$y]["url"]. '"' : "";
    $menu .= "<a$active$url>$y</a>";
  }

  $menu .= "</p><p class=\"h_font dates\">";

  for ($m = 0; $m < 12; ++$m) {
    $pm = padlen($m + 1);
    $active = $pm == $month ? " class=\"active\"" : "";
    $url = isset($data[$year][$pm]) ? ' href="' . $data[$year][$pm]["url"] . '"' : "";
    $menu .= "<a$active$url>{$monthDict[$monthDictLang][$m]}</a>";
  }

  $menu .= "</p><p class=\"h_font dates\">";
  $numDays = date("t", mktime(0, 0, 0, intval($month) - 1, 10, $year));

  for ($d = 1; $d < $numDays + 1; ++$d) {
    $pd = padlen($d);
    $active = $pd == $day ? " class=\"active\"" : "";
    $url = isset($data[$year][$month][$pd]) ? ' href="' . $data[$year][$month][$pd]["url"] . '"' : "";
    $menu .= "<a$active$url>$d</a>";
  }

  return "$menu</p>";
}

function processLang ($lang) {
  $fileList = glob("blog/data/$lang/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]");
  sort($fileList);
  $data = [];
  $minYear = 0;
  $maxYear = 0;
  $total = count($fileList);
  $indexFile = '';

  for ($i = $total - 1; $i >= 0; --$i) {
    $year = substr($fileList[$i], 13, 4);
    $month = substr($fileList[$i], 17, 2);
    $day = substr($fileList[$i], 19, 2);
    $url = '/' . createLink($year, $month, $day, $lang);
    $i == 0 && ($minYear = $year) && ($indexFile = createLink($year, $month, $day, $lang));
    $i == $total - 1 && ($maxYear = $year);

    ! isset($data[$year]) && ($data[$year]["url"] = $url);
    ! isset($data[$year][$month]) && ($data[$year][$month]["url"] = $url);
    $data[$year][$month][$day] = [
      "url" => $url,
      "filename" => $fileList[$i]
    ];
  }

  unset($year); unset($month); unset($day);
  $template = file_get_contents("templates/$lang/blog.html");

  foreach ($data as $year => $yearV) {
    foreach ($yearV as $month => $monthV) {
      if ($month == "url") {
        continue;
      }

      foreach ($monthV as $day => $dayV) {
        if ($day == "url") {
          continue;
        }

        $filename = createLink($year, $month, $day, $lang);
        echo "Generating $filename\n";
        file_put_contents($filename, str_replace("{content}", file_get_contents($dayV["filename"]), str_replace("{menu}", menu($year, $month, $day, $minYear, $maxYear, $data, $lang), $template)));
      }
    }
  }

  if ($indexFile) {
    echo "Creating index file\n";
    copy($indexFile, "blog/$lang/index.html");
  }

  echo "$lang verion DONE\n";
}

processLang("ru");
processLang("en");
