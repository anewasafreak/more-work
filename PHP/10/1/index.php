<html>

<head>
    <style>
        .column {
            width: 50px;
            height: 50px;
            border: solid 1px #000000
        }

        .odd {
            background-color: black;
        }

        .even {
            background-color: white;
        }
    </style>
</head>

<body>
    <table>
        <tbody>
            <?php for ($j = 0; $j < 8; $j++) { ?>
            <tr>
                <?php for ($i = 0; $i < 8; $i++) {
                    $displayColor = 'odd';

                    if (($i % 2 === 0 && $j % 2 === 0) || ($j % 2 !== 0 && $i % 2 !== 0)) {
                        $displayColor = 'even';
                    } ?>
                <td class = "column <?= $displayColor; ?>"></td>
                <?php } ?>
            </tr>
            <?php } ?>
        </tbody>
    </table>
</body>

</html>