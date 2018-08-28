var socket = io();

var params = new URLSearchParams(window.location.search);
if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y la sala son necesario');

}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};

socket.on('connect', function() {
    console.log('Conectado al servidor');
    socket.emit('entrarChat', usuario, function(resp) {
        console.log('usuarios conectados', resp);
    });
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});


// socket.emit('crearMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });



socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

// Evento de cuando un user sale o entra del chat
socket.on('listaPersonas', function(personas) {
    console.log(personas);
});


//mensajes privados

socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje privado: ', mensaje);
});