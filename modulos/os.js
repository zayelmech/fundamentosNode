const os = require('os');

console.log(os.arch()); //arquitectura --x64
console.log(os.platform()); //wind32 o linux
console.table(os.cpus()); // 12 procesadores
console.log(os.cpus().length); // 12 procesadores
//console.log(os.constants); //errores
console.log(os.freemem()); //memoria libre en GB
console.log(GB(os.freemem())); //memoria libre en GB
console.log(GB(os.totalmem())); //memoria total en GB
console.log(os.homedir()); //directorio home
console.log(os.hostname());
console.log(os.networkInterfaces());

function kb(bytes) {
    return bytes / 1024;
}

function MB(bytes) {
    return kb(bytes) / 1024;
}

function GB(bytes) {
    return MB(bytes) / 1024;
}