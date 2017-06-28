$(document).ready(function () {

    // FUNCIÓN PARA VOLVER AL LISTADO
    $('#btnCancelar').click(function () {
        window.location.href = './tipoCombustible.html';
    });

    // FUNCIÓN PARA CREAR NUEVO ELEMENTO
    $('#btnCrear').click(function () {
        debugger;
        // PREPARAR LA LLAMADA AJAX 
        $.ajax({
            url: `/api/TiposCombustible`,
            type: "POST",
            dataType: 'json',
            data: {
                denominacion: $('#denominacion').val()
            },
            success: function (respuesta) {
                // SI LLEGO HASTA AQUÍ QUIERE DECIR
                // ME REDIRECCIONO A LA LISTA DE COMBUSTIBLES
                window.location.href = './tipoCombustible.html';
            },
            error: function (respuesta) {
                console.log(respuesta);
                debugger;
            }
        });
    });

});