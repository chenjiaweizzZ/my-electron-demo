const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
    version: process.version,
    saveFile: (data) => {
        ipcRenderer.send('save-file', data);
    },
    readFile: () => {
        return ipcRenderer.invoke('read-file');
    }
})     