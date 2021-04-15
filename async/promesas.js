function hola(nombre) {
    return new Promise(function name(resolve, reject) {
        //code here
        console.log(`Hola ${nombre} : funcion async hola()`);
        setTimeout(() => {
            //resolve(nombre);
            reject('Hay un error en Hola');
        }, 1500);
    });

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Estoy hablando con ${nombre} `);
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve(nombre);
        }, 1000);
    });

}

// --execucion
console.log('Iniciando el proceso');
hola('Abdiel')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso...');
    })
    .catch((error) => {
        console.error(`Ocurrio un error: ${error}`);
    })