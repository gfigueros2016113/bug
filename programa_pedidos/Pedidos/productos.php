<?php
define ('DB_USER', "admin");
define ('DB_PASSWORD', "");
define ('DB_DATABASE', "facturacion");
define ('DB_HOST', "192.168.0.7");
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
$sql = "SELECT *, CONCAT(codigo, '-',nombre) as wea FROM Producto
        WHERE codigo LIKE '%".$_GET['q']."%'";
$result = $mysqli->query($sql);
$json = [];
while($row = $result->fetch_assoc()){
     $json[] = ['id'=>$row['idProducto'], 'text'=>$row['wea']];
}
echo json_encode($json);