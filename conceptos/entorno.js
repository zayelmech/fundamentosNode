let nombre = process.env.NOMBRE || 'Sin nombre';
let twitter = process.env.TWITTER || 'usuario_1';
const clase = 5;

console.log(`Hola ${nombre} esta es la clase #${clase}.
twitter: ${twitter}`);