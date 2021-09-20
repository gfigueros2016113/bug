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
            quest: 'lista_online',
            minimo: sessionStorage.getItem('fecha_minima'),
            maxima: sessionStorage.getItem('fecha_maxima')
        },
        success: function(res) {
            let list = JSON.parse(res);
            let template = '';
            list.forEach(list => {
                template += `
                <tr>
                    <td>${list.id}</td>
                    <td>${list.nombre}</td>
                    <td>${list.direccion}</td>
                    <td>${list.telefono}</td>
                    <td>${list.nombre_factura}</td>
                    <td>${list.nit}</td>
                    <td>${list.stickers}</td>
                    <td>${list.servicio}</td>
                    <td>${list.observaciones}</td>
                    <td>${list.fecha_entrega}</td>
                    <td>${list.cliente_sap}</td>
                    <td><button type="button" class="btn btn-primary btn-block" onclick="detalle_online(${list.id})"><i class="fas fa-search"></i></button></td>
                </tr>
                `;
            });
            $("#tabla").html(template);
        }
    });
});

function detalle_online(id){
    sessionStorage.setItem('id_pedido_online', id);
    document.location.href = "./detalle_online.html";
}