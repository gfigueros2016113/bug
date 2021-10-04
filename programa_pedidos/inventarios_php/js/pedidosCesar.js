$(document).ready(function() {
    pedidosPorMes();
    pedidosPorSemana();
    ClientesUnMesNoComprar();
    ClientesDosMesesNoComprar();
});
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function pedidosPorMes() {
    $.ajax({
        url: 'bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'pedidos_por_mes'
        },
        success: function(res) {
            let lista = JSON.parse(res);
            var ctx = document.getElementById("myChartAno");
            var myLineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    datasets: [{
                        label: "Earnings",
                        lineTension: 0.3,
                        backgroundColor: "rgba(78, 115, 223, 0.05)",
                        borderColor: "rgba(78, 115, 223, 1)",
                        pointRadius: 3,
                        pointBackgroundColor: "rgba(78, 115, 223, 1)",
                        pointBorderColor: "rgba(78, 115, 223, 1)",
                        pointHoverRadius: 3,
                        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                        pointHitRadius: 10,
                        pointBorderWidth: 2,
                        data: [lista[0].enero, lista[0].febrero, lista[0].marzo, lista[0].abril, lista[0].mayo, lista[0].junio, lista[0].julio, lista[0].agosto, lista[0].septiembre, lista[0].octubre, lista[0].noviembre, lista[0].diciembre],
                    }],
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
                                unit: 'date'
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
                                    return number_format(value);
                                }
                            },
                            gridLines: {
                                color: "rgb(234, 236, 244)",
                                zeroLineColor: "rgb(234, 236, 244)",
                                drawBorder: false,
                                borderDash: [2],
                                zeroLineBorderDash: [2]
                            }
                        }],
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        backgroundColor: "rgb(255,255,255)",
                        bodyFontColor: "#858796",
                        titleMarginBottom: 10,
                        titleFontColor: '#6e707e',
                        titleFontSize: 14,
                        borderColor: '#dddfeb',
                        borderWidth: 1,
                        xPadding: 15,
                        yPadding: 15,
                        displayColors: false,
                        intersect: false,
                        mode: 'index',
                        caretPadding: 10,
                        callbacks: {
                            label: function(tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                                return datasetLabel + ": " + number_format(tooltipItem.yLabel);
                            }
                        }
                    }
                }
            });
        }

    });
}

function pedidosPorSemana(){
    var semana1 = 0;
    var semana2 = 0;
    var semana3 = 0;
    var semana4 = 0;
    var semana5 = 0;
    var semana6 = 0;
    $.ajax({
        url: 'bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'pedidos_semana'
        },
        success: function(res) {
            let lista = JSON.parse(res);
            for(x=0; x<=6;x++){
                if(lista[x].semana=='semana 1'){
                    semana1=lista[x].pedidos;
                }
                if(lista[x].semana=='semana 2'){
                    semana2=lista[x].pedidos;
                }
                if(lista[x].semana=='semana 3'){
                    semana3=lista[x].pedidos;
                }
                if(lista[x].semana=='semana 4'){
                    semana4=lista[x].pedidos;
                }
                if(lista[x].semana=='semana 5'){
                    semana5=lista[x].pedidos;
                }
                if(lista[x].semana=='semana 6'){
                    semana6=lista[x].pedidos;
                }
                
            
                var ctx = document.getElementById("myChartMes");
                var myLineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5", "Semana 6"],
                    datasets: [{
                        label: "Earnings",
                        lineTension: 0.3,
                        backgroundColor: "rgba(78, 115, 223, 0.05)",
                        borderColor: "rgba(78, 115, 223, 1)",
                        pointRadius: 3,
                        pointBackgroundColor: "rgba(78, 115, 223, 1)",
                        pointBorderColor: "rgba(78, 115, 223, 1)",
                        pointHoverRadius: 3,
                        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                        pointHitRadius: 10,
                        pointBorderWidth: 2,
                        data: [semana1,semana2,semana3,semana4,semana5,semana6],
                    }],
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
                                unit: 'date'
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
                                    return number_format(value);
                                }
                            },
                            gridLines: {
                                color: "rgb(234, 236, 244)",
                                zeroLineColor: "rgb(234, 236, 244)",
                                drawBorder: false,
                                borderDash: [2],
                                zeroLineBorderDash: [2]
                            }
                        }],
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        backgroundColor: "rgb(255,255,255)",
                        bodyFontColor: "#858796",
                        titleMarginBottom: 10,
                        titleFontColor: '#6e707e',
                        titleFontSize: 14,
                        borderColor: '#dddfeb',
                        borderWidth: 1,
                        xPadding: 15,
                        yPadding: 15,
                        displayColors: false,
                        intersect: false,
                        mode: 'index',
                        caretPadding: 10,
                        callbacks: {
                            label: function(tooltipItem, chart) {
                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                                return datasetLabel + ": " + number_format(tooltipItem.yLabel);
                            }
                        }
                    }
                }
            });
        }
        } 
    });
}


function ClientesUnMesNoComprar() {
    $.ajax({
        url: 'bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'clientes_hace_1mes'
        },
        success: function(res) {
            try {
                $("#tabla_1mes").html('');
                let lista = JSON.parse(res);
                let template = '';
                lista.forEach(lista => {
                    template += `<tr>
                <th scope="row">${lista.idCliente}</th>
                <td>${lista.nombre}</td>
                <td>${lista.codigo}</td>
                <td>${lista.Dias}</td>
                <td>${lista.total}</td>
              </tr>`
                });
                $("#tabla_1mes").html(template);
            } catch (error) {


            }
        }

    });
}

function ClientesDosMesesNoComprar() {
    $.ajax({
        url: 'bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'clientes_hace_2mes'
        },
        success: function(res) {
            try {
                $("#tabla_2mes").html('');
                let lista = JSON.parse(res);
                let template = '';
                lista.forEach(lista => {
                    template += `<tr>
                <th scope="row">${lista.idCliente}</th>
                <td>${lista.nombre}</td>
                <td>${lista.codigo}</td>
                <td>${lista.Dias}</td>
                <td>${lista.total}</td>
              </tr>`
                });
                $("#tabla_2mes").html(template);
            } catch (error) {


            }
        }

    });
}