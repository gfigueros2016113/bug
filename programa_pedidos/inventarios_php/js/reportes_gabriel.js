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