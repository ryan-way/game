const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win;

const args = process.argv.slice(1),
    serve = args.some(val => val === '--serve');

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#000000'
  })
  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, `/dist/game/index.html`),
        protocol: "file:",
        slashes: true
      })
    );
  }
  console.log(path.join(__dirname, `/dist/game/index.html`))

}

app.on('ready', createWindow)

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
