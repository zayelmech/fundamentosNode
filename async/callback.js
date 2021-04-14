function soyAsincrona(nombre, miCallback) {
    console.log(`Hola ${nombre} soy una funcion asincrona`);
    setTimeout(() => {
        console.log('Estoy siendo asincrona');
        miCallback();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}
console.log('iniciando proceso');
soyAsincrona('Abdiel', function() {
    adios('Abdiel', function() {
        console.log('terminando el proceso de la funcion adios');
    });
    console.log('terminando el proceso de la funcion callback');
});

console.log('fin del codigo');