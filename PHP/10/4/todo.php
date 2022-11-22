<!DOCTYPE html>
<html>

<head>
    <style>

    </style>
</head>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

$_SESSION['toDoItems'] = [];
function saveToSession ($item) {
    if (isset($item)) {
        $_SESSION['toDoItems'][] = $item;
    };
};

function showSession()
{
    if (count($_SESSION['toDoItems']) > 0) {
        foreach ($_SESSION['toDoItems'] as $item) {
            echo '<li>' . $item . '</li>';
        }
        ;
    } else {
        echo 'Free time!';
    }
    ;
}
;

function saveToCookies($item)
{
    $_COOKIE[] = $item;
}
;

function showCookies()
{
    if (count($_COOKIE) > 0) {
        for ($i = 0; $i < count($_COOKIE); $i++) {
            echo '<li>' . $_COOKIE[$i] . '</li>';
        }
        ;
    } else {
        echo 'Free time!';
    }
    ;
}
;
?>

<body>
    <h2>Todo Forms</h2>
    <form action="todo.php" method="post">
        <label for="todo">Pridek dalykus kuriuos reikia padaryti:</label><br>
        <input type="text" id="todo" name="todo" value="" placeholder="Please provide to do item"><br>
        <input type="submit" value="Submit">
        <?php
        saveToSession($_POST['todo']);
        ?>
    </form>

    <div>
        <h3>Things you have to do:</h3>
        <ul>
            <?php showSession();
            print_r($_SESSION);?>
        </ul>
    </div>
</body>

</html>