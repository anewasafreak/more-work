<?php

/*
 * Keliamieji metai. Parasykite funkcija, kuriai padavus metus (pvz.: 2020)
 * grazintu true - keliamieji metai, false - ne keliamieji
 * Pridekite teisinga return tipa
 *
 * Truputis info:
 *
 * The year can be evenly divided by 4,
 * If the year can be evenly divided by 100, it is NOT a leap year, unless;
 * The year is also evenly divisible by 400. Then it is a leap year.
 */

function isLeapYear(int $year): bool
{
    return $year % 400 === 0 || ($year % 100 != 0 && $year % 4 === 0);
}
;

var_dump(isLeapYear(100));

/*
 * Parasykite funkcija, kuri apskaiciuoti kiek palukanu gausite is banko po x metu, jei palukanos y.
 * Pridekite teisinga return tipa
 */

function calculateInterestSum(float $deposit, float $interest, int $years): float{
    $accumulatedInterest = round($deposit * ((1 + ($interest))** $years), 2);
    return $accumulatedInterest;
}
var_dump(calculateInterestSum(500, 0.05, 3));

/*
 * Parasykite funkcija, kuri isspausdintu fibonacci seka nuo 0 iki nuorodyto skaiciaus
 * Pridekite teisinga return tipa
 * 0, 1, 1, 2, 3, 5, 8, 13
 */

function printFibonacci(int $limiter): string{
    $i = 0;
    $f0 = 0;
    $f1 = 1;
    $fn = 0;
    $sequence = $f0 . ' ' . $f1 . ' ';
    while ($i < $limiter) {
        $i++;
        $fn = $f0 + $f1;
        $f0 = $f1;
        $f1 = $fn;
        $sequence .= $fn . ' ';
    }
    return $sequence;
}

print_r(printFibonacci(12) . PHP_EOL);

/*
 * Parašykite funkciją, kuri apskaičiuotu, paduoto sveiko skaičiaus faktorialą.
 * Pridėkite teisingą return tipą.
 *
 * Kaip apskaičiuojamas faktorialas:
 * n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1
 * arba
 * n! = 1 * 2 * 3 * ... * n
 *
 * 2! = 1 * 2 = 2
 * 3! = 1 * 2 * 3 = 6
 *
 */

function printFactorial(int $factorialRequest): int
{
    $factorial = 1;
    for ($i = 1; $i <= $factorialRequest; $i++) {
        $factorial = $factorial * $i;
    }
    return $factorial;
}

print_r(printFactorial(5));