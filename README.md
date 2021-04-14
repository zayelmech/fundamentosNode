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