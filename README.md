# ElectronApp
Proyecto basico para hacer aplicaciones de escritorio usando Html,Js y Css

### Comenzar
Debemos tener instalado localmente nodeJs, las aplicaciones Electron siguen la misma estructura general que otros proyectos en Node.js. Comienza creando una carpeta e iniciando un paquete npm.

`npm init`

Se crea el archivo package.json y deberia verse algos así:

```js
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "author": "Rolando Guzman",
  "license": "MIT"
}
```

Luego, instala el paquete electron en las devDependencies de tu aplicación.

`npm install --save-dev electron`

Finalmente, querrás ser capaz de ejecutar Electron. En el campo scripts de tu configuración package.json, añade un comando start como se muestra a continuación:

```js
{
  "scripts": {
    "start": "electron ."
  }
}
```
Ahora podemos ejecutar la aplicación:

`npm start`

> El punto de partida de toda app electron es el archivo main.js, por eso lo defimos al inicializar npm en `npm init`.
