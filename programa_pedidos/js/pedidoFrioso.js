$(document).ready(function() {
    correlativo();
   
});

function setearDatos1() {
    var id = document.getElementById('casilla1').value;
    document.getElementById('cantidad25').disabled = false;
    document.getElementById('precio25').disabled = false;
    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'obtener_producto',
            id
        },
        success: function(res) {
            console.log(res);
            let lista = JSON.parse(res);
            lista.forEach(lista => {
                document.getElementById('nombre1').innerHTML = lista.nombre;

            });
        }
    })
}

function setearDatos2() {
    var id = document.getElementById('casilla2').value;
    document.getElementById('cantidad26').disabled = false;
    document.getElementById('precio26').disabled = false;
    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'obtener_producto',
            id
        },
        success: function(res) {
            console.log(res);
            let lista = JSON.parse(res);
            lista.forEach(lista => {
                document.getElementById('nombre2').innerHTML = lista.nombre;

            });
        }
    })
}

function setearDatos3() {
    var id = document.getElementById('casilla3').value;
    document.getElementById('cantidad27').disabled = false;
    document.getElementById('precio27').disabled = false;
    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'obtener_producto',
            id
        },
        success: function(res) {
            console.log(res);
            let lista = JSON.parse(res);
            lista.forEach(lista => {
                document.getElementById('nombre3').innerHTML = lista.nombre;

            });
        }
    })
}

function setearDatos4() {
    var id = document.getElementById('casilla4').value;
    document.getElementById('cantidad28').disabled = false;
    document.getElementById('precio28').disabled = false;

    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'obtener_producto',
            id
        },
        success: function(res) {
            console.log(res);
            let lista = JSON.parse(res);
            lista.forEach(lista => {
                document.getElementById('nombre4').innerHTML = lista.nombre;

            });
        }
    })
}

function setearDatos5() {
    var id = document.getElementById('casilla5').value;
    console.log(id);
    document.getElementById('cantidad29').disabled = false;
    document.getElementById('precio29').disabled = false;
    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'obtener_producto',
            id
        },
        success: function(res) {
            console.log(res);
            let lista = JSON.parse(res);
            lista.forEach(lista => {
                document.getElementById('nombre5').innerHTML = lista.nombre;

            });
        }
    })
}

