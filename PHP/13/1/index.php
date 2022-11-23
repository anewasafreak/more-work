<?php
if (!isset($argv[1]) && ((gettype($argv[1]) !== 'double') || gettype($argv[1]) !== 'integer')) {
    echo 'Invalid input.';

    exit(1);
}
;

$number = $argv[1];

$kvadratas = (int) $number ** 2;

echo 'Skaiciaus ' . $number . ' kvadratas yra ' . $kvadratas;