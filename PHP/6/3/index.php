<?php

//IS ARRAY, COUNT

	$products = [
	  'table',
	  'desk',
	  'chair',]; 
	  
	  var_dump(is_array($products));
	  var_dump(count($products)); 
	  
	  
	  //ARRAY RAND, VALUES, KEYS, IMPLODE
	  
	/*  if(is_array($products) === true && count($products) != 0) {
	    foreach($products as $product) {
	      echo $product . PHP_EOL;
	    };
	    var_dump(array_search('lamp', $products, true));
	    var_dump(in_array('desk', $products, true));
	  };
	 // var_dump(array_rand($products, 2))
	 $products2 = [
	  'product1' => 'table',
	  'product2' => 'desk',
	  'product3' => 'chair',];
	  
	  print_r($products2);
	  
	  print_r(array_values($products2)); //changes array indexes to int (from 0) indexes
	  
	  print_r(array_keys($products2)); //prints out an array's keys in an int index array
	  
	  var_dump(implode('-', $products2)); //connects array elements to a string, like JS toString()
	  
	  //implode() can be done as a foreach loop, but it isn't useful as we already have implode().
	  $text = null;
	  
	  foreach($products2 as $product) {
	    $text .= $product;
	    if (end($products2) !== $product) {
	      $text .= '-';
	    };
	  };
	  
	  echo $text . PHP_EOL; */
	  
	  
	  //EXPLODE
	  
/*	  $text = "hello-hi-greetings";
	  
	  var_dump(explode('-', $text)); //an additional parameter limit can be given.
	  var_dump(explode('-', $text, 0));  //0 limit is going to give the same as 1 limit.
	  var_dump(explode('-', $text, 1));
	  var_dump(explode('-', $text, 2)); // any other number will seperate the text into the given parts (2 => 2 parts, 3 => 3 parts, etc.) and the rest of the text is put into the last part.
	  var_dump(explode('-', $text, -1)); //all elements with a negative limit will be returned, except for the last element of the amount specified (-1 => 1 element from the end is gone, -2 => 2 elements from the end are gone). */
	  
	  
	  //ARRAY UNIQUE
	  
/*	  $typesOfHellos = [
	    'hello',
	    'hi',
	    'greetings',
	    'greetings',
	    ];
	  
	  var_dump(array_unique($typesOfHellos)); //array_unique() is an easy way to remove duplicates from an array. */
	  
	  
	  //ARRAY DIFF
	  
/*$listOfUsernames = [
  'anewasafreak',
  'ievastanev',
  'amogusbalz',
  'sunfish3007',
  'dysph0rical304',
  ];
	  
$listOfApprovedUsernames = [
  'ievastanev',
  'sunfish3007',
  ];
  
  var_dump(array_diff($listOfUsernames, $listOfApprovedUsernames)); //array_diff() shows elements that ONLY exist in the FIRST array. In this example it will show "unapproved" usernames. */
  
  
  //ARRAY INTERSECT
  
/*  $listOfUsernames = [
  'anewasafreak',
  'ievastanev',
  'amogusbalz',
  'sunfish3007',
  'dysph0rical304',
  ];
	  
$listOfApprovedUsernames = [
  'ievastanev',
  'sunfish3007',
  ];
  
  var_dump(array_intersect($listOfApprovedUsernames, $listOfUsernames)) //shows elements that exist in BOTH arrays. This example shows only "approved" usernames.*/
  
  
  //ARRAY MERGE
  
/*  $products1 = [
    'table',
    'desk',
    'lamp',
    ];
    
  $products2 = [
    'mouse',
    'monitor',
    'phone',
    ];
    
  var_dump(array_merge($products1, $products2)); //array_merge() merges two or more arrays. if the arrays are associative, indexes of the same name will be replaced with new ones. if they're enumerative nothing changes and indexes simply get changed to a different number. */
  

//ARRAY	MAP

/*$products = [
    'table',
    'desk',
    'lamp',
    'mouse',
    'monitor',
    'phone',
    ];
    
$modifiedProducts = array_map(function ($product) { //array_map() modifies each array element based on a function
  $product .= ' count=0'; //adds text to an element
  
  return $product; //element is now changed (woo)
},
$products);

var_dump($modifiedProducts)*/


// ARRAY REDUCE                  RETURN TO THIS LATER

/*$numbers = [12, 123, 2, 4, 7, 43, 1, 5, 7];

$newNumber = array_reduce($numbers,
function(?int $sum, int $number) {
  $sum += $number;
}
);

var_dump($newNumber); */


//ARRAY FILTER

$numbers = [12, 123, 2, 4, 7, 43, 1, 5, 7];

$newNumbers = array_filter($numbers, function (int $number){
  return $number % 2 === 0;
});

print_r($newNumbers);
?>