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

# OS 
El modulo de Node para OS me permite acceder a elementos de muy bajo nivel, y es útil en diferentes contextos.

# Process
El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.

- UncaughtException: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.

```js
process.on('uncaughtException', (error, origen) => console.log(error, origen));
```

- exit: Se ejecuta cuando node detiene el `{eventloop}` y cierra su proceso principal.

```js
process.on('exit', () => console.log('Adios'));
```

# Cosntruyendo modulos: Require e import 

En Node tenemos una forma de importar módulos la cual es con el método `{require}`, el cual es la forma por defecto de importar módulos, ya sean nuestros propios módulos como los de otras personas en nuestros proyectos JS, pero suele haber mucha confusión debido al import.
- **Import** es la forma de importar módulos en Ecmascript >= 6, el cual es un estándar de JavaScript para la web, esta forma de importar en teoría Node no la acepta oficialmente, a no ser que usemos su modo de `{.mjs}`.
- Pero gracias a compiladores como **Babel**, nosotros podremos utilizar estas normas de Ecmascript en nuestro código para cuando se ejecute se transpile en código que sea aceptable por Node.
Se recomienda en la mayoría de veces la importación con **require**.

# Modulos utiles

- bcrypt crea un hash que identifica una password por ejemploLa función de cifrado de bcrypt nos permite construir una plataforma de seguridad utilizando contraseñas encriptadas con Salt.
- Moment. js es una librería que nos permite solventar estos problemas e implementa un sistema de manejo de fechas mucho más cómodo.
- Sharp puede convertir imágenes grandes en imágenes JPEG, PNG más pequeñas y compatibles con la web de diferentes dimensiones.

# Buffer & Streams
- Buffer es la forma en que podemos leer los datos es su forma mas sencilla, en este caso Node transmite estos datos Buffer en binario.
Poder convertir datos a Buffer nos ayudara a la velocidad y mejorar el rendimiento de la lectura y escritura de datos, debido que se hace en el lenguaje de más bajo nivel para las maquinas.
- Los streams son puntos de lectura de Buffers, con estos podemos declarar que acciones ejecutar cuando se recibe un buffer. Existen tres tipos de streams, stream de lectura, de escritura y de lectura y escritura.
Un gran ejemplo de uso de los streams es el procesamiento de archivos grandes, como imágenes o videos, ya que podemos transformar estos a buffer y a través de los streams cargarlos o guardarlos parte por parte para mejorar el rendimiento de nuestro código.

# Benchmarking (console time y timeEnd)
La función `{console.time(‘nombre’)}` inicia un temporizador que se puede usar para rastrear cuánto tiempo dura una operación. El temporizador sera identificado por el nombre dado a la consola. Ese mismo nombre se utilizara cuando se llame a `{console.timeEnd(‘nombre’)}` para detener el temporizador y obtener el tiempo demorado durante el proceso.

# Error First Callbacks

Los Error First Callbacks se utilizan para pasar primero el error y los datos posteriormente. Entonces, puedes verificar el primer argumento, es decir, el objeto de error para ver si algo salió mal y puedes manejarlo. En caso de que no haya ningún error, puedes utilizar los argumentos posteriores y seguir adelante.

# Scraping
Web scraping es una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o incrustando un navegador en una aplicación.

# Automatizando procesos

`{gulp.js}`

- Es una herramienta de construcción en JavaScript construida sobre flujos de nodos . 
- Estos flujos facilitan la conexión de operaciones de archivos a través de canalizaciones .
- Gulp lee el sistema de archivos y canaliza los datos disponibles de un complemento de un solo propósito a otro a través del .pipe()operador, haciendo una tarea a la vez. 
- Los archivos originales no se ven afectados hasta que se procesan todos los complementos. Se puede configurar para modificar los archivos originales o para crear nuevos. 
- Esto otorga la capacidad de realizar tareas complejas mediante la vinculación de sus numerosos complementos. 