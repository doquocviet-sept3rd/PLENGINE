const {app, BrowserWindow} = require('electron');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: false,
      enableRemoteModule: true,
      nodeIntegration: true
    },
  });

  // Load the index.html of the app.
  win.loadFile('dist/plengine/browser/index.html').then(() => console.info('Loaded index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
