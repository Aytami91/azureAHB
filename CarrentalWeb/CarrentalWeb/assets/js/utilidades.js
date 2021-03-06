﻿type = ['', 'info', 'success', 'error', 'danger'];

mensajes = {
    showSwal: function (type, title, text) {
        if (type == 'aviso') {
            swal({
                title: title,
                text: text,
                type: 'warning'
            });
            return;
        }

        if (type == 'error') {
            swal({
                title: title,
                text: text,
                type: 'error'
            });
            return;
        }

        if (type == 'exito') {
            swal({
                title: title,
                text: text,
                type: 'success'
            });
            return;
        }
    },
    checkLogin: function (email, password, cb) {
        debugger;
        $.ajax({
            url: '/api/login',
            type: "POST",
            dataType: 'json',
            data: {
                email: email,
                password: password
            },
            success: function (respuesta) {
                // TODO OK
                if (respuesta !== null && respuesta.error !== '') {
                    //mensajes.showSwal('error', 'Atención', respuesta.error);
                    return cb(null, respuesta.error);
                }

                if (respuesta !== null && respuesta.error === '' && respuesta.totalElementos == 0) {
                    //mensajes.showSwal('error', 'Atención', 'Usuario inexistente o no encontrado');
                    return cb(null, 'Usuario inexistente o no encontrado');
                }

                if (respuesta !== null && respuesta.error === '') {
                    // HACER LA REDIRECCION AL DASHBOARD
                    // window.location.href = "/dashboard.html";
                    debugger;
                    return cb(respuesta.dataUsuario[0], null);
                }
            },
            error: function (respuesta) {
                // HAY ERROR
                mensajes.showSwal('error', 'Error en la llamada', '' + respuesta.status);
            }
        });
    },
    cargarDatosUsuario: function (cb) {
        var datosUsuario = null;
        var obj = localStorage.getItem('usuarioLogueado')
        if (obj !== null && obj !== undefined) {
            datosUsuario = JSON.parse(obj);
        }
        return cb(datosUsuario, null);
    }
}
columnDefs: [
                    {
                        'render': function (data, type, row) {
                            var contentHTML = '';
                            var fecha = new Date(row['fechaNacimiento']);
                            contentHTML += fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
                            return contentHTML;
                        },
                        'targets': 5
                    },
                    {
                        'render': function (data, type, row) {
                            var contentHTML = '';
                            contentHTML = '<a href="#" class="btn btn-simple btn-info btn-icon like"><i class="fa fa-heart"></i></a>';
                            contentHTML += '<a href="#" class="btn btn-simple btn-warning btn-icon edit"><i class="fa fa-edit"></i></a>';
                            contentHTML += '<a href="#" class="btn btn-simple btn-danger btn-icon remove"><i class="fa fa-times"></i></a>';
                            return contentHTML;
                        },
                        'targets': 6
                    }
]