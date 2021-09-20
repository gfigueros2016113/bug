$(document).ready(function() {
    $.ajax({
        url: './bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'nombre_usuario'
        },
        success: function(res) {
            var nombre = res;
            console.log(nombre);
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

function seleccion() {
    var opcion = document.getElementById('opcion').value;
    // alert(opcion);
    if (opcion == 0) {
        Swal.fire({
            title: 'Espere!',
            text: "Por favor Seleccione un cliente",
            icon: 'warning'
        });
    } else {
        sessionStorage.setItem('opcion_online', opcion);
        window.location.href = './pedido_online.html';
    }
}

function verifica_codigo(pform) {
    if (pform.idCliente.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Cliente Inválido',
            text: 'Porfavor seleccione un cliente válido'
        });
        return false;
        pform.idCliente.focus();
    }
}