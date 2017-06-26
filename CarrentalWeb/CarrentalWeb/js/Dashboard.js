$(document).ready(function () {

    mensajes.cargarDatosUsuario(function (datosUsuario, error) {
        if (datosUsuario === null) {
            // REDIRECCIONO
            window.location.href = '/dashboard.html';
        }
    });

});