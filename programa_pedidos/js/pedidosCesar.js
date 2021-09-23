$(document).ready(function() {

   
});

function pedidosPorMes(){
    $.ajax({
        url: '../inventarios_php/bd/servidor.php',
        type: 'GET',
        data: {
            quest: 'pedidos_por_mes'
        },
        success: function(res){
            console.log(res);
        }

    });
}