const {app, BrowserWindow} = require('electron');
const fs = require('fs');
const path = require('path');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    webPreferences: {
      webviewTag: true,
      contextIsolation: false,
      nodeIntegration: true,
      sandbox: true
    },
  });

  // The source and destination paths of html files
  const src = path.join('dist', 'plengine', 'browser', 'index.html');
  const dest = path.join(__dirname, 'index.html');

  // Move the file
  fs.rename(src, dest, (err) => {
    if (err) {
      console.error('Error moving file:', err);
      return;
    }
    // Read the file
    fs.readFile(dest, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }

      // Replace all occurrences of the specified url and add zonejs to application
      const updatedContent = data
        .replace(/href="favicon.ico"/g, 'href="C:/Workspace/repository/PLENGINE/dist/plengine/browser/favicon.ico"')
        .replace(/href="styles.css"/g, 'href="C:/Workspace/repository/PLENGINE/dist/plengine/browser/styles.css"')
        .replace(/src="polyfills.js"/g, 'src="C:/Workspace/repository/PLENGINE/dist/plengine/browser/polyfills.js"')
        .replace(/src="main.js"/g, 'src="C:/Workspace/repository/PLENGINE/dist/plengine/browser/main.js"')
        .replace(/<\/head>/g, '\n<script src="https://cdn.jsdelivr.net/npm/zone.js"></script>\n</head>');

      // Write the updated content back to the file
      fs.writeFile(dest, updatedContent, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          return;
        }
        // Load the index.html of the app.
        win.loadFile(path.join(__dirname, 'index.html')).then();
      });
    });
  });
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
