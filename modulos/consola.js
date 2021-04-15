console.log('Clase 13');

const arreglo = [{
        a: 2,
        b: 3,
    },
    {
        a: 5,
        x: 2,
        y: 3,
    }
]
console.table(arreglo);

//funciones
function funcion1() {
    console.group('Funcion 1');
    console.log('esto es de funcion 1');
    console.log('esto es de funcion 1');
    funcion2();
    console.groupEnd('Funcion 1')
}


function funcion2() {
    console.group('funcion 2');
    console.log('esto es de funcion 2');
    console.groupEnd('funcion 2');

}

funcion1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');