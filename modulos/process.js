//cosnt p = require('process');

process.on('beforeExit', () => {
    console.log('El proceso casi acaba');
    /* setTimeout(() => {
        console.log('esto se verá por que ya casi acaba todo');
    }, 1000); */
});

process.on('exit', () => {
    console.log('El proceso acabo');
    setTimeout(() => {
        console.log('esto no se verá nunca por que ya acabo el eventloop');
    }, 100);
});

process.on('uncaughtException', (err, origen) => {
    console.log('Se olvido capturar un error');
    console.error(err);
});
const i = 9 + z;
console.log('Esto si el error no se recoje, no sale');