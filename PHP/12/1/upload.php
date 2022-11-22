<?php
$error = $_FILES['my-file']['error']; //failų gavimui POST metodas neveikia, tačiau formose su failais būtina jį naudoti. Failus išsitraukiame su $_FILES, veikia taip, kaip ir $_POST.

if ($error !== UPLOAD_ERR_OK) { //patartina pasitikrint ar failas išvis egzistuoja prieš vykdant kodą
    echo 'There Was An Error Uploading The File!';
    die();
}

if(!is_dir('storage/www')){
    mkdir('storage/www', 0777);
};
$filename = $_FILES['my-file']['name'];
$fileTempPath = $_FILES['my-file']['tmp_name']; //laikina vieta serveryje
$fileStoragePath = sprintf('storage/www', $filename); //kur bus mūsų serveryje

move_uploaded_file($fileTempPath, $fileStoragePath);

echo 'File Uploaded Successfully!';