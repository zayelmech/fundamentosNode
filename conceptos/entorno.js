let nombre = process.env.NOMBRE || 'Sin nombre';
let twitter = process.env.TWITTER || 'Sin Twitter';
const clase = 5;

console.log(`Hola ${nombre} esta es la clase #${clase}.
twitter: ${twitter}`);