function asignarValor(){
    if(document.getElementById('cantidad1').value==""){
        document.getElementById('cantidad1').value="0";
    }  

    if(document.getElementById('cantidad2').value==""){
        document.getElementById('cantidad2').value="0";
    }  

    if(document.getElementById('cantidad3').value==""){
        document.getElementById('cantidad3').value="0";
    }  

    if(document.getElementById('cantidad4').value==""){
        document.getElementById('cantidad4').value="0";
    } 
    if(document.getElementById('cantidad5').value==""){
        document.getElementById('cantidad5').value="0";
    } 

    if(document.getElementById('cantidad6').value==""){
        document.getElementById('cantidad6').value="0";

    } 
    if(document.getElementById('cantidad7').value==""){
        document.getElementById('cantidad7').value="0";

    } 
    if(document.getElementById('cantidad8').value==""){
        document.getElementById('cantidad8').value="0";
    }  

    if(document.getElementById('cantidad9').value==""){
        document.getElementById('cantidad9').value="0";
    }  
    
    if(document.getElementById('cantidad10').value==""){
        document.getElementById('cantidad10').value="0";
    }  
    if(document.getElementById('cantidad11').value==""){
        document.getElementById('cantidad11').value="0";
    }  
    
    if(document.getElementById('cantidad12').value==""){
        document.getElementById('cantidad12').value="0";
    }  
    
    if(document.getElementById('cantidad13').value==""){
        document.getElementById('cantidad13').value="0";
    }  
    
    if(document.getElementById('cantidad14').value==""){
        document.getElementById('cantidad14').value="0";
    }  
    
    if(document.getElementById('cantidad15').value==""){
        document.getElementById('cantidad15').value="0";
    }  
    
    if(document.getElementById('cantidad16').value==""){
        document.getElementById('cantidad16').value="0";
    }  
    
    if(document.getElementById('cantidad17').value==""){
        document.getElementById('cantidad17').value="0";
    }  
    
    if(document.getElementById('cantidad18').value==""){
        document.getElementById('cantidad18').value="0";
    }  
    
    if(document.getElementById('cantidad19').value==""){
        document.getElementById('cantidad19').value="0";
    }  
    
    if(document.getElementById('cantidad20').value==""){
        document.getElementById('cantidad20').value="0";
    }  
    
    if(document.getElementById('cantidad21').value==""){
        document.getElementById('cantidad21').value="0";
    }  
    
    if(document.getElementById('cantidad22').value==""){
        document.getElementById('cantidad22').value="0";
    }  
    
    if(document.getElementById('cantidad23').value==""){
        document.getElementById('cantidad23').value="0";
    }  
    
    if(document.getElementById('cantidad24').value==""){
        document.getElementById('cantidad24').value="0";
    }  
    
    if(document.getElementById('cantidad25').value==""){
        document.getElementById('cantidad25').value="0";
    }  
    
    if(document.getElementById('cantidad26').value==""){
        document.getElementById('cantidad26').value="0";
    }  
    
    if(document.getElementById('cantidad27').value==""){
        document.getElementById('cantidad27').value="0";
    }  
    
    if(document.getElementById('cantidad28').value==""){
        document.getElementById('cantidad28').value="0";
    }  
    
    if(document.getElementById('cantidad29').value==""){
        document.getElementById('cantidad29').value="0";
    }  
  
    if(document.getElementById('precio1').value==""){
        document.getElementById('precio1').value=="0";
    } 
    if(document.getElementById('precio2').value==""){
        document.getElementById('precio2').value=="0";
    }
    if(document.getElementById('precio3').value==""){
        document.getElementById('precio3').value=="0";
    } 
    if(document.getElementById('precio4').value==""){
        document.getElementById('precio4').value=="0";
    } 
    if(document.getElementById('precio5').value==""){
        document.getElementById('precio5').value=="0";
    } 
    if(document.getElementById('precio6').value==""){
        document.getElementById('precio6').value=="0";
    } 
    if(document.getElementById('precio7').value==""){
        document.getElementById('precio7').value=="0";
    } 
    if(document.getElementById('precio8').value==""){
        document.getElementById('precio8').value=="0";
    } 
    if(document.getElementById('precio9').value==""){
     document.getElementById('precio9').value=="0";
    } 
    if(document.getElementById('precio10').value==""){
        document.getElementById('precio10').value=="0";
    } 
    if(document.getElementById('precio11').value==""){
        document.getElementById('precio11').value=="0";
    } 
    if(document.getElementById('precio12').value==""){
        document.getElementById('precio12').value=="0";
    } 
    if(document.getElementById('precio13').value==""){
        document.getElementById('precio13').value=="0";
    } 
    if(document.getElementById('precio14').value==""){
        document.getElementById('precio14').value=="0";
    } 
    if(document.getElementById('precio15').value==""){
        document.getElementById('precio15').value=="0";
    } 
    if(document.getElementById('precio16').value==""){
        document.getElementById('precio16').value=="0";
    } 
    if(document.getElementById('precio17').value==""){
        document.getElementById('precio17').value=="0";
    } 
    if(document.getElementById('precio18').value==""){
        document.getElementById('precio18').value=="0";
    } 
    if(document.getElementById('precio19').value==""){
        document.getElementById('precio19').value=="0";
    } 
    if(document.getElementById('precio20').value==""){
        document.getElementById('precio20').value=="0";
    } 
    if(document.getElementById('precio21').value==""){
        document.getElementById('precio21').value=="0";
    } 
    if(document.getElementById('precio22').value==""){
        document.getElementById('precio22').value=="0";
    } 
    if(document.getElementById('precio23').value==""){
        document.getElementById('precio23').value=="0";
    } 
    if(document.getElementById('precio24').value==""){
        document.getElementById('precio24').value=="0";
    } 
    if(document.getElementById('precio25').value==""){
        document.getElementById('precio25').value=="0";
    } 
    if(document.getElementById('precio26').value==""){
        document.getElementById('precio26').value=="0";
    } 
    if(document.getElementById('precio27').value==""){
        document.getElementById('precio27').value=="0";
    } 
    if(document.getElementById('precio28').value==""){
        document.getElementById('precio28').value=="0";
    } 
    if(document.getElementById('precio29').value==""){
        document.getElementById('precio29').value=="0";
    }

}

