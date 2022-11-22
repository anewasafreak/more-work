<?php
if(isset($_GET['path']) && $_GET['path'] !== ''){
    $filePath = $_GET['path'];

    if (file_exists($filePath)) {
        $fileName = basename($filePath);
        $fileSize = filesize($filePath);
    
        // Output headers.
        header("Cache-Control: private");
        header("Content-Type: application/stream");
        header("Content-Length: ".$fileSize);
        header("Content-Disposition: attachment; filename=" . $fileName);
    
        // Output file.
        readfile($filePath);
        exit();
    }
    else {
        die('Query isn\'t valid');
    }
}