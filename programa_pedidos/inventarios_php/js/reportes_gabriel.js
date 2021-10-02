$(document).ready(function() {
    ClientesTop();
    ProductosTop();
    TotalMes();
});
// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Metropolis"),
'-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

// Pie Chart Example

function ClientesTop(){
    $.ajax({
        url: 'bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'clientes_top'
        },
        success: function(res) {
            try {
                $("#tabla_top").html('');
                let lista = JSON.parse(res);
                let template = '';
                lista.forEach(lista => {
                    template += `<tr>
                <th scope="row">${lista.Cliente}</th>
                <td>${lista.Total}</td>
              </tr>`
                });
                $("#tabla_top").html(template);
            } catch (error) {
            }
        }

    });
}

function TotalMes(){
    $.ajax({
        url: 'bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'total_mes'
        },
        success: function(res) {
            let listaT = JSON.parse(res);
            try {
                document.getElementById("Total").innerHTML = `Q `+ `${listaT[0].TotalDelMes}`;
            } catch (error) {
            }
        }

    });
}

function ClientesHoy(){
    $.ajax({
        url: 'bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'cliente_nuevo_prueba'
        },
        success: function(res) {
            console.log(res);
            let listaC = JSON.parse(res);
            try {
            
            } catch (error) {
            }
        }

    });
}



function ProductosTop(){
    $.ajax({
        url: 'bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'productos_top'
        },
        success: function(res) {
            let listaP = JSON.parse(res);
            //console.log(lista); 
            document.getElementById("nom1").innerHTML = `${listaP[0].Producto}`;
            document.getElementById("nom2").innerHTML = `${listaP[1].Producto}`;
            document.getElementById("nom3").innerHTML = `${listaP[2].Producto}`;
            document.getElementById("nom4").innerHTML = `${listaP[3].Producto}`;
            document.getElementById("nom5").innerHTML = `${listaP[4].Producto}`;
            document.getElementById("cant1").innerHTML = `${listaP[0].Cantidad}`;
            document.getElementById("cant2").innerHTML = `${listaP[1].Cantidad}`;
            document.getElementById("cant3").innerHTML = `${listaP[2].Cantidad}`;
            document.getElementById("cant4").innerHTML = `${listaP[3].Cantidad}`;
            document.getElementById("cant5").innerHTML = `${listaP[4].Cantidad}`;

            var ctx = document.getElementById("myPieChart");
            var myPieChart = new Chart(ctx, {
                type: "doughnut",
                data: {
                    labels: [listaP[0].Producto, listaP[1].Producto, listaP[2].Producto, listaP[3].Producto, listaP[4].Producto],
                    datasets: [{
                        data: [listaP[0].Cantidad,listaP[1].Cantidad,listaP[2].Cantidad,listaP[3].Cantidad,listaP[4].Cantidad,],
                        backgroundColor: [
                            "rgba(0, 97, 242, 1)",
                            "rgba(0, 172, 105, 1)",
                            "rgba(0, 233, 150, 122)",
                            "rgba(0, 138, 43, 226)",
                            "rgba(88, 0, 232, 1)"
                        ],
                        hoverBackgroundColor: [
                            "rgba(0, 97, 242, 0.9)",
                            "rgba(0, 172, 105, 0.9)",
                            "rgba(0, 233, 150, 122)",
                            "rgba(0, 138, 43, 226)",
                            "rgba(88, 0, 232, 0.9)"
                        ],
                        hoverBorderColor: "rgba(234, 236, 244, 1)"
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips: {
                        backgroundColor: "rgb(255,255,255)",
                        bodyFontColor: "#858796",
                        borderColor: "#dddfeb",
                        borderWidth: 1,
                        xPadding: 15,
                        yPadding: 15,
                        displayColors: false,
                        caretPadding: 10
                    },
                    legend: {
                        display: false
                    },
                    cutoutPercentage: 80
                }
            });
            
        }
    });
}

function TotalSemana(){
    $.ajax({
        url: 'bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'total_semana'
        },
        success: function(res) {
            let listaS = JSON.parse(res);

            var ctx = document.getElementById("myAreaChart");
            var myLineChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: [
                        "Domingo",
                        "Lunes",
                        "Martes",
                        "Miércoles",
                        "Jueves",
                        "Viernes",
                        "Sábado"
                    ],
                    datasets: [{
                        label: "Earnings",
                        lineTension: 0.3,
                        backgroundColor: "rgba(0, 97, 242, 0.05)",
                        borderColor: "rgba(0, 97, 242, 1)",
                        pointRadius: 3,
                        pointBackgroundColor: "rgba(0, 97, 242, 1)",
                        pointBorderColor: "rgba(0, 97, 242, 1)",
                        pointHoverRadius: 3,
                        pointHoverBackgroundColor: "rgba(0, 97, 242, 1)",
                        pointHoverBorderColor: "rgba(0, 97, 242, 1)",
                        pointHitRadius: 10,
                        pointBorderWidth: 2,
                        data: [
                            10000,
                            5000,
                            15000,
                            10000,
                            20000,
                            15000,
                            25000
                        ]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    layout: {
                        padding: {
                            left: 10,
                            right: 25,
                            top: 25,
                            bottom: 0
                        }
                    },
                    scales: {
                        xAxes: [{
                            time: {
                                unit: "date"
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            },
                            ticks: {
                                maxTicksLimit: 7
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                maxTicksLimit: 5,
                                padding: 10,
                                // Include a dollar sign in the ticks
                                callback: function(value, index, values) {
                                    return "Q." + number_format(value);
                                }
                            },
                            gridLines: {
                                color: "rgb(234, 236, 244)",
                                zeroLineColor: "rgb(234, 236, 244)",
                                drawBorder: false,
                                borderDash: [2],
                                zeroLineBorderDash: [2]
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        backgroundColor: "rgb(255,255,255)",
                        bodyFontColor: "#858796",
                        titleMarginBottom: 10,
                        titleFontColor: "#6e707e",
                        titleFontSize: 14,
                        borderColor: "#dddfeb",
                        borderWidth: 1,
                        xPadding: 15,
                        yPadding: 15,
                        displayColors: false,
                        intersect: false,
                        mode: "index",
                        caretPadding: 10,
                        callbacks: {
                            label: function(tooltipItem, chart) {
                                var datasetLabel =
                                    chart.datasets[tooltipItem.datasetIndex].label || "";
                                return datasetLabel + ": Q." + number_format(tooltipItem.yLabel);
                            }
                        }
                    }
                }
            });
        }

    });
}



