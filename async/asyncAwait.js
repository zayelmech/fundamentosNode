async function hola(nombre) {
    return new Promise(function name(resolve, reject) {
        //code here
        console.log(`Hola ${nombre} : funcion async hola()`);
        setTimeout(() => {
            resolve(nombre);
            //reject('Hay un error en Hola');
        }, 1500);
    });

}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Estoy hablando con ${nombre} `);
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve(nombre);
        }, 1000);
    });

}

// --
const main = async() => {
    let nombre = await hola('Abdiel');
    await hablar('Mensaje con await');
    hablar('Mensaje sin await');
    await adios(nombre);
}
console.log('Before main()..');
main();
console.log('After main()..');