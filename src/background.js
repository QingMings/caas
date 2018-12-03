import {
  app, BrowserWindow, protocol, Menu, remote, ipcMain
} from 'electron';
import { createProtocol, installVueDevtools } from 'vue-cli-plugin-electron-builder/lib';
import appInfo from './appinfo';
import IpcMgr from './ipcMgr';

const path = require('path');
const url = require('url');

const isDevelopment = process.env.NODE_ENV !== 'production';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let win_about;
const logo = path.join(__dirname, 'assets/logo.png');

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true });

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: appInfo.mainWindow.width,
    height: appInfo.mainWindow.height,
    minHeight: 768,
    minWidth: 1024,
    // titleBarStyle: 'hiddenInset',
    frame: false
  });

  if (isDevelopment || process.env.IS_TEST) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol('app');
    // Load the index.html when not in development
    win.loadURL('app://./index.html');
  }

  win.on('closed', () => {
    win = null;
  });
  new IpcMgr(ipcMain, win.webContents);
}

function createMenu() {
  const template = [
    {
      label: app.getName(),
      submenu: [
        {
          label: appInfo.appAbout,
          click() {
            if (win_about == null) {
              win_about = new BrowserWindow({
                width: 300,
                height: 180,
                title: appInfo.appAbout,
                center: true,
                resizable: false,
                icon: logo,
                minimizable: false,
                maximizable: false
              });

              win_about.loadURL(url.format({
                pathname: path.join(__static, 'about.html'),
                protocol: 'file',
                slashes: true
              }));
              win_about.on('closed', (e) => {
                win_about = null;
              });
            }
          }
        },
        {
          role: 'quit',
          label: '退出'
        }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    await installVueDevtools();
    // console.info(remote.);
  }
  createWindow();
  createMenu();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit();
      }
    });
  } else {
    process.on('SIGTERM', () => {
      app.quit();
    });
  }
}
