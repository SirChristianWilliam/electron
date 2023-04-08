const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
  })
  ipcMain.handle('ping', () => 'pong')
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})


// This keeps the app icon on the dashboard if I close the window, 
// Use it if not on Mac

// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') app.quit()
//   })

// This code cancels the "npm run start" when I manually close the window. 
// Otherwise I'd have to "ctrl+c" to ensure it stops running in the background
// app.whenReady().then(() => {
//     createWindow()
  
//     app.on('activate', () => {
//       if (BrowserWindow.getAllWindows().length === 0) createWindow()
//     })
//   })

