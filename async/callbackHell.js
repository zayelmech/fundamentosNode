function hola(nombre, miCallback) {
    console.log(`Hola ${nombre} : funcion async hola()`);
    setTimeout(() => {
        console.log('llamando al callback en hola()');
        miCallback('Abdiel');
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Estoy hablando... xD ');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}
// --


console.log('iniciando proceso');
hola('Abdiel', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado');
    });
});

//hola('Abdiel', adios);
hola('Abdiel', function(nombre) {
    adios(nombre, function() {
        console.log('terminamos');
    });
});

/* hola('Abdiel', function(nombre) {
    hablar(function() {
        hablar(function() {
            hablar(function() {
                adios(nombre, function() {
                    console.log('terminando el proceso de la funcion adios');
                });
            });

        });
    });
    console.log('terminando el proceso final');
}); */