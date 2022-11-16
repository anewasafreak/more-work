<html>

<head>
    <style>
        td {
            width: 50px;
        }

        .header {
            font-weight: bold;
            border-right: solid 2px black;
        }
    </style>
</head>

<body>
    <form method="GET">
        <input type="number" name="width" placeholder="Plotis">
        <input type="number" name="height" placeholder="Aukštis">
        <input type="submit" value="Spausdink!">
    </form>
    <table>
        <tbody>
            <?php
            if ($_GET['width'] > 0 && $_GET['height'] > 0) {
            for ($j = 0; $j <= $_GET['height']; $j++) { ?>
            <tr>
                <td class="header">
                    <?= $j ?>
                </td>
                <?php
                for ($i = 1; $i <= $_GET['width']; $i++) {
                ?>
                <td>
                    <?php if ($j === 0 && $i === 1) {
                        for ($k = 1; $k <= $_GET['width']; $k++) {
                            echo '<td>' . $k . '</td>';
                        }
                        ;
                    } else if ($j > 0) {
                        echo number_format($j / $i, 3);
                    }
                    ; ?>
                </td>
                <?php } ?>
            </tr>
            <?php }
            } else {
                echo 'Did not receive propper input';
            }; ?>
        </tbody>
    </table>
</body>

</html>