import electron from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow: null | electron.BrowserWindow;

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      preload: `${__dirname}/preload.js`,
    },
  });

  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.on('closed', (): void => {
    mainWindow = null;
  });

  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', (): void => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', (): void => {
  if (mainWindow === null) {
    createWindow();
  }
});
