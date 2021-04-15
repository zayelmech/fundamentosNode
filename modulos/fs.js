const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (error, data) => {
        //leido
        cb(data.toString());
    })

}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log(`Escrito correctamente ${ruta}`);
        }
    });
}

function borrar(ruta, cb) {
    try {
        fs.unlink(ruta, cb);
        console.log(`Archvio borrado ${ruta} `);
    } catch (error) {
        console.error(error);
    }

}
const ruta = __dirname + '/file.txt';

//leer(__dirname + '/archivo.csv', console.log);
escribir(ruta, 'Soy nuevo archivo', console.log);
leer(ruta, console.log);

borrar(ruta, console.log);