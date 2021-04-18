console.time("Temporizador");
for (let i = 0; i < 10000; i++) {
    // Nuestro codigo entre los temporizadores puede ser cualquier cosa.
}
console.timeEnd("Temporizador");

console.time("Temporizador2");
for (let i = 0; i < 10000000; i++) {
    // Nuestro codigo entre los temporizadores puede ser cualquier cosa.
}
console.timeEnd("Temporizador2");
console.time('async');
console.log('Async begins');
asincrona()
    .then(() => {
        console.timeEnd('async');
    });


function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            resolve();
        }, 1000);
    })
}