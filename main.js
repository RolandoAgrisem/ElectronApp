const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 991,
    // Ocultar la barra de menús de Chromium
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('./scr/index.html')
  // Permitir maximizar y minimizar la ventana
  win.setMaximizable(true);
  win.setMinimizable(true);
}

//Cuando la app esta lista, se ejecuta lo que esta dentro de esta funcion.
app.whenReady().then(() => {
  createWindow()

  //Este codigo es especialmente para macOS, para crear una ventana de navegador cuando no haya ninguna abierta.
  //Ya que en macOS comunmente la app sigue abierta incluso si el usuario ha cerrado todas la ventanas.
  app.on('activate', () => {
    //BrowserWindow.getAllWindows() es un array que obtiene todas las ventanas abiertas.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Salir de la aplicación cuando todas las ventanas están cerradas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})