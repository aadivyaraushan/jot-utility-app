const {app, BrowserWindow} = require('electron');
const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 400,
        minWidth: 200,
        minHeight: 200,
        useContentSize: true,
        show: false,
        minimizable: false,
        maximizable: false,
        fullscreenable: false,
        title: 'Working Memory',
        icon: './images/clipboard-light-mode.ico',
        autoHideMenuBar: true,
        frame: false
    })

    win.loadFile('index.html')
    win.setAlwaysOnTop(true,  'floating')
    win.once('ready-to-show', () => {
        win.show();
    })
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
})