const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function writeFile(_, data) {
    console.log(_, data)
    fs.writeFileSync(path.resolve(__dirname, 'E:\github\my-electron-demo\electron-hcj'), data);
}

async function readFile() {
    const data = await fs.readFileSync(path.resolve(__dirname, 'E:\github\my-electron-demo\electron-hcj')).toString();
    return data;
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.resolve(__dirname, './preload.js'),
        },
        // x: 0,
        // y: 0,
    });
    ipcMain.on('save-file', writeFile);
    ipcMain.handle('read-file', readFile);
    win.loadFile('./pages/index.html');
}

console.log("dirname: ", __dirname);

app.on('ready', () => {
    createWindow();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});