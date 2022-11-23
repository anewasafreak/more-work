<?php
/*1. Parašykite programą kuri per scripto argumentus priimtų įvestą datą ir išvestų suformuotą datą formatu: 01-31-2022
13:13:13 */

// if(!isset($argv[1])) {
//     echo "Input date first!";
//     exit(1);
// };

// $date = new DateTime($argv[1]);

// var_dump($date->format('d-m-Y H:i:s'))

/*2. Parašykite programą kuri priimtų iš interaktyvaus terminalo 2 skaičius, ir suskaičiuotų nurodytų skaičių sumą. */

// echo 'Input number: ';
// fscanf(STDIN, '%d', $a);
// echo 'Input number: ';
// fscanf(STDIN, '%d', $b);

// echo 'Suma: ' . $a + $b;

/*3. Papildykite 2 programą. Padarykite taip kad būtų galima priimti daugiau negu du skaičius ir būtų suskaičiuota pridėtų
skaičių suma.

Pvz.:
Įveskite masyvo elementus 5 6 7 8 999 99

Suma: 1124*/

// $input = readline('Input your numbers: ');
// $numbers = explode(" ", $input);

// $sum = 0;
// foreach($numbers as $number) {
//     $number = (int)$number;

//     $sum = $sum + $number;
// }

// echo 'The sum is ' . $sum


/*4. Parašykitę programą kuri leistų suskaičiuoti KMI(Kūno masės indeksą). KMI = svoris (kg) / (ūgis/100)^2 (m)
- Progrmos vienas laukas turi priimti ūgį
- programos kitas laukas turi priimti svorį
Programa turi išvesti suapavalintą reikšmę iki 2 simbolių.

Pvz.:
Ūgis: 180
Svoris: 80

KMI: 24,69*/

// $height = readline('Input height (in centimeters) ');
// $height = (float)$height;
// $weight = readline('Input weight (in kilograms) ');
// $weight = (float)$weight;
// $BMI = (float)round($weight/($height/100)**2, 2);

// print_r("Your BMI is " . $BMI);

// var_dump($height, $weight, $BMI);

/*5. Išplėskite 4. programą ir pridėkite įvedamų duomenų tikrinimą. Jeigu įvestas ne numeris, išveskite klaidos pranešimą
ir nutraukite programos vykdymą.*/

$height = readline('Input height (in centimeters) ');
$height = (int)$height;
if(!is_int($height)) {
    echo "Error - Wrong Input.";

    exit(1);
};
$weight = readline('Input weight (in kilograms) ');
$weight = (float)$weight;
if(!is_float($weight)) {
    echo "Error - Wrong Input.";

    exit(1);
};
$BMI = round($weight/($height/100)**2, 2);

print_r("Your BMI is " . $BMI);

/*6. Praplėskite 5 programą. Leiskite vartotojui pasitaisyti ir vestį numerį dar kartą. Po 5 neteisingų bandymų nutraukite
programos vykdymą

PVZ.:

php index.php
Įveskite numerį: asdfa
ivestas blogas numeris. Liko bandymų: 5
Įveskite numerį: asdf
ivestas blogas numeris. Liko bandymų: 4
Įveskite numerį: asdf
ivestas blogas numeris. Liko bandymų: 3
Įveskite numerį: asdf
ivestas blogas numeris. Liko bandymų: 2
Įveskite numerį: adsf
ivestas blogas numeris. Liko bandymų: 1
Įveskite numerį: asdf
Tu gal skaiciu nepažįsti?*/

/*7. Parašykite programą, kuri leistų įvesti vartotojo informaciją į failą.
Console turi priimti informaciją:
vardas, pavardė, adresas

Ir pridėjus turi išspausdinti failą į kurį dedame informacija.*/
// $database = fopen('database.txt', 'a+');
// $name = readline("Input your name ");
// $surname = readline("Input your surname ");
// $address = readline("Input your address ");

// fwrite($database, "Name: " . $name . PHP_EOL . "Surname: " . $surname . PHP_EOL . "Address: " . $address . PHP_EOL);
// echo fread($database, filesize('database.txt'));
?>