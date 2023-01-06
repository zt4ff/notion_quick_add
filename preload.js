const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  ping: (text) => ipcRenderer.send("ping", text),
});
