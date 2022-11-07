<?php


// Visur sudėkite reikiamus parametrų bei return tipus

/*
1. Parašykite funkciją 'dividesBy5', kuri priimtų int tipo skaičių ir grąžintų jo dalybos iš 5 liekaną.
*/

function dividesBy5(int $number): int
{
    return $number % 5;
};

echo dividesBy5(17).PHP_EOL;

/*
2. Parašykite funkciją 'arrayPrinter', kuri priimtų array tipo parametrą ir
išspausdintų kiekvieną masyvo elementą naujoje eilutėje.
Funkcijos kvietimas: arrayPrinter(['some text', 'another text'])
Funkcija grąžina: funkcija nieko negrąžina - ji tik išspausdina masyvą į terminalą:
'some text'
'another text'
...
*/

function arrayPrinter(array $array): int{
    foreach($array as $string) {
        echo $string . PHP_EOL;
    };
    return 0;
};

arrayPrinter(['hello', 'hi', 'greetings', 'good evening']);

/*
3. Parašykite funkciją 'stringEnhancer', kuri grąžintų pakeistą tekstą.
Funkcijos kvietimas: stringEnhancer('some text', '##')
Funkcija grąžina: '##some text##'
Funkcijos kvietimas: stringEnhancer('some text')
Funkcija grąžina: '**some text**'
*/

function stringEnhancer(string $string, string $enhancer): string{
    return $enhancer . $string . $enhancer;
}

echo stringEnhancer("hello", "!!").PHP_EOL;
echo stringEnhancer("hello", "##").PHP_EOL;
echo stringEnhancer("hello", "**").PHP_EOL;

/*
4. Parašykite funkciją 'stringModifier', kuri pamodifikuotų paduotą string tipo kintamąjį.
Funkcijos kvietimas:
$x = 'some text';
stringModifier($x, '##');
echo $x; // '##some text##'
Funkcija grąžina: funkcija nieko negrąžina
*/

function stringModifier(string &$string, string $modifier): string {
    $string = $modifier . $string . $modifier;
    return $string;
}

$x = "hi";

stringModifier($x, "__");

echo $x . PHP_EOL;

/*
5. Parašykite funkciją 'textReplicator', kuri grąžintų 'padaugintą' tekstą.
Funkcijos kvietimas:
textReplicator('some_text', 3);
Funkcija grąžina: 'some_text-some_text-some_text'
Funkcijos kvietimas:
textReplicator('some_text', null);
Funkcija grąžina: 'some_text'
*/

function textReplicator(string $text, ?int $times): string {
    $fullText = $text;
    for($i = 0; $i < $times - 1; $i++) {
       $fullText = $fullText .'-' . $text;
    };

    return $fullText;
};

echo textReplicator("greetings", 3) . PHP_EOL;
echo textReplicator("greetings", null) . PHP_EOL;

/*
6. Paverskite funkciją 'textReplicator', į veikiančią anoniminę funkciją.
*/

$textReplicator = function(string $text, ?int $times): string {
    $fullText = $text;
    for($i = 0; $i < $times - 1; $i++) {
       $fullText = $fullText .'-' . $text;
    };

    return $fullText;
};

echo $textReplicator("hello", 4) . PHP_EOL;

/** PAPILDOMAI */

/*
7. Paverskite funkciją 'stringEnhancer', į lambda(arrow) funkciją.
*/

$stringEnhancer = fn(string $string, string $enhancer) => $enhancer . $string . $enhancer;

echo $stringEnhancer("good evening", "..");
