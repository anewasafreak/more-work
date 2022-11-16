<html>

<head></head>

<body>
    <form method="GET">
        <input type="number" min="1" name="number" placeholder="Įveskite skaičių">
        <input type="submit" value="Rodyk faktorialą!">
    </form>
    <?php
    if($_GET['number'] > 0) {
        $factorial = 1;

    ##############################3.1##############################
    
    // for($i = 1; $i <= $_GET['number']; $i++) {
    //     $factorial = $factorial * $i;
    // }

    ##############################3.2##############################

    // $factorialArray = range(1, $_GET['number']);
    // $factorial = array_reduce($factorialArray, function($carry, $item){
    //     $carry *= $item;
    //     return $carry;
    // }, 1);

    ##############################3.3##############################

    function findFactorial($number) {
    if($number <= 1){  
        return 1;  
    }else{  
        return $number * findFactorial($number - 1);  
    };
    };

    $factorial = findFactorial($_GET['number']);

    echo 'Faktorialas skaičiaus ' . $_GET['number'] . ' yra ' . $factorial;
    }else {
        echo "GIMMEURNUMBER";
    };
    ?>
</body>
</html>