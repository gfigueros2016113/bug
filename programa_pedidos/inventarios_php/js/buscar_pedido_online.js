$(document).ready(function() {
    $.ajax({
        url: './bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'nombre_usuario'
        },
        success: function(res) {
            var nombre = res;
            document.getElementById('nombre_del_usuario').innerHTML = nombre;
        }
    });

    $.ajax({
        url: './bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'usuario'
        },
        success: function(idUsuario) {
            $.ajax({
                url: './bd/servidor.php',
                type: 'GET',
                data: {
                    quest: 'empresa_usuario',
                    id_usuario: idUsuario
                },
                success: function(resp) {
                    let lista = JSON.parse(resp);
                    lista.forEach(lista => {
                        if (lista.id_empresa == 1) {
                            document.getElementById("accordionSidebar").className = "navbar-nav bg-gradient-danger sidebar sidebar-dark accordion toggled";
                        } else {
                            document.getElementById("accordionSidebar").className = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled";
                        }
                        4
                    });
                }
            });
        }
    });
});

function buscar(){
    if (document.getElementById('maximaFecha').value == '') {
        Swal.fire({
            title: 'Espere!',
            text: "Elija una fecha máxima para el rango de fechas por favor.",
            icon: 'warning'
        });
    } else {
        sessionStorage.setItem('fecha_minima', document.getElementById('minimaFecha').value);
        sessionStorage.setItem('fecha_maxima', document.getElementById('maximaFecha').value);
    
        console.log(sessionStorage.getItem('fecha_minima'));
        console.log(sessionStorage.getItem('fecha_maxima'));
        window.location.href = './lista_pedidos_online.html';
    }
}