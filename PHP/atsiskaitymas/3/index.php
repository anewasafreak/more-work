<?php

//   Destination "Paris".
//   Titles: "Romantic Paris", "Hidden Paris"
//   Total: 99500
//   ************
//   Destination "New York"

$holidays = [
    [
        'title' => 'Romantic Paris',
        'destination' => 'Paris',
        'price' => 1500,
        'tourists' => 55,
    ],
    [
        'title' => 'Amazing New York',
        'destination' => 'New York',
        'price' => 2699,
        'tourists' => 21,
    ],
    [
        'title' => 'Spectacular Sydey',
        'destination' => 'Sydey',
        'price' => 4130,
        'tourists' => 9,
    ],
    [
        'title' => 'Hidden Paris',
        'destination' => 'Paris',
        'price' => 1700,
        'tourists' => 10,
    ],
    [
        'title' => 'Emperors of the past',
        'destination' => 'Beijing',
        'price' => null,
        'tourists' => 10,
    ],
];

function exercises3($holidaysList)
{
    $allHolidays = [];
    for ($i = 0; $i < count($holidaysList); $i++) {
        if (isset($holidaysList[$i]['price'])) {
            $holidaySummary = [
                'destination' => $holidaysList[$i]['destination'],
                'titles' => [$holidaysList[$i]['title']],
                'total' => $holidaysList[$i]['price'] * $holidaysList[$i]['tourists']
            ];
            foreach ($holidaysList as $holiday) {
                if ($holidaySummary['destination'] === $holiday['destination'] && !in_array($holiday['title'], $holidaySummary, true)) {
                    $holidaySummary['titles'][] = $holiday['title'];
                    $holidaySummary['total'] += $holiday['price'] * $holiday['tourists'];
                }
            }

            $holidaySummary['titles'] = array_unique($holidaySummary['titles']);
            $holidaySummary['titles'] = implode(", ", $holidaySummary['titles']);

            $allHolidays[] = $holidaySummary;
        }
        ;
    }
    ;

    function super_unique($array, $key)
    {
        $temp_array = [];
        foreach ($array as &$v) {
            if (!isset($temp_array[$v[$key]]))
                $temp_array[$v[$key]] = & $v;
        }
        $array = array_values($temp_array);
        return $array;

    }

    $allHolidays = super_unique($allHolidays, 'destination');

    foreach ($allHolidays as $key => $holidays) {
        echo 'Destination ' . $holidays['destination'] . PHP_EOL;
        echo 'Titles: ' . $holidays['titles'] . PHP_EOL;
        echo 'Total: ' . $holidays['total'] . PHP_EOL;

        $array_keys = array_keys($allHolidays);
        if (end($array_keys) !== $key) {
            echo '************' . PHP_EOL;
        }
    }
    ;
}

exercises3($holidays);