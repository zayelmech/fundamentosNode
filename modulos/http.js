const http = require('http');

http.createServer(function(request, response) {
    console.log('nueva peticion');
    console.log(request.url);
    switch (request.url) {
        case '/hola':
            response.write('Hola, que tal');
            response.end();
            break;

        default:
            response.write('404 , que tranza');
            response.end();
            break;
    }

    //escribir respuesta al usuario
    /*  response.writeHead(201, { 'Content-Type': 'text/plain' })
     response.write('Hola, ya se usar http de node Js')

     response.end(); */
}).listen(9000);

console.log("escuchando en el puerto 9000");