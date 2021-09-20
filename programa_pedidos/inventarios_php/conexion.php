<?php
include('./bd/inicia_conexion.php');
$dsn = "Driver={SQL Server};Server=192.168.0.7;Port=1433;Database=master";
$data_source = 'zzzz';
$user = 'sa';
$password = 'grueconsa';
// Connect to the data source and get a handle for that connection.
$conn = odbc_connect($dsn, $user, $password);
if (!$conn) {
    if (phpversion() < '4.0') {
        exit("Connection Failed: . $php_errormsg");
    } else {
        exit("Connection Failed:" . odbc_errormsg());
    }
}


$mysql = "SELECT * FROM `conteos` WHERE `idInventario` = " . $_GET["idInventario"];
$res = mysqli_query($con, $mysql);
if (!$res) {
    echo 'Fallo Mysql';
}
while ($fila = mysqli_fetch_array($res)) {
    if ($fila["idEmpresa"] == 1) {
        $empresa = 'unhesa';
    } else {
        $empresa = 'proquima';
    }
    // echo $fila["idEmpresa"];
    echo '<br>';
    echo '<br>';
    $sql = "SELECT b.OnHand AS 'Existencia' 
    FROM " . $empresa . ".dbo.OITM a 
    INNER JOIN " . $empresa . ".dbo.OITW b ON a.ItemCode = b.ItemCode 
    INNER JOIN " . $empresa . ".dbo.OWHS c ON b.WhsCode = c.WhsCode 
    WHERE b.OnHand > 0 AND b.WhsCode in (" . $fila["CodigoBodega"] . ") AND a.ItemCode = '" . $fila["CodigoSAP"] . "' 
    ORDER BY b.WhsCode";
    $result = odbc_exec($conn, $sql);
    if (!$result) {
        echo 'F';
    }
    if (odbc_num_rows($result) <= 0) {
        echo 'No hay existencias';
    } else {
        while (odbc_fetch_row($result)) {
            $existencia = odbc_result($result, 1);
        }
        $mysql_2 = "UPDATE conteos SET `ExistenciaSAP`= " . $existencia . " WHERE `idConteo` = " . $fila["idConteo"];
        echo $mysql_2;
        $res_2 = mysqli_query($con, $mysql_2);
    }
    // header("Location: ./index.php?opcion=0&fecha=" . $_GET["inventario"]);
}