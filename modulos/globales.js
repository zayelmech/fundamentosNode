//console.log(global);

/* console.log(setInterval);
let i = 0;
let intervalo = setInterval(() => {
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
    console.log('Lorem');
}, 500); */

//console.log(process);// ver el proceso detras

console.log(__dirname); //la direccion del repositorio local
console.log(__filename); //el nombre del repositorio local

//crear variables globales

global.miVariable = 'el valor';
console.log(miVariable);