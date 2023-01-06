const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const sendTicketToNotionDatabase = () => {
  return new Promise((res, rej) => {
    // do random stuff for 3 seconds
    setTimeout(() => res("resolved"), 3000);
  });
};

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 100,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  ipcMain.on("ping", (event, text) => {
    console.log(text);

    sendTicketToNotionDatabase().then((val) => {
      console.log(val);
      app.quit();
    });
  });
  createWindow();

  app.on("window-all-closed", () => {
    app.quit();
  });
});
