<?php

declare(strict_types=1);

function getCities(): array
{
    return [
        [
            'name' => 'Tokyo',
            'population' => 37435191,
        ],
        [
            'name' => 'Delhi',
            'population' => 29399141,
        ],
        [
            'name' => 'Shanghai',
            'population' => 26317104,
        ],
        [
            'name' => 'Sao Paulo',
            'population' => 21846507,
        ],
        [
            'name' => 'Mexico City',
            'population' => 21671908,
        ],
        [
            'name' => 'New York',
            'population' => 25000000,
        ],
    ];
}

function exercise1(array $cities): int
{
    /*
    Suskaičiuokite bendrą miestų populiaciją pasinaudodami paprastu 'foreach' ir grąžinkite ją iš funkcijos.
    Miestus pasiimkite iškvietę funkciją 'getCities'
    */
    
    $population = 0;
    
    foreach($cities as $city) {
      $population += $city['population'];
    };

    return $population;
};

// var_dump(exercise1(getCities()));

function exercise2(array $array): int
{
    /*
    Suskaičiuokite bendrą miestų populiaciją pasinaudodami funkcijomis array_column ir array_sum
    ir grąžinkite ją iš funkcijos
    */

    return array_sum(array_column($array, 'population'));
};

// var_dump(exercise2(getCities()));

function exercise3(array $array): int
{
    /*
    Suskaičiuokite bendrą miestų populiaciją pasinaudodami funkcija array_reduce ir grąžinkite ją iš funkcijos
    */
    
    return array_reduce(array_column($array, 'population'), function(?int $sum, int $cityPopulation){
      $sum += $cityPopulation;
      return $sum;
    });
};

// var_dump(exercise3(getCities()));

function exercise4(array $array): int
{
    /*
    Suskaičiuokite populiaciją miestų, kurie yra didesni nei 25,000,000 gyventojų.
    Rinkites sau patogiausią skaičiavimo būdą.
    */

    return array_sum(array_filter(array_column($array, 'population'), function($cityPopulation){
      return $cityPopulation > 25000000;
    }));
};

// var_dump(exercise4(getCities()));

function exercise5(array $array): array
{
    /*
    Grąžinkite masyvą, kuriame būtų tik tie miestai, kurie yra didesni nei 25,000,000 gyventojų
    Rezultatas turi būti tokios pat struktūros, kaip ir pradinis miestų masyvas:
    [
        [
            'name' => 'Tokyo',
            'population' => 37435191,
        ],
        ...
    ]
    */

    return array_filter($array, function($city){
      return $city['population'] > 25000000;
    });
};

// var_dump(exercise5(getCities()));

function exercise6(): int
{

    /*
    Suskaičiuokite ir grąžinkite bendrą užsakymo sumą.
    Prekėms, kurių pavadinimai nurodyti masyve $lowPriceItems, taikykite kainą 'priceLow'.
    Kitoms prekėms taikykite kainą 'priceRegular'.
    Bandykite panaudoti array_* funkcijas.
    */

    $lowPriceItems = ['t-shirt', 'shoes'];

    $orderItems = [
        [
            'name' => 't-shirt',
            'priceRegular' => 15,
            'priceLow' => 13,
            'quantity' => 3,
        ],
        [
            'name' => 'coat',
            'priceRegular' => 74,
            'priceLow' => 60,
            'quantity' => 6,
        ],
        [
            'name' => 'shirt',
            'priceRegular' => 25,
            'priceLow' => 20,
            'quantity' => 2,
        ],
        [
            'name' => 'shoes',
            'priceRegular' => 115,
            'priceLow' => 100,
            'quantity' => 1,
        ],
    ];
    
    // $sum = 0;
    
    // foreach($orderItems as $item) {
    //   if (in_array($item['name'], $lowPriceItems, true)) {
    //     $sum += ($item['priceLow'] * $item['quantity']);
    //   } else {
    //     $sum += ($item['priceRegular'] * item['quantity']);
    //   };
    //       };
    
    $array = array_reduce($orderItems, function(?int $sum, array $item)use($lowPriceItems){
      if (in_array($item['name'], $lowPriceItems))
        return $sum += $item['priceLow'] * $item['quantity'];
        // return $sum += $item['priceRegular'] * $item['quantity'];
    });


    return $array;
};

// var_dump(exercise6());             COME BACK TO THIS LATER FARTKNOCKER!!!!

function exercise7(): array
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

    /*
    Išfiltruokite masyvą, kurių 'status' reikšmė yra 'error' ir grąžinkite pamodifikuotą masyvą.
    naudokite array_filter.
    */
    
    return array_filter($transactions, function($transaction){
      return $transaction['status'] != 'error';
    });;
};

// var_dump(exercise7());

// Žr. kitą užduotį
function getProducts(): array
{
    return [
        'chair' => [
            'type' => 'furniture',
            'name' => 'Best chair',
            'price' => 15,
        ],
        'lamp' => [
            'type' => 'lighting',
            'name' => 'Ultimate lamp',
            'price' => 99,
        ],
        'sofa' => [
            'type' => 'furniture',
            'name' => 'Soft sofa',
            'price' => 350
        ],
    ];
};

function exercise8(): array
{
    $products = getProducts();
    $fridge = [
        'type' => 'appliance',
        'name' => 'Coolest fridge',
        'price' => 200,
    ];
    /*
    Į masyvą $products pridėkite naują narį ir grąžinkite naujajį masyvą. Nario 'key' - 'fridge'.
    Nario reikšmė - $fridge
    */
    
    $products['fridge'] = $fridge;

    return $products;
};

// var_dump(exercise8());

function exercise9(): float
{
    $products = getProducts();
    /*
    Raskite ir grąžinkite visų produktų kainų vidurkį.
    */

    return array_sum(array_column($products, 'price')) / count($products);
};

// var_dump(exercise9());

function exercise10(): array {
    $transactions = [
        [
            'count' => 2,
            'price' => 13,
        ],
        [
            'count' => 15,
            'price' => 14,
        ],
    ];
    /*
    Kiekvienai iš transakcijų, esančių kintamajame $transactions, suskaičiuokite galutinę sumą ir pridėkite į
    transakciją su raktu 'total'. Grąžinkite $transactions iš funkcijos.
    Tikėkitės, kad tran gali išaugti. Jų gali būti ne 2, o 100. Dėl to naudokite ciklą.
    Laukiamas rezultatas:
    [
        [
            'count' => 2,
            'price' => 13,
            'total' => 26,
        ],
        ...
    ];
    */
    
    foreach($transactions as $transaction) {
      $transaction['total'] = $transaction['price'] * $transaction['count'];
    };

    return $transactions;
};

var_dump(exercise10());