function calcularTotales() {
    asignarValor();
    document.getElementById('enviar').disabled = false;
    document.getElementById('total1').innerHTML = (document.getElementById('cantidad1').value * document.getElementById('precio1').value);
    document.getElementById('total2').innerHTML = (document.getElementById('cantidad2').value * document.getElementById('precio2').value);
    document.getElementById('total3').innerHTML = (document.getElementById('cantidad3').value * document.getElementById('precio3').value);
    document.getElementById('total4').innerHTML = (document.getElementById('cantidad4').value * document.getElementById('precio4').value);
    document.getElementById('total5').innerHTML = (document.getElementById('cantidad5').value * document.getElementById('precio5').value);
    document.getElementById('total6').innerHTML = (document.getElementById('cantidad6').value * document.getElementById('precio6').value);
    document.getElementById('total7').innerHTML = (document.getElementById('cantidad7').value * document.getElementById('precio7').value);
    document.getElementById('total8').innerHTML = (document.getElementById('cantidad8').value * document.getElementById('precio8').value);
    document.getElementById('total9').innerHTML = (document.getElementById('cantidad9').value * document.getElementById('precio9').value);
    document.getElementById('total10').innerHTML = (document.getElementById('cantidad10').value * document.getElementById('precio10').value);
    document.getElementById('total11').innerHTML = (document.getElementById('cantidad11').value * document.getElementById('precio11').value);
    document.getElementById('total12').innerHTML = (document.getElementById('cantidad12').value * document.getElementById('precio12').value);
    document.getElementById('total13').innerHTML = (document.getElementById('cantidad13').value * document.getElementById('precio13').value);
    document.getElementById('total14').innerHTML = (document.getElementById('cantidad14').value * document.getElementById('precio14').value);
    document.getElementById('total15').innerHTML = (document.getElementById('cantidad15').value * document.getElementById('precio15').value);
    document.getElementById('total16').innerHTML = (document.getElementById('cantidad16').value * document.getElementById('precio16').value);
    document.getElementById('total17').innerHTML = (document.getElementById('cantidad17').value * document.getElementById('precio17').value);
    document.getElementById('total18').innerHTML = (document.getElementById('cantidad18').value * document.getElementById('precio18').value);
    document.getElementById('total19').innerHTML = (document.getElementById('cantidad19').value * document.getElementById('precio19').value);
    document.getElementById('total20').innerHTML = (document.getElementById('cantidad20').value * document.getElementById('precio20').value);
    document.getElementById('total21').innerHTML = (document.getElementById('cantidad21').value * document.getElementById('precio21').value);
    document.getElementById('total22').innerHTML = (document.getElementById('cantidad22').value * document.getElementById('precio22').value);
    document.getElementById('total23').innerHTML = (document.getElementById('cantidad23').value * document.getElementById('precio23').value);
    document.getElementById('total24').innerHTML = (document.getElementById('cantidad24').value * document.getElementById('precio24').value);
    document.getElementById('total25').innerHTML = (document.getElementById('cantidad25').value * document.getElementById('precio25').value);
    document.getElementById('total26').innerHTML = (document.getElementById('cantidad26').value * document.getElementById('precio26').value);
    document.getElementById('total27').innerHTML = (document.getElementById('cantidad27').value * document.getElementById('precio27').value);
    document.getElementById('total28').innerHTML = (document.getElementById('cantidad28').value * document.getElementById('precio28').value);
    document.getElementById('total29').innerHTML = (document.getElementById('cantidad29').value * document.getElementById('precio29').value);


    document.getElementById('cantidad').innerHTML = parseInt(document.getElementById('cantidad1').value) +
        parseInt(document.getElementById('cantidad2').value) + parseInt(document.getElementById('cantidad3').value) +
        parseInt(document.getElementById('cantidad4').value) + parseInt(document.getElementById('cantidad5').value) +
        parseInt(document.getElementById('cantidad6').value) + parseInt(document.getElementById('cantidad7').value) +
        parseInt(document.getElementById('cantidad8').value) + parseInt(document.getElementById('cantidad9').value) +
        parseInt(document.getElementById('cantidad10').value) + parseInt(document.getElementById('cantidad11').value) +
        parseInt(document.getElementById('cantidad12').value) + parseInt(document.getElementById('cantidad13').value) +
        parseInt(document.getElementById('cantidad14').value) + parseInt(document.getElementById('cantidad15').value) +
        parseInt(document.getElementById('cantidad16').value) + parseInt(document.getElementById('cantidad17').value) +
        parseInt(document.getElementById('cantidad18').value) + parseInt(document.getElementById('cantidad19').value) +
        parseInt(document.getElementById('cantidad20').value) + parseInt(document.getElementById('cantidad21').value) +
        parseInt(document.getElementById('cantidad22').value) + parseInt(document.getElementById('cantidad23').value) +
        parseInt(document.getElementById('cantidad24').value) + parseInt(document.getElementById('cantidad25').value) +
        parseInt(document.getElementById('cantidad26').value) + parseInt(document.getElementById('cantidad27').value) +
        parseInt(document.getElementById('cantidad28').value) + parseInt(document.getElementById('cantidad29').value);


    document.getElementById('total').innerHTML = parseFloat(document.getElementById('total1').innerHTML) +
        parseFloat(document.getElementById('total2').innerHTML) + parseFloat(document.getElementById('total3').innerHTML) +
        parseFloat(document.getElementById('total4').innerHTML) + parseFloat(document.getElementById('total5').innerHTML) +
        parseFloat(document.getElementById('total6').innerHTML) + parseFloat(document.getElementById('total7').innerHTML) +
        parseFloat(document.getElementById('total8').innerHTML) + parseFloat(document.getElementById('total9').innerHTML) +
        parseFloat(document.getElementById('total10').innerHTML) + parseFloat(document.getElementById('total11').innerHTML) +
        parseFloat(document.getElementById('total12').innerHTML) + parseFloat(document.getElementById('total13').innerHTML) +
        parseFloat(document.getElementById('total14').innerHTML) + parseFloat(document.getElementById('total15').innerHTML) +
        parseFloat(document.getElementById('total16').innerHTML) + parseFloat(document.getElementById('total17').innerHTML) +
        parseFloat(document.getElementById('total18').innerHTML) + parseFloat(document.getElementById('total19').innerHTML) +
        parseFloat(document.getElementById('total20').innerHTML) + parseFloat(document.getElementById('total21').innerHTML) +
        parseFloat(document.getElementById('total22').innerHTML) + parseFloat(document.getElementById('total23').innerHTML) +
        parseFloat(document.getElementById('total24').innerHTML) + parseFloat(document.getElementById('total25').innerHTML) +
        parseFloat(document.getElementById('total26').innerHTML) + parseFloat(document.getElementById('total27').innerHTML) +
        parseFloat(document.getElementById('total28').innerHTML) + parseFloat(document.getElementById('total29').innerHTML);

}

