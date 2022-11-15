<?php

function exercise1(): int
{
    /*
     Pasinaudodami masyvo operatoriumi paimkite elementą, kurio reikšmė yra 3 ir grąžinkite tą reikšmę iš funkcijos.
     */

    $numbers = [0, 1, 2, 3, 4];

    foreach ($numbers as $number) {
        if ($number === 3) {
            return $number;
        }
        ;
    }
    ;

    return 0;
}

// var_dump(exercise1());

//********************************************************

function exercise2(): array
{
    /*
     Sunaikinkitę reikšmę 2 ir grąžinkite masyvą
     Turėtumėte gauti masyvą: ['zero' => 0, 'one' => 1, 'three' => 3, 'four' => 4]
     */

    $numbers = ['zero' => 0, 'one' => 1, 'two' => 2, 'three' => 3, 'four' => 4];

    foreach ($numbers as $key => $number) {
        if ($number === 2) {
            unset($numbers[$key]);
        }
        ;
    }
    ;

    return $numbers;
}

// print_r(exercise2());

//********************************************************

function exercise3(): array
{
    /*
     Sunaikinkitę visas reikšmes, kurios dalijasi 2 ir grąžinkite masyvą
     Turėtumėte gauti masyvą: ['one' => 1, 'three' => 3, 'five' => 5]
     */

    $numbers = ['ninety' => 90, 'one' => 1, 'two' => 2, 'three' => 3, 'four' => 4, 'five' => 5];

    foreach ($numbers as $key => $number) {
        if ($number % 2 === 0) {
            unset($numbers[$key]);
        }
        ;
    }
    ;

    return $numbers;
}

// print_r(exercise3());

//********************************************************

function getNumbers(): array
{
    return [
        99,
        15,
        28,
        13,
        145,
        99,
        12,
        -57,
        -36,
    ];
}

function exercise12(array $array): int
{
    $sum = 0;
    foreach ($array as $number) {
        $sum = $sum + $number;
    }
    ;

    return $sum;
}
;

// echo '12.' . exercise12(getNumbers()) . PHP_EOL;

//************************

function exercise13(array $array): int
{
    $sum = 0;
    foreach ($array as $number) {
        if ($number % 2 === 0) {
            $sum = $sum + $number;
        }
        ;
    }
    ;

    return $sum;
}
;

// echo '13.' . exercise13(getNumbers()) . PHP_EOL;

//************************

function exercise14(array $array): int
{
    $sum = 0;
    foreach ($array as $number) {
        if ($number >= 0) {
            $sum = $sum + $number;
        }
        ;
    }
    ;

    return $sum;
}
;

// echo '14.' . exercise14(getNumbers()) . PHP_EOL;

//************************

function exercise15(array $array): int
{
    $mult = 1;
    foreach ($array as $number) {
        if ($number % 5 === 0) {
            $mult = $mult * $number;
        }
        ;
    }
    ;

    return $mult;
}
;

// echo '15.' . exercise15(getNumbers()) . PHP_EOL;

//************************


function exercise16(array $array): array
{
    for ($i = 255; $i <= 299; $i++) {
        $array[] = $i;
    }
    ;

    return $array;

}
;

// print_r(exercise16(getNumbers()));

/*
 Kiekviena užduoties dalis turi būti funkcija. Tęskite funkcijų numeraciją: exercise12, exercise13 ir t.t.
 Masyvą gausite iškvietę funkciją 'getNumbers'
 12. Raskite ir grąžinkite visų masyvo narių sumą
 13. Raskite ir grąžinkite lyginių masyvo narių sumą
 14. Raskite ir grąžinkite teigiamų masyvo narių sumą
 15. Raskite ir grąžinkite sandaugą tų masyvo narių, kurie dalijasi iš 5
 16. Į masyvą pridėkite naujų narių - skaičius nuo 255 iki 299 - ir išspausdinkite masyvą pasinaudodami funkcija 'printr'
 */


function exercise4(int $id)
{
    $prefix = 'product_';

    $products = [
        'product_1' => 'desk',
        'product_2' => 'lamp',
        'product_3' => 'sofa',
    ];

    foreach ($products as $key => $product) {
        if ($prefix . $id === $key) {
            unset($products[$prefix . $id]);
        }
    }
    ;

    /*
     Sunaikinkitę visas $products masyve esančias reikšmes, kurių raktai yra prefikso ir ID junginys t.y. ($prefix . $id)
     Grąžinkite pamodifikuotą masyvą.
     Jeigu tokio rakto ($id) nėra, gražinkite null.
     Funkcijai pridėkite trūkstamą return tipą.
     Funkcijos kvietimas: exercise2(1)
     */

    return $products;
}

// print_r(exercise4(2));

function exercise5(): array
{
    $transactions = [
        [
            'total' => 200,
            'status' => 'error',
        ],
        [
            'total' => 150,
            'status' => 'completed',
        ],
    ];

    foreach ($transactions as $key => $transaction) {
        if ($transaction['status'] === 'error') {
            unset($transactions[$key]);
        }
        ;
    }
    ;

    /*
     Sunaikinkite visus elementus, kurių 'status' reikšmė yra 'error' ir grąžinkite pamodifikuotą masyvą.
     Tikėkitės, kad $transactions masyvo narių skaičius gali varijuoti, tad naudokite ciklą.
     */

    return $transactions;
}

// print_r(exercise5());

function exercise6(string $key)
{
    $products = [
        'product_1' => 'shirt',
        'product_2' => 'trousers',
        'product_98' => 'coat',
    ];
    /*
     Funkcija turi grąžinti reikšmę pagal paduotą raktą.
     Jeigu paduotas raktas neegzistuoja $products masyve, grąžinkite null.
     Pridėkite teisingą return tipą.
     Funkcijos kvietimas: exercise4('product_2')
     */

    foreach ($products as $productKey => $product) {

        // return null;

        if ($productKey === $key) {
            return $product;
        }
    }
}
;
print_r(exercise6('product_2'));
?>