<?php

//declare(strict_types=1);

/*
1. Pašalinkite/užkomentuokite praeitos užduoties eilutes, kad jos netrukdytų toliau tęsti darbo.
Išveskite į terminalą kintamojo $variableToDebug:
- tik reikšmę
- reikšmę kartu su duomens tipu
*/
$variableToDebug = 15;

echo $variableToDebug . PHP_EOL;
var_dump($variableToDebug);

/*
2. Sudėliokite masyvą ir jį atspausdinkite iš šių reikšmių:
- Hello
- Learning
- Amazing
- CodeAcademy
- Php
- Git
*/

$array = ['Hello', 'Learning', 'Amazing', 'CodeAcademy', 'Php', 'Git'];

var_dump($array);

/*
3. Pakeiskite duotų kintamųjų reikšmes į:
- int
- bool
*/

//pakeisti i int:
$variable1 = false;
$variable1 = (int) $variable1;
$variable2 = true;
$variable2 = (int) $variable2;
$variable3 = '2022 year';
$variable3 = (int) $variable3;

//pakeisti i bool:
$variable4 = 150;
$variable4 = (bool) $variable4;
$variable5 = [];
$variable5 = (bool) $variable5;
$variable6 = 'Year - 2022';
$variable6 = (bool) $variable6;


/*
4. Atlikite šiuo loginius operatorius su duotais kintamaisiais taip, kad gautumėt true ir false
- &&
- ||
*/

$variable7 = 145;
$variable8 = '145';
$variable9 = '150';
$variable10 = 150;

var_dump($variable7 === $variable8 && $variable9 === $variable10);
var_dump($variable7 == $variable8 && $variable9 === $variable10);
var_dump($variable7 == $variable8 || $variable9 == $variable10);

/*
5. Apskaičiuokite PHP pagalba ir išveskite į terminalą. Kiekvienas rezultatas turi būti naujoje eilutėje:
- 987 + 545 - 32 * 94
- 32 pakelkite laipsniu 3 ir pridėkite 18
- 120 padalinkite iš 4 ir dar karta padalinkite iš 3
- apkaičiuokite liekaną po skaičiaus 187 dalybos iš 5
- skaičiui 3 tris kartus pritaikykite increment operatorių - koki skaičių gaunate?
- skaičiui 12 keturis kartus pritaikykite decrement operatorių - koki skaičių gaunate?
*/

var_dump(987 + 545 - 32 * 94);
var_dump(32 ** 3 + 18);
var_dump(120 / 4 / 3);
var_dump(187 % 5);
$i = 3;
$i++;
$i++;
$i++;
var_dump($i);

$i2 = 12;
$i2--;
$i2--;
$i2--;
$i2--;
var_dump($i2);

/*
6. Parasykite koda, kad jis patikrintu ar:
- 56 > 77
- 190 <= 230
- 230 yra lygu '230'
- 45 nera lygu '45
*/

var_dump(56 > 77);
var_dump(190 <= 230);
var_dump(230 === '230');
var_dump(45 !== '45');

/*
7. Parasykite koda, kad jis ar reiksme egzistuoja
- pasirasykite kintamaji $variable = 10; patikrinkite ar jis egzistuoja;
- jeigu egzistuoja patikrinkite koks jo tipas
- istrinkite jo apsirasyma ir patikrinkite ar egzistuojate. kokia reiksme gaunate? ar gaunate error?
*/

$variable = null;
var_dump(isset($variable) ? gettype($variable) : null);

/*
8. Išspausdinkite tekstą, kuris bus sudarytas sujungus visas eilutes, esančias kintamuosiuose apačioje. */
$part1 = 'This';
$part2 = 'is';
$part3 = 'called';
$part4 = 'string';
$part5 = 'concatenation';

var_dump($part1 . $part2 . $part3 . $part4 . $part5);

/*
9. Jūs turite parašyti sąlygą, pagal kurią bus taikoma nuolaida produktų kategorijoms.
Parašykite sąlygą, kuri būtų true, kai:
- produkto kategorija yra 'smartphone' ir kaina yra daugiau arba lygu 1200eur
ARBA
- produkto kategorija yra 'washing_machine' ir kaina yra tarp 500eur ir 700eur (įskaitant 500).
Sąlygos rezultatą priskirkite kintamajam $result ir šį kintamąjį išveskite į terminalą pasinaudodami var_dump.*/
define('CATEGORY_SMARTPHONE', 'smartphone');
define('CATEGORY_WASHING_MACHINE', 'washing_machine');
$productCategory = CATEGORY_SMARTPHONE;
$productPrice = 1200;

