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

    $.ajax({
        url: './bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'ver_pedido_online',
            id_pedido: sessionStorage.getItem('id_pedido_online')
        },
        success: function (res) {
            let list = JSON.parse(res);
            list.forEach(list => {
                document.getElementById('nombre').value = list.nombre;
                document.getElementById('direccion').value = list.direccion;
                document.getElementById('telefono').value = list.telefono;
                document.getElementById('nombre_factura').value = list.nombre_factura;
                document.getElementById('nit').value = list.nit;
                document.getElementById('sticker').value = list.stickers;
                document.getElementById('servicio').value= list.servicio;
                document.getElementById('observacion').value = list.observaciones;
                document.getElementById('fecha_entrega').value = list.fecha_entrega;
            });
        }
    });

    $.ajax({
        url: './bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'ver_detalle_online',
            id_pedido: sessionStorage.getItem('id_pedido_online')
        },
        success: function (res) {
            let list = JSON.parse(res);
            var template = '';
            list.forEach(list => {
                template += `
                <tr>
                    <td>${list.producto}</td>
                    <td>${list.precio}</td>
                    <td>${list.cantidad}</td>
                    <td>${list.total}</td>
                </tr>
                `;
            });
            document.getElementById('tabla').innerHTML = template;
        }
    });

});

function importar(){
    
}