console.log('Inicio del programa');
let i = 0;

setInterval(() => {
    console.log(`conteo: ${i}`);
    i++;

    if (i === 5) {
        console.warn(`conteo: ${i}--- Forzando error con try catch`);
        try {
            var a = 3 + z; //generando error z no esta declarada    
        } catch (error) {
            console.error(error);
        }
    }
    if (i === 10) {
        console.warn(`conteo: ${i}--- Forzando error sin try catch`);
        var a = 3 + z; //generando error z no esta declarada    
    }

}, 1000);

console.log('Final del codigo');