<?php
$input = "liLiukas meskiukas *";
//stringo ilgis
var_dump(strlen("strlen: Liliukas meškiukas"));
$patrimintas = trim($input);
var_dump($patrimintas);
//dar yra ltrim ir rtrim - left trim, right trim. pagal defaulta salina tarpa, \t, \n, \r. 
//Jei reikia kito simbolio, reikia prideti parameta po kablelio:
$patrimintas1 = trim($input,"*");
var_dump($patrimintas1);
$isDidziosios = ucfirst($input);
var_dump($isDidziosios);
$isMazuju = strtolower($input);
var_dump($isMazuju);
$isDidziuju = strtoupper($input);
var_dump($isDidziuju);
//EXPLODE Leidžia išskaidyti string’ą į jo sudedamąsias dalis per tam tikrą segmentą. Išskaidytos dalys yra grąžinamos masyvo pavidalu.
//sintakse: per ka atskirti nauja itema, is kur imti duomenis masyvui
$newArray = explode(' ', $input);
var_dump($newArray);

###sprintf
$name = "Vardenis";
$age = 12;
$price = 13.55;
$message = sprintf("Labas: %s, Tavo amžius yra : %d . Kaina: %02.4f ", $name, $age, $price);
echo $message . PHP_EOL;

// ###str_contains

// $text = 'a lot of text';
// $pleaseFind = 'text';

// var_dump(str_contains($text, $pleaseFind));

// ###str_starts_with & str_ends_with

// $text = 'ilgas labai tekstas su daug zodziu';
// $pleaseFind = 'ilgas';

// var_dump(str_starts_with($text, $pleaseFind));
// var_dump(str_starts_with($text, 'zodziu'));

###strstr

var_dump(strstr('hello@greetings.com', '@'));

###str_split

$string = 'po_du';

var_dump(str_split($string, 2));

###str_replace

var_dump(str_replace('ieskom', 'pakeiciam', 'keiciam ieskom zodi i kita'));

?>