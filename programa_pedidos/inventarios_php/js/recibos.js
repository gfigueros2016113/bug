$(document).ready(function () {

    $.ajax({
        url: './bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'nombre_usuario'
        },
        success: function (res) {
            var nombre = res;
            console.log(nombre);
            document.getElementById('nombre_del_usuario').innerHTML = nombre;
            // let list = JSON.parse(res);
            // list.forEach(list => {
            // });
        }
    });

    document.getElementById("accordionSidebar").className = "navbar-nav bg-gradient-danger sidebar sidebar-dark accordion toggled";
    $.ajax({
        url: './bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'test'
        },
        success: function (res) {
            let list = JSON.parse(res);
            list.forEach(list => {
            });
        }
    });

    $.ajax({
        url: './bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'usuario'
        },
        success: function (idUsuario) {
            $.ajax({
                url: './bd/servidor.php',
                type: 'GET',
                data: {
                    quest: 'empresa_usuario',
                    id_usuario: idUsuario
                },
                success: function (resp) {
                    let lista = JSON.parse(resp);
                    lista.forEach(lista => {
                        if (lista.id_empresa == 1) {
                            document.getElementById("accordionSidebar").className = "navbar-nav bg-gradient-danger sidebar sidebar-dark accordion toggled";
                        } else {
                            document.getElementById("accordionSidebar").className = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled";
                        }
                    });
                }
            });
        }
    });
});

function codigo_cliente() {
    var codigo = document.getElementById('idCliente').value;
    sessionStorage.setItem('id_cliente', codigo);
    location.href = "./ver_recibo.html";
}

function logout() {
    localStorage.removeItem('usuario');
    window.location.href = "../login.php";
}