<?PHP
include("../bd/inicia_conexion.php");
include("../includes/header.php");
?>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link href="css/styles.css" rel="stylesheet" />
    </head>
            <?php 
                $sql = "select pr.nombre as Producto, (select sum(pp.cantidad) as Cantidad from detallepedidounhesa pp inner join producto pro on pp.idProducto = pro.idProducto where p.idProducto = pp.idProducto ) as Cantidad from detallepedidounhesa p inner join producto pr on p.idProducto = pr.idProducto group by Producto order by Cantidad desc limit 5";
                $resultado = mysqli_query($con, $sql);
                if (mysqli_num_rows($resultado) > 0) {
                    $json = array();
                    while ($row = mysqli_fetch_array($resultado)) {
                        echo $row["Producto"];
                    }
                    $json_string = json_encode($json);
                    echo $json_string;
                } else {
                    echo 'No';
                }
            ?>
            
            <div class="col-lg-6">
                <!-- Top 5 productos más vendidos -->
                <div class="card h-100">
                    <div class="card-header">Top 5 productos más vendidos</div>
                    <div class="card-body">
                        <div class="chart-pie mb-4"><canvas id="myPieChart" width="100%" height="50"></canvas></div>
                        <div class="list-group list-group-flush">
                            <div class="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                <div class="mr-3">
                                    <i class="fas fa-circle fa-sm mr-1 text-blue"></i>
                                    Hola
                                </div>
                                <div class="font-weight-500 text-dark">
                                    <script>
                                        inner.html("lista[0].Cantidad")
                                    </script>
                                </div>
                            </div>
                            <div class="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                <div class="mr-3">
                                    <i class="fas fa-circle fa-sm mr-1 text-purple"></i>
                                    Whatsapp
                                </div>
                                <div class="font-weight-500 text-dark">15%</div>
                            </div>
                            <div class="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                <div class="mr-3">
                                    <i class="fas fa-circle fa-sm mr-1 text-green"></i>
                                    Instagram
                                </div>
                                <div class="font-weight-500 text-dark">30%</div>
                            </div>
                            <div class="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                <div class="mr-3">
                                    <i class="fas fa-circle fa-sm mr-1 text-green"></i>
                                    Instagram
                                </div>
                                <div class="font-weight-500 text-dark">30%</div>
                            </div>
                            <div class="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                <div class="mr-3">
                                    <i class="fas fa-circle fa-sm mr-1 text-green"></i>
                                    Instagram
                                </div>
                                <div class="font-weight-500 text-dark">30%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <script src="js/scripts.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js" crossorigin="anonymous"></script>
    <script src="assets/demo/chart-pie-demo.js"></script>
</html>

<?PHP
include("../includes/footer.php");
include("../bd/fin_conexion.php");
?>