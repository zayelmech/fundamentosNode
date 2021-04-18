function saludar(params) {
    console.log(`Hola ${params}`);
}

module.exports = {
    saludar,
    prop1: 'Hola que tal'
};

//en es6 se usa export default
//export default saludar;