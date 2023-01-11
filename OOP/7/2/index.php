<?php

include_once "Magic.php";

$magic = new Magic("meow meow");

$objektoEilute = serialize($magic);
// var_dump($objektoEilute);

$object = unserialize($objektoEilute);
// var_dump($object);

$naujasKlonas = clone $magic;
var_dump($naujasKlonas);