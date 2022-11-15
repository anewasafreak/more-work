<?php
// function countDown(int $number) {
// if ($number > 0) {
//     echo $number . PHP_EOL;
//     countDown($number - 1);
// };
// };

// countDown(10);

function checkPrime(int $number) {
    $var = 0;
    for($i = 1; $i <= $number; $i++) {
        if($number % $i === 0) {
            $var++;
        };
    };

    if($var === 2) {
        return true;
    } else {
        return false;
    }
}

function printPrimeNumber($number) {
    for($i = 1; $i <= $number; $i++) {
        if(checkPrime($i) === true) {
            echo $i . " ";
        }
    }
}

printPrimeNumber(21); 
"I specify the number up to which all prime numbers have to be specified and it'll come out in the terminal underneath!";
