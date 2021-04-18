# EventLoop: asíncrona por diseño

- **Event Queue**: Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones,expresiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

- **Event Loop**: Un proceso con un bucle que gestiona, de forma asincrona, todos los eventos de tu aplicacion. Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

- **Thread Pool**: Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.

![Alt text](https://raw.githubusercontent.com/zayelmech/fundamentosNode/main/src/img/ejemplo.webp)

# Monohilo: implicaciones en diseño y seguridad

- Si no se tienen cuidado suficiente esto puede parar por completo todo el proceso
- hay formas de ver los errores y evitarlos como el `try{} catch{}`

```npm
npm run clase4
```

# Variables de entorno

Se recomienda poner las variables de entorno en **mayusculas** y separarlas con `_` guin bajo
las variables de entorno se pueden llegar a usar en emails,tokens ip's, id's,urls's para inyectar informacion desde fuera al proceso y este se ejecute en tiempo real 

El script de esta clase es
```npm
npm run clase5
```
es lo mismo que correr este comando para inicializar las variables de entorno
```npm
NOMBRE=Abdiel TWITTER=abdielcro node conceptos/entorno.js
```

#  Nodemon y PM2

nodemon verifica si hay cambios y ejecutan los codigos con node
y PM2 es más robusto / te permite monitorear, ejecutar, etc.

# callback

Las funciones son elementos de primer nivel

# Callback Hell: refatorizar o sufrir
![Alt text](https://tse1.mm.bing.net/th?id=OIP.zxx4iQAG4HilOIQqDKpxJwHaEU&pid=Api&P=0&w=299&h=175)

# Promesas

El concepto principal es que las promesas pueden tener estados
- Resuelta
La manera de declarar una promesa es la siguiente
```js
function hola(nombre) {
    return new Promise(function name(resolve, reject) {
        //code here
        resolve(nombre);
    });
}

//Para ejecutarlas 
hola('Abdiel')
    .then((nombre) => {
        console.log('Terminado el proceso...');
    })
    .catch((error) => {
        console.error(`Ocurrio un error: ${error}`);
    })
```

# Async / await

- **Asyn/Await** es azucar sintactico, es decir, una forma muy legible y entendible de realizar código, un **Async/Await** no deja de ser una función asíncrona, la diferencia es que al usar esta sintaxis se podrá ver un código más legible.
- Para usar correctamente esta sintaxis usamos Async para declarar una función asíncrona, cuando una función es asíncrona podremos usar dentro de su contexto el Await.
- El **Await** es la manera en que le indicaremos a nuestro código que ha de “esperar” a que el evento al cual le indiquemos Await es importante para el proceso del código, por ende, para poder seguir ejecutando el proceso espere a que el evento se resuelva y retorne un valor.

# Global 
En node tenemos el objeto **global** que contiene los metodos y propiedades basicas que usamos Node

`{_global_ es un equivalente de _this_ en el navegador}`
En node **this** es un alias de **global**

```js
    this === global //true
```
Algunos metodos que se incluyen en el global objeto son 
- setTimeOut :encargada de llamar a una funcion despues de un tiempo
- setInterval : llama a otra funcion cada intervalo de tiempo
- setmnmediate: Equivale a setTimeOut pero con tiempo 0
- clearInterval : detiene un setInterval
- clearTimeOut : detiene un setTimeOut

# File system

El **file system** provee una API para interactuar con el sistema de archivos cerca del estándar POSIX.
POSIX es el estándar para interfaces de comando y shell, las siglas las significan: “Interfaz de sistema operativo portátil” la X de POSIX es por UNIX.

El file system nos permite acceder archivo del sistema, leer, modificar., escribirlos, es muy útil para precompiladores, para lo que requiera hacer grabados de disco, o bases de datos en node requieren un uso intensivo de Node.Todo lo que hagamos con modulos por buenas prácticas son asincronos, pero tienen una version sincrona no recomendada pues pordría bloquear el event loop con más facilidad.
```js
const fs = require('fs');
fs.readFile() //leer un archivo
fs.writeFile() //escribir en un archivo
fs.unlink() //borrar archivo

```

# Console

Con console podemos imprimir todo tipo de valores por
nuestra terminal.
```js
    console.log()// recibe cualquier tipo y lo muestra en el consola.
    console.info()// es equivalente a log pero es usado para informar.
    console.error()// es equivalente a log pero es usado para errores.
    console.warn()// es equivalente a log pero es usado para warning.
    console.table()// muestra una tabla a partir de un objeto.
    console.count()// inicia un contador autoincremental.
    console.countReset()// reinicia el contador a 0.
    console.time()// inicia un cronometro en ms.
    console.timeEnd()// Finaliza el cronometro.
    console.group()// permite agrupar errores mediante identación.
    console.groupEnd()// finaliza la agrupación.
    console.clear()// Limpia la consola.
```

# Procesos hijo

El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.


- Usa _spawn_ cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
- Usa _exec_ cuando quieras que el proceso hijo devuelva mensajes de estado simples.
- Usa _spawn_ cuando quieras recibir datos desde que el proceso arranca.
- Usa _exec_ cuando solo quieras recibir datos al final de la ejecución.

# HTTP 

Node nos ofrece el modulo HTTP el cual nos permite principalmente crear un servidor en nuestro computador.

En este modulo encontraremos todo lo necesario que necesitamos para crear un sistema de rutas, que responderá cada ruta, los header que podrá mandar, etc.

Uno de los métodos principales de este modulo es createServer, el cual nos permitirá abrir un puerto para crear el servidor.