function caclularTotal() {
    asignarValor();
    document.getElementById('cantidad').innerHTML = parseInt(document.getElementById('cantidad1').value) +
        parseInt(document.getElementById('cantidad2').value) + parseInt(document.getElementById('cantidad3').value) +
        parseInt(document.getElementById('cantidad4').value) + parseInt(document.getElementById('cantidad5').value) +
        parseInt(document.getElementById('cantidad6').value) + parseInt(document.getElementById('cantidad7').value) +
        parseInt(document.getElementById('cantidad8').value) + parseInt(document.getElementById('cantidad9').value) +
        parseInt(document.getElementById('cantidad10').value) + parseInt(document.getElementById('cantidad11').value) +
        parseInt(document.getElementById('cantidad12').value) + parseInt(document.getElementById('cantidad13').value) +
        parseInt(document.getElementById('cantidad14').value) + parseInt(document.getElementById('cantidad15').value) +
        parseInt(document.getElementById('cantidad16').value) + parseInt(document.getElementById('cantidad17').value) +
        parseInt(document.getElementById('cantidad18').value) + parseInt(document.getElementById('cantidad19').value) +
        parseInt(document.getElementById('cantidad20').value) + parseInt(document.getElementById('cantidad21').value) +
        parseInt(document.getElementById('cantidad22').value) + parseInt(document.getElementById('cantidad23').value) +
        parseInt(document.getElementById('cantidad24').value) + parseInt(document.getElementById('cantidad25').value) +
        parseInt(document.getElementById('cantidad26').value) + parseInt(document.getElementById('cantidad27').value) +
        parseInt(document.getElementById('cantidad28').value) + parseInt(document.getElementById('cantidad29').value);


    document.getElementById('total').innerHTML = parseFloat(document.getElementById('total1').innerHTML) +
        parseFloat(document.getElementById('total2').innerHTML) + parseFloat(document.getElementById('total3').innerHTML) +
        parseFloat(document.getElementById('total4').innerHTML) + parseFloat(document.getElementById('total5').innerHTML) +
        parseFloat(document.getElementById('total6').innerHTML) + parseFloat(document.getElementById('total7').innerHTML) +
        parseFloat(document.getElementById('total8').innerHTML) + parseFloat(document.getElementById('total9').innerHTML) +
        parseFloat(document.getElementById('total10').innerHTML) + parseFloat(document.getElementById('total11').innerHTML) +
        parseFloat(document.getElementById('total12').innerHTML) + parseFloat(document.getElementById('total13').innerHTML) +
        parseFloat(document.getElementById('total14').innerHTML) + parseFloat(document.getElementById('total15').innerHTML) +
        parseFloat(document.getElementById('total16').innerHTML) + parseFloat(document.getElementById('total17').innerHTML) +
        parseFloat(document.getElementById('total18').innerHTML) + parseFloat(document.getElementById('total19').innerHTML) +
        parseFloat(document.getElementById('total20').innerHTML) + parseFloat(document.getElementById('total21').innerHTML) +
        parseFloat(document.getElementById('total22').innerHTML) + parseFloat(document.getElementById('total23').innerHTML) +
        parseFloat(document.getElementById('total24').innerHTML) + parseFloat(document.getElementById('total25').innerHTML) +
        parseFloat(document.getElementById('total26').innerHTML) + parseFloat(document.getElementById('total27').innerHTML) +
        parseFloat(document.getElementById('total28').innerHTML) + parseFloat(document.getElementById('total29').innerHTML);
}



