<form action='upload.php' method="POST" enctype="multipart/form-data">
    <input type="file" name="my-file"> <br>
    <input type="submit" value="Upload">
</form>
<?php
function printFileList(): void
{
    $fileResource = fopen('filesDb.txt', 'r');

    while (!feof($fileResource)) {
        $fileData = fgets($fileResource);
        if ($fileData) {
            echo sprintf(
                '<li>%s <a href="%s" target="_blank">Preview</a> | <a href="download.php?path=%s">Download</a>',
                $fileData,
                $fileData,
                $fileData
            );
        }
    }
}
;
?>

<div>
    <?php printFileList(); ?>
</div>