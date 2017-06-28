$(document).ready(function () {

    // FUNCIÓN PARA VOLVER AL LISTADO
    $('#btnCancelar').click(function () {
        window.location.href = './marcas.html';
    });

    // FUNCIÓN PARA CREAR NUEVO ELEMENTO
    $('#btnCrear').click(function () {

        // PREPARAR LA LLAMADA AJAX 
        $.ajax({
            url: `/api/Marcas`,
            type: "POST",
            dataType: 'json',
            data: {
                denominacion: $('#denominacion').val()
            },
            success: function (respuesta) {
                // SI LLEGO HASTA AQUÍ QUIERE DECIR
                // ME REDIRECCIONO A LA LISTA DE MARCAS
                window.location.href = './marcas.html';
            },
            error: function (respuesta) {
                console.log(respuesta);
            }
        });
    });

});