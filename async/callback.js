function soyAsincrona(nombre, miCallback) {
    console.log(`Hola ${nombre} soy una funcion asincrona`);
    setTimeout(() => {
        console.log('Hola Estoy siendo asincrona');
        miCallback('Abdiel');
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}
console.log('iniciando proceso');
soyAsincrona('Abdiel', function(nombre) {
    adios(nombre, function() {
        console.log('terminando el proceso de la funcion adios');
    });
    console.log('terminando el proceso de la funcion callback');
});

/* soyAsincrona('Carlos', function() {});
adios('Carlos', function() {});
 */
console.log('fin del codigo');