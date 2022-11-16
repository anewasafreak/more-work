<?php

declare(strict_types=1);

echo PHP_EOL . '1st exercise' . PHP_EOL;
/*
1. Išspausdinkite šio momento datą pasinaudodami funkcija 'date'
*/
function exercise1(): void
{
    print_r(date('Y-m-d H:i:s') . PHP_EOL);
}
exercise1();


echo PHP_EOL . '2nd exercise' . PHP_EOL;
/*
2. Išspausdinkite dabartinę datą formatu: '2008-12-15 15:15' pasinaudodami funkcija 'date'
*/
function exercise2(): void
{
    print_r(date('Y-m-d H:i') . PHP_EOL);
}
exercise2();


echo PHP_EOL . '3rd exercise' . PHP_EOL;
/*
3. Išspausdinkite šio momento datą skirtingais formatais, kurie atitiktų pavyzdžius:
- 1970 Mar 1 15:15:00
- 1970 Mar 01 15:15
- 1970 Mar 1st 11:15:00 PM
- 1970/3/1
- savaites numeris (52 savaitės metuose)
- dienos numeris (365 dienos metuose)
*/
function exercise3(): void
{
    print_r(date('Y M j H:i:s') . PHP_EOL);
    print_r(date('Y M d H:i') . PHP_EOL);
    print_r(date('Y M dS h:i:s A') . PHP_EOL);
    print_r(date('Y/n/j') . PHP_EOL);
    print_r(date('W') . PHP_EOL);
    print_r(date('z') . PHP_EOL);
}
exercise3();


echo PHP_EOL . '4th exercise' . PHP_EOL;
/*
4. Sukurkite datos objektą iš šių tekstinių datų:
- 2000-03-02 15:30:00
- 2000/02/15 08:30:00 PM
- 2000 March 2nd 15:30:00
*/
function exercise4(): void
{
    print_r(new DateTime('2000-03-02 15:30:00'));
    print_r(DateTime::createFromFormat('Y/m/d h:i:s A', '2000/02/15 08:30:00 PM'));
    print_r(DateTime::createFromFormat('Y F jS H:i:s', '2000 March 2nd 15:30:00'));
}
exercise4();

echo PHP_EOL . '5th exercise' . PHP_EOL;
/*
5. Sukurkite datą iš '15th Jan 2021 8:15:01 PM' (data X). Pamodifikuokite, kad gautumėte:
- datą po 2 savaičių nuo datos X
- datą po 10 metų nuo datos X
- datą prieš 5 valandas nuo datos X
- paskutinę mėnesio dieną
- pirmą mėnesio dieną
- ateinantį antradienį
- datą prieš 1 dieną 8 valandas 15 minučių nuo datos X
*/

function exercise5(): void
{
    $date = DateTime::createFromFormat('jS M Y g:i:s A', '15th Jan 2021 8:15:01 PM');
    print_r(clone $date->modify('+2weeks'));
    print_r(clone $date->modify('+10years'));
    print_r(clone $date->modify('-5hours'));
    print_r(clone $date->modify('last day of'));
    print_r(clone $date->modify('first day of'));
    print_r(clone $date->modify('next tuesday'));
    print_r(clone $date->modify('-1day -8hours -15minutes'));
}
exercise5();


echo PHP_EOL . '6th exercise' . PHP_EOL;
function exercise6(): void
{
    $products = [
        [
            'name' => 'Wine glass',
            'last_purchase' => '2021 Jan 15 18:34:12',
        ],
        [
            'name' => 'Bread knife',
            'last_purchase' => '2020 Mar 15 23:14:00',
        ],
        [
            'name' => 'Blue chair',
            'last_purchase' => '2019 Dec 02 15:00:12',
        ],
    ];

    /*
    Išspausdinkite produktų paskutinių pirkimų santrauką:
    Wine glass 2021-01-15 18:34:12
    ...
    */

    foreach ($products as $product) {
        print_r($product['name'] . ' ' . DateTime::createFromFormat('Y M d H:i:s', $product['last_purchase'])->format('Y-m-d H:i:s') . PHP_EOL);
    }
    ;
}
;
exercise6();

echo PHP_EOL . '7th exercise' . PHP_EOL;
function exercise7($date1, $date2): string
{
    /*
    Palyginkite datas ir grąžinkite atsakymą, kuri data naujesnė.
    Funkcijos kvietimas: exercise7(new Datetime('2022-01-25 17:13:25'), new Datetime('2020-01-25 17:13:25'));
    Rezultatas:
    'First date is newer'
    Funkcijos kvietimas: exercise7(new Datetime('2020-01-25 17:13:25'), new Datetime('2022-01-25 17:13:25'));
    Rezultatas:
    'Second date is newer'
    */

    if ($date1 > $date2) {
        return 'First date is newer';
    } else {
        return 'Second date is newer';
    }
    ;

    // return '';
}
print_r(exercise7(new Datetime('2022-01-25 17:13:25'), new Datetime('2020-01-25 17:13:25')) . PHP_EOL);
print_r(exercise7(new Datetime('2020-01-25 17:13:25'), new Datetime('2022-01-25 17:13:25')) . PHP_EOL);

echo PHP_EOL . '8th exercise' . PHP_EOL;
function exercise8($date): void
{
    /*
    Išspausdinkite paduotos datos skirtumą nuo dabartinio momento žodžiais.
    Funkcijos kvietimas: exercise8(new Datetime('2020-01-25 17:13:25'));
    Rezultatas:
    Supplied date was 891 days ago
    Funkcijos kvietimas: exercise8(new Datetime('2023-01-25 17:13:25'));
    Rezultatas:
    Supplied date is in the future
    */

    $date = new DateTime();
    print_r($date);
}
exercise8('2020-01-25 17:13:25');

echo PHP_EOL . '9th exercise' . PHP_EOL;
function exercise9($date): void
{
    /*
    Išspausdinkite datų skirtumą žodžiais.
    Funkcijos kvietimas: exercise9(new Datetime('2020-01-25 17:13:25'));
    Rezultatas:
    Supplied date was 2 years 1 months 11 days
    Funkcijos kvietimas: exercise9(new Datetime('2023-01-25 17:13:25'));
    Rezultatas:
    Supplied date is in the future
    */
}

// print_r(date());