const { exec, spawn } = require('child_process');

//const  exec = require('child_process').exec; //se puede usar tambien de esta manera

/* exec('node modulos/consola.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
}); */

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);

proceso.stdout.on('data', (dato) => {
    console.log("Terminó: " + proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', (dato) => {
    console.log(dato.toString());
});