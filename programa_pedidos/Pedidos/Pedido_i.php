<?php
include("../bd/inicia_conexion.php");
?>
<?php

$sql = "select COALESCE(MAX(correlativo), 0) as id ";
$sql.= " from pedidounhesa";
$resultado = mysqli_query($con, $sql);
while ($fila = mysqli_fetch_array($resultado)) {
    $correlativo = $fila["id"] + 1;
}

$sql = "insert into pedidounhesa (correlativo, fecha_emision, fecha_despacho, direccion, observacion, telefono, hora, observacion_A, total, idVendedor, idtipoentrega, idCliente, idEstado) values (".$correlativo.", NOW()";
$sql = $sql . ", '" . $_POST["fechaDespacho"] . "'";
$sql = $sql . ", '" . $_POST["direccion"] . "'";
$sql = $sql . ", '" . $_POST["observacion"] . "'";
$sql = $sql . ", '" . $_POST["telefono"] . "'";
$sql = $sql . ", '" . $_POST["hora"] . "'";
$sql = $sql . ", '" . $_POST["observacionesA"] . "'";
$sql = $sql . ", " . $_POST["total"] . "";
$sql = $sql . ", " . $_POST["idVendedor"] . "";
$sql = $sql . ", " . $_POST["idTipoEntrega"] . "";
$sql = $sql . ", " . $_POST["idCliente"] . "";
$sql = $sql . ", 1)";

$resultado = mysqli_query($con, $sql);
if ($resultado) {

    $sql = "select MAX(idPedidoUnhesa) as id ";
    $sql.= " from pedidounhesa";
    $resultado = mysqli_query($con, $sql);
    while ($fila = mysqli_fetch_array($resultado)) {
        $pedido = $fila["id"];
    }

    $valor = $_POST["tablita"];
    $array = json_decode($valor, true);
    for ($i=0; $i < Count($array); $i++) { 
        $sql2 = "insert into detallepedidounhesa (cantidad, precio, total, observaciones, idPedidoUnhesa, idProducto) values (";
        $sql2 = $sql2 . "" . $array[$i]["cantidad"] . "";
        $sql2 = $sql2 . ", " . $array[$i]["precio"] . "";
        $sql2 = $sql2 . ", " . $array[$i]["total"] . "";
        $sql2 = $sql2 . ", '" . $array[$i]["observacionesProducto"] . "'";
        $sql2 = $sql2 . ", " .   $pedido . "";
        $sql2 = $sql2 . ", " . $array[$i]["idProducto"] . ")";
        $resultado2 = mysqli_query($con, $sql2);
    }
    echo "funciono";
} else {
    echo "no funciono";
}
?>
<?php
include("../bd/fin_conexion.php");
?>