function limpiarDatos1() {
    document.getElementById('cantidad1').value = 0;
    document.getElementById('total1').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos2() {
    document.getElementById('cantidad2').value = 0;
    document.getElementById('total2').innerHTML = 0;

    caclularTotal();

}

function limpiarDatos3() {
    document.getElementById('cantidad3').value = 0;
    document.getElementById('total3').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos4() {
    document.getElementById('cantidad4').value = 0;
    document.getElementById('total4').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos5() {
    document.getElementById('cantidad5').value = 0;
    document.getElementById('total5').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos6() {
    document.getElementById('cantidad6').value = 0;
    document.getElementById('total6').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos7() {
    document.getElementById('cantidad7').value = 0;
    document.getElementById('total7').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos8() {
    document.getElementById('cantidad8').value = 0;
    document.getElementById('total8').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos9() {
    document.getElementById('cantidad9').value = 0;
    document.getElementById('total9').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos10() {
    document.getElementById('cantidad10').value = 0;
    document.getElementById('total10').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos11() {
    document.getElementById('cantidad11').value = 0;
    document.getElementById('total11').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos12() {
    document.getElementById('cantidad12').value = 0;
    document.getElementById('total12').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos13() {
    document.getElementById('cantidad13').value = 0;
    document.getElementById('total13').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos14() {
    document.getElementById('cantidad14').value = 0;
    document.getElementById('total14').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos15() {
    document.getElementById('cantidad15').value = 0;
    document.getElementById('total15').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos16() {
    document.getElementById('cantidad16').value = 0;
    document.getElementById('total16').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos17() {
    document.getElementById('cantidad17').value = 0;
    document.getElementById('total17').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos18() {
    document.getElementById('cantidad18').value = 0;
    document.getElementById('total18').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos19() {
    document.getElementById('cantidad19').value = 0;
    document.getElementById('total19').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos20() {
    document.getElementById('cantidad20').value = 0;
    document.getElementById('total20').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos21() {
    document.getElementById('cantidad21').value = 0;
    document.getElementById('total21').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos22() {
    document.getElementById('cantidad22').value = 0;
    document.getElementById('total22').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos23() {
    document.getElementById('cantidad23').value = 0;
    document.getElementById('total23').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos24() {
    document.getElementById('cantidad24').value = 0;
    document.getElementById('total24').innerHTML = 0;

    caclularTotal();


}

function limpiarDatos25() {
    document.getElementById('casilla1').innerHTML = '';
    document.getElementById('nombre1').innerHTML = '';
    document.getElementById('cantidad25').value = 0;
    document.getElementById('precio25').value = 0;
    document.getElementById('total25').innerHTML = 0;
    document.getElementById('cantidad25').disabled = true;
    document.getElementById('precio25').disabled = true;
    caclularTotal();


}

function limpiarDatos26() {
    document.getElementById('casilla2').innerHTML = '';
    document.getElementById('nombre2').innerHTML = '';
    document.getElementById('cantidad26').value = 0;
    document.getElementById('precio26').value = 0;
    document.getElementById('total26').innerHTML = 0;
    document.getElementById('cantidad26').disabled = true;
    document.getElementById('precio26').disabled = true;
    caclularTotal();


}

function limpiarDatos27() {
    document.getElementById('casilla3').innerHTML = '';
    document.getElementById('nombre3').innerHTML = '';
    document.getElementById('cantidad27').value = 0;
    document.getElementById('precio27').value = 0;
    document.getElementById('total27').innerHTML = 0;
    document.getElementById('cantidad27').disabled = true;
    document.getElementById('precio27').disabled = true;
    caclularTotal();


}

function limpiarDatos28() {
    document.getElementById('casilla4').innerHTML = '';
    document.getElementById('nombre4').innerHTML = '';
    document.getElementById('cantidad28').value = 0;
    document.getElementById('precio28').value = 0;
    document.getElementById('total28').innerHTML = 0;
    document.getElementById('cantidad28').disabled = true;
    document.getElementById('precio28').disabled = true;
    caclularTotal();


}

function limpiarDatos29() {
    document.getElementById('casilla5').innerHTML = '';
    document.getElementById('nombre5').innerHTML = '';
    document.getElementById('cantidad29').value = 0;
    document.getElementById('precio29').value = 0;
    document.getElementById('total29').innerHTML = 0;
    document.getElementById('cantidad29').disabled = true;
    document.getElementById('precio29').disabled = true;
    caclularTotal();


}

function correlativo() {
    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'obtener_correlativo'
        },
        success: function(res) {
            let lista = JSON.parse(res);
            lista.forEach(lista => {
                sessionStorage.setItem('correlativo', lista.correlativo);

            });
        }
    });
}

function idPedido() {
    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'obtener_idPedido'
        },
        success: function(res) {
            let lista = JSON.parse(res);
            lista.forEach(lista => {
                sessionStorage.setItem('id', lista.id);

            });
        }
    });
}

function agregarPedido() {
    calcularTotales();
    caclularTotal();
    idPedido();

    var correlativo = sessionStorage.getItem('correlativo');
    var fecha_despacho = document.getElementById('fecha').value;
    var direccion = document.getElementById('direccion').value;
    var observacion = document.getElementById('observacion').value;
    var telefono = document.getElementById('telefono').value;
    var hora = document.getElementById('hora').value;
    var observacion_A = document.getElementById('observacion_A').value;
    var total = document.getElementById('total').innerHTML;
    var idVendedor = document.getElementById('idVendedor').value;
    var idTipoEntrega = document.getElementById('idTipoEntrega').value;
    var idCliente = document.getElementById('idCliente').value;

    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'POST',
        data: {
            quest: 'agregar_pedido_frioso',
            correlativo,
            fecha_despacho,
            direccion,
            observacion,
            telefono,
            hora,
            observacion_A,
            total,
            idVendedor,
            idTipoEntrega,
            idCliente

        },
        success: function(res) {
            var Pr = parseInt(sessionStorage.getItem('id')) + 1;
            console.log(Pr);
            if (res == 'Success') {
                Swal.fire(
                    'agregado con éxito',
                    'El pedido ha sido ingresado con éxito',
                    'success')
                    
                agregarDetallePedido(Pr);

            } else {
                Swal.fire(
                    'Falló',
                    'Faltan datos en el pedido',
                    'error'
                )
            }
        }

    });
}

function agregarDetallePedido(idP) {
    var registro1 = "(" + document.getElementById('cantidad1').value + "," + document.getElementById('precio1').value + "," + document.getElementById('total1').innerHTML + ",''," + idP + ",752)";
    var registro2 = "(" + document.getElementById('cantidad2').value + "," + document.getElementById('precio2').value + "," + document.getElementById('total2').innerHTML + ",''," + idP + ",738)";
    var registro3 = "(" + document.getElementById('cantidad3').value + "," + document.getElementById('precio3').value + "," + document.getElementById('total3').innerHTML + ",''," + idP + ",722)";
    var registro4 = "(" + document.getElementById('cantidad4').value + "," + document.getElementById('precio4').value + "," + document.getElementById('total4').innerHTML + ",''," + idP + ",715)";
    var registro5 = "(" + document.getElementById('cantidad5').value + "," + document.getElementById('precio5').value + "," + document.getElementById('total5').innerHTML + ",''," + idP + ",741)";
    var registro6 = "(" + document.getElementById('cantidad6').value + "," + document.getElementById('precio6').value + "," + document.getElementById('total6').innerHTML + ",''," + idP + ",748)";
    var registro7 = "(" + document.getElementById('cantidad7').value + "," + document.getElementById('precio7').value + "," + document.getElementById('total7').innerHTML + ",''," + idP + ",732)";
    var registro8 = "(" + document.getElementById('cantidad8').value + "," + document.getElementById('precio8').value + "," + document.getElementById('total8').innerHTML + ",''," + idP + ",736)";
    var registro9 = "(" + document.getElementById('cantidad9').value + "," + document.getElementById('precio9').value + "," + document.getElementById('total9').innerHTML + ",''," + idP + ",710)";
    var registro10 = "(" + document.getElementById('cantidad10').value + "," + document.getElementById('precio10').value + "," + document.getElementById('total10').innerHTML + ",''," + idP + ",751)";
    var registro11 = "(" + document.getElementById('cantidad11').value + "," + document.getElementById('precio11').value + "," + document.getElementById('total11').innerHTML + ",''," + idP + ",712)";
    var registro12 = "(" + document.getElementById('cantidad12').value + "," + document.getElementById('precio12').value + "," + document.getElementById('total12').innerHTML + ",''," + idP + ",704)";
    var registro13 = "(" + document.getElementById('cantidad13').value + "," + document.getElementById('precio13').value + "," + document.getElementById('total13').innerHTML + ",''," + idP + ",700)";
    var registro14 = "(" + document.getElementById('cantidad14').value + "," + document.getElementById('precio14').value + "," + document.getElementById('total14').innerHTML + ",''," + idP + ",697)";
    var registro15 = "(" + document.getElementById('cantidad15').value + "," + document.getElementById('precio15').value + "," + document.getElementById('total15').innerHTML + ",''," + idP + ",709)";
    var registro16 = "(" + document.getElementById('cantidad16').value + "," + document.getElementById('precio16').value + "," + document.getElementById('total16').innerHTML + ",''," + idP + ",702)";
    var registro17 = "(" + document.getElementById('cantidad17').value + "," + document.getElementById('precio17').value + "," + document.getElementById('total17').innerHTML + ",''," + idP + ",705)";
    var registro18 = "(" + document.getElementById('cantidad18').value + "," + document.getElementById('precio18').value + "," + document.getElementById('total18').innerHTML + ",''," + idP + ",703)";
    var registro19 = "(" + document.getElementById('cantidad19').value + "," + document.getElementById('precio19').value + "," + document.getElementById('total19').innerHTML + ",''," + idP + ",707)";
    var registro20 = "(" + document.getElementById('cantidad20').value + "," + document.getElementById('precio20').value + "," + document.getElementById('total20').innerHTML + ",''," + idP + ",699)";
    var registro21 = "(" + document.getElementById('cantidad21').value + "," + document.getElementById('precio21').value + "," + document.getElementById('total21').innerHTML + ",''," + idP + ",698)";
    var registro22 = "(" + document.getElementById('cantidad22').value + "," + document.getElementById('precio22').value + "," + document.getElementById('total22').innerHTML + ",''," + idP + ",730)";
    var registro23 = "(" + document.getElementById('cantidad23').value + "," + document.getElementById('precio23').value + "," + document.getElementById('total23').innerHTML + ",''," + idP + ",1277)";
    var registro24 = "(" + document.getElementById('cantidad24').value + "," + document.getElementById('precio24').value + "," + document.getElementById('total24').innerHTML + ",''," + idP + ",1279)";

    var registro25;
    if (document.getElementById('casilla1').value == '') {
        registro25 = "(" + document.getElementById('cantidad25').value + "," + document.getElementById('precio25').value + "," + document.getElementById('total25').innerHTML + ",''," + idP + "," + 1 + ")";
    } else {
        registro25 = "(" + document.getElementById('cantidad25').value + "," + document.getElementById('precio25').value + "," + document.getElementById('total25').innerHTML + ",''," + idP + "," + document.getElementById('casilla1').value + ")";
    }

    var registro26;
    if (document.getElementById('casilla2').value == '') {
        registro26 = "(" + document.getElementById('cantidad26').value + "," + document.getElementById('precio26').value + "," + document.getElementById('total26').innerHTML + ",''," + idP + "," + 1 + ")";
    } else {
        registro26 = "(" + document.getElementById('cantidad26').value + "," + document.getElementById('precio26').value + "," + document.getElementById('total26').innerHTML + ",''," + idP + "," + document.getElementById('casilla2').value + ")";
    }

    var registro27;
    if (document.getElementById('casilla3').value == '') {
        registro27 = "(" + document.getElementById('cantidad27').value + "," + document.getElementById('precio27').value + "," + document.getElementById('total27').innerHTML + ",''," + idP + "," + 1 + ")";
    } else {
        registro27 = "(" + document.getElementById('cantidad27').value + "," + document.getElementById('precio27').value + "," + document.getElementById('total27').innerHTML + ",''," + idP + "," + document.getElementById('casilla3').value + ")";
    }

    var registro28;
    if (document.getElementById('casilla4').value == '') {
        registro28 = "(" + document.getElementById('cantidad28').value + "," + document.getElementById('precio28').value + "," + document.getElementById('total28').innerHTML + ",''," + idP + "," + 1 + ")";
    } else {
        registro28 = "(" + document.getElementById('cantidad28').value + "," + document.getElementById('precio28').value + "," + document.getElementById('total28').innerHTML + ",''," + idP + "," + document.getElementById('casilla4').value + ")";
    }

    var registro29;
    if (document.getElementById('casilla5').value == '') {
        registro29 = "(" + document.getElementById('cantidad29').value + "," + document.getElementById('precio29').value + "," + document.getElementById('total29').innerHTML + ",''," + idP + "," + 1 + ")";
    } else {
        registro29 = "(" + document.getElementById('cantidad29').value + "," + document.getElementById('precio29').value + "," + document.getElementById('total29').innerHTML + ",''," + idP + "," + document.getElementById('casilla5').value + ")";
    }
    console.log(registro24);
    console.log(registro29);
    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'POST',
        data: {
            quest: 'registrar_detallePedidos',
            registro1,
            registro2,
            registro3,
            registro4,
            registro5,
            registro6,
            registro7,
            registro8,
            registro9,
            registro10,
            registro11,
            registro12,
            registro13,
            registro14,
            registro15,
            registro16,
            registro17,
            registro18,
            registro19,
            registro20,
            registro21,
            registro22,
            registro23,
            registro24,
            registro25,
            registro26,
            registro27,
            registro28,
            registro29
        },
        success: function(res) {
            if (res == 'Success') {

                borrarPedidoVacio();
                

            } else {
                Swal.fire(
                    'Falló',
                    'El pedido que intentó ingresar, no ha sido ingresado correctamente',
                    'error'
                )
            }

        }
    });
}

function borrarPedidoVacio() {
    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'DELETE',
        data: {
            quest: 'eliminar_registros_vacios'
        },
        success: function(res) {
            console.log(res);
            sessionStorage.clear();
            window.location="./Pedido_busqueda.php";
        }
    })
}