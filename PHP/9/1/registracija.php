<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' &&  (isset($_POST['username']) && isset($_POST['password']))) {
    echo "Hello @" . $_POST['username'];
} else {
    echo 'Password and/or username undefined.';
}
;
?>