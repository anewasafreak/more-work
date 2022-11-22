<?php
$error = $_FILES['my-file']['error']; //failų gavimui POST metodas neveikia, tačiau formose su failais būtina jį naudoti. Failus išsitraukiame su $_FILES, veikia taip, kaip ir $_POST.

if ($error !== UPLOAD_ERR_OK) { //patartina pasitikrint ar failas išvis egzistuoja prieš vykdant kodą
    echo 'There Was An Error Uploading The File!';
    die();
}

$filename = $_FILES['my-file']['name'];
$fileTempPath = $_FILES['my-file']['tmp_name']; //laikina vieta serveryje
$fileStoragePath = sprintf('storage/%s', $filename); //kur bus mūsų serveryje

if(move_uploaded_file($fileTempPath, $fileStoragePath)) {
    $file = fopen('filesDb.txt', 'a');
    fwrite($file, $fileStoragePath . PHP_EOL);
    fclose($file);
    echo 'File Uploaded Successfully!';
}

header( "refresh:2;url=index.php" );