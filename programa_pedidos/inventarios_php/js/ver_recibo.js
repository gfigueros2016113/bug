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

    var codigo = sessionStorage.getItem('id_cliente');

    $.ajax({
        url: './bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'nombre_cliente',
            codigo
        },
        success: function (res) {
            let list = JSON.parse(res);
            list.forEach(list => {
                document.getElementById('nombre_cliente').innerHTML = list.nombre;
                document.getElementById('codigo_cliente').innerHTML = list.codigo;
                var codigo_cliente = list.codigo;
                $.ajax({
                    url: './bd/servidor.php',
                    type: 'GET',
                    data: {
                        quest: 'facturas_cliente',
                        codigo: codigo_cliente
                    },
                    success: function (resp) {
                        console.log(resp);
                        let lista = JSON.parse(resp);
                        // console.log(lista);
                        let template = '';
                        var saldo_total = 0;
                        lista.forEach(lista => {
                            saldo_total += parseFloat(lista.saldo);
                            template += `
                                <tr>
                                    <td>${lista.factura}</td>
                                    <td>${lista.fecha_factura}</td>
                                    <td>Q.${parseFloat(lista.monto).toFixed(2)}</td>
                                    <td>Q.${parseFloat(lista.saldo).toFixed(2)}</td>
                                    <td>${lista.antiguedad}</td>
                                    <td><input type="checkbox" name="" value="${lista.saldo}" id="check_${lista.factura}" onchange="check(this, '${lista.factura}')"></td>
                                    <td>            
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                            </div>
                                            <input type="number" style="width:100px;" class="form-control" placeholder="Abono" id="${lista.factura}">
                                        </div>
                                    </td>
                                </tr>
                            `;
                            $("#bodi").html(template);
                        });
                        document.getElementById('saldo_cliente').innerHTML = saldo_total.toFixed(2);
                    }
                });
            });
        }
    });
});

function check(checkboxElem, factura) {
    if (checkboxElem.checked) {
        document.getElementById(factura).value = checkboxElem.value;
    } else {
        document.getElementById(factura).value = 0;
    }
}


function guardar() {
    var banco = document.getElementById('banco').value;
    var numero_de_boleta = document.getElementById('numero_boleta').value;
    var fecha = document.getElementById('fecha').value;
    var monto = document.getElementById('monto').value;
    var codigo = sessionStorage.getItem('id_cliente');
    var recibo_fisico = document.getElementById('recibo_fisico').value;
    var estado = 'recibido en contabilidad';
    if (numero_de_boleta == '') {
        estado = 'pendiente de deposito';
    }
    if (monto == '') {
        monto = 0;
    }
    $.ajax({
        url: './bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'nombre_cliente',
            codigo
        },
        success: function (respon) {
            let listo = JSON.parse(respon);
            listo.forEach(listo => {
                console.log('vuelta');
                var codigo_cliente = listo.codigo;
                var id_cliente = listo.id;
                $.ajax({
                    url: './bd/servidor.php',
                    type: 'GET',
                    data: {
                        quest: 'facturas_cliente',
                        codigo: codigo_cliente
                    },
                    success: function (res) {
                        let list = JSON.parse(res);
                        saldo_a_cobrar = 0;
                        list.forEach(list => {
                            var saldo = document.getElementById(list.factura).value;
                            if (saldo != '') {
                                saldo_a_cobrar += parseFloat(saldo);
                            }
                        });
                        console.log(saldo_a_cobrar);
                        if (saldo_a_cobrar == 0) {
                            Swal.fire({
                                title: 'Epere!',
                                text: "No se han seleccionado las facturas a cobrar!",
                                icon: 'warning'
                            });
                            return;
                        }
                        $.ajax({
                            url: './bd/servidor.php',
                            type: 'GET',
                            data: {
                                quest: 'usuario'
                            },
                            success: function (idUsuario) {
                                $.ajax({
                                    url: './bd/servidor.php',
                                    type: 'POST',
                                    data: {
                                        quest: 'ingresar_recibo',
                                        id_usuario: idUsuario,
                                        id_cliente: id_cliente,
                                        monto: saldo_a_cobrar,
                                        recibo: recibo_fisico,
                                        banco: banco,
                                        numero_de_boleta: numero_de_boleta,
                                        fecha: fecha,
                                        estado
                                    },
                                    success: function (respuesta) {
                                        console.log(respuesta);
                                        $.ajax({
                                            url: './bd/servidor.php',
                                            type: 'GET',
                                            data: {
                                                quest: 'ultimo_recibo'
                                            },
                                            success: function (resp) {
                                                let lista = JSON.parse(resp);
                                                lista.forEach(lista => {
                                                    var id_recibo = lista.id_recibo;
                                                    sessionStorage.id_recibo = id_recibo;
                                                    // FACTURA CLIENTE
                                                    $.ajax({
                                                        url: './bd/servidor.php',
                                                        type: 'GET',
                                                        data: {
                                                            quest: 'facturas_cliente',
                                                            codigo: codigo_cliente
                                                        },
                                                        success: function (result) {
                                                            let listo = JSON.parse(result);
                                                            listo.forEach(listo => {
                                                                var saldo = document.getElementById(listo.factura).value;
                                                                console.log('El saldo del detalle es: ' + saldo);
                                                                if (saldo != '') {
                                                                    var id_del_recibo = id_recibo;
                                                                    var factura = listo.factura;
                                                                    var saldo_a_cobrar = listo.saldo;
                                                                    var abono = 0;
                                                                    var saldo_a_pagar = 0;
                                                                    // var isChecked = document.getElementById(`check_${listo.factura}`).checked;
                                                                    abono = parseFloat(saldo);
                                                                    $.ajax({
                                                                        url: './bd/servidor.php',
                                                                        type: 'POST',
                                                                        data: {
                                                                            quest: 'ingresar_detalle_recibo',
                                                                            id_recibo: id_del_recibo,
                                                                            factura: factura,
                                                                            saldo_a_cobrar: saldo_a_cobrar,
                                                                            abono: abono,
                                                                            saldo: parseFloat(parseFloat(saldo_a_cobrar) - parseFloat(abono))
                                                                        },
                                                                        success: function (resp) {
                                                                            console.log(resp);
                                                                            if (resp == 'Successfuly') {
                                                                                Swal.fire({
                                                                                    title: 'Guardado!',
                                                                                    text: "Su recibo a sido guardada con éxito!",
                                                                                    icon: 'success'
                                                                                });
                                                                                // location.href = "./recibo_digital.html";
                                                                            }
                                                                            // document.getElementById("submit").click();
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            });
        }
    });
}

function save() {
    // $("#").click();
    // document.all["formulario"].submit();
}

function logout() {
    localStorage.removeItem('usuario');
    window.location.href = "../login.php";
}