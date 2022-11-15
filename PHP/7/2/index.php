<?php
declare(strict_types=1);
$someProducts = [
    '000_product_1  ',
    ' 000_product_2',
    '000_product_3  ',
    '000_product_4',
    '  000_product_5 ',
    '000_product_20',
];

echo PHP_EOL . '1 užduotis' . PHP_EOL;
/*
    Išskaidykite $longLine kintamajį į atskirus žodžius. Žodžiai turi grįžti iš funkcijos masyvo formoje.
    Skaidykite per underscore (_)
    */
function exercise1(): array
{

    $longLine = 'Hello_how_are_you_doing?';

    return explode('_', $longLine);
}
print_r(exercise1());

echo PHP_EOL . '2 užduotis' . PHP_EOL;
/*
    Grąžinkite masyvą, kuris talpintų tik tuos žodžius, kurie panašūs į emailų adresus
    t.y. turi savyje simbolį @
    */
/*function exercise2(): array
{
    $emails = [
        'some@email.com',
        'someAemail.com',
        'another@gmail.com',
        'notAreal.email.com',
        'real@gmail.com',
    ];

    return array_filter($emails, fn($email) => str_contains($email, '@'));
}
print_r(exercise2());*/

echo PHP_EOL . '3 užduotis' . PHP_EOL;
/*
    Suskaičiuokite ir grąžinkite visų $products masyve esančių eilučių ilgių sumą.
    Naudokite $someProducts masyvą
    */
function exercise3(array $products): int
{
    return array_reduce($products, fn(?int $sum, $product) => $sum += strlen($product));
}
print_r(exercise3($someProducts));

echo PHP_EOL . '4 užduotis' . PHP_EOL;
/*
    Kiekvienam žodžiui apskaičiuokite balsių skaičių (a, e, i, o, u)
    Funkcijos kvietimas: exercise4()
    Funkcija grąžina: [2, 3, 3, 1, 2]
    */
function exercise4(): array
{
    $words = [
        'tennis',
        'rooftops',
        'hillside',
        'warm',
        'friends',
    ];
    
    

    return [];
}

echo PHP_EOL . '5 užduotis' . PHP_EOL;
/*
    Suskaičiuokite ir grąžinkite visų $products masyve esančių eilučių ilgių sumą, BET
    į sumą neįtraukite tuščių simbolių - ty. tarpų, new line ir pan.
    Naudokite $someProducts masyvą.
    */
function exercise5(array $products): int
{


    return 0;
}

echo PHP_EOL . '6 užduotis' . PHP_EOL;
/*
    Suskaičiuokite kiek balsių yra tekste
    */
function exercise6(): int
{
    $text = 'The African philosophy of Ubuntu has its roots in the Nguni word for being human.
    The concept emphasises the significance of our community and shared humanity and teaches
    us that "A person is a person through others". Many view the philosphy as a counterweight
    to the culture of individualism in our contemporary world.';



    return 0;
}

###PAPILDOMAI###

echo PHP_EOL . '7 užduotis' . PHP_EOL;
/*
    Funkcija turi priimti string'ą, kuris bus skaidomas,
    bei masyvą segmentų, pagal kuriuos bus skaidoma.
    Kvietimas turi atrodyti taip:
    exercise1('Hello_how_are-you doing?', [' ', '-', '_'])
    Funkcijos outputas turėtų atrodyti taip:
    ['Hello', 'how', 'are', 'you', 'doing?']
    */

function extraExercise1(string $stringToSplit, array $delimiters): array
{

    return [];
}

echo PHP_EOL . '8 užduotis' . PHP_EOL;
/*
    Sukategorizuokite žodžius pagal jų pradžios simbolį.
    Funkcija kviečiama:
    exercise2(['hello', 'Hickup', '123', 'computer'])
    Funkcijos outputas:
    [
        'h' => ['hello', 'Hickup'],
        '1' => ['123'],
        'c' => ['computer'],
    ]
    */
function extraExercise2(array $words): array
{


    return [];
}

echo PHP_EOL . '9 užduotis' . PHP_EOL;
/*
    Išveskite žodžių statistiką.
    Funkcija kviečiama:
    exercise2(['hello', 'you'])
    Funkcijos outputas:
    [
        'hello' => [
            'vowels' => 2,
            'consonants' => 3,
            'length' => 5,
            'starts_with' => h,
            'ends_with' => o,
        ],
        'you' => [
            'vowels' => 3,
            'consonants' => 0,
            'length' => 3,
            'starts_with' => y,
            'ends_with' => u,
        ]
    ]
    */
function extraExercise3(array $words): array
{


    return [];
}

echo PHP_EOL . '10 užduotis' . PHP_EOL;
/*
    Grąžinkite masyvą, kuris savyje turėtų tik tuos žodžius, kurie arba prasideda, arba baigiasi
    simboliais a, s, b, o
    */
function extraExercise4(): array
{

    $emails = [
        'some@email.com',
        'someAemail.com',
        'another@gmail.com',
        'notAreal.email.io',
        'real@gmail.com',
    ];

    return [];
}