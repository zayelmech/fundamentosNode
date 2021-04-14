# EventLoop: asíncrona por diseño

- **Event Queue**: Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones,expresiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

- **Event Loop**: Un proceso con un bucle que gestiona, de forma asincrona, todos los eventos de tu aplicacion. Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

- **Thread Pool**: Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.

# Monohilo: implicaciones en diseño y seguridad

- Si no se tienen cuidado suficiente esto puede parar por completo todo el proceso
- hay formas de ver los errores y evitarlos como el `try{} catch{}`

```npm
npm run clase4
```

#