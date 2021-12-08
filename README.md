# websocky
Websocky is a minimalistic websocket client GUI, written in react, wrapped in electron.

Features:
* automatic websocket connection and reconnection
* websocket URL saved persistently
* instant message sending
* stored message sending: use 0-9 keys to send messages stored in advance
* stored messages saved persistently
* connection related event logging
* message logging
* log line highlight
* save logs into a .txt file
* clear logs

### Screenshot

![alt text](https://github.com/01110/websocky/raw/main/websocky_screen.png "Weboscky Screenshot")

## Install & Development

### React

```bash
#change directory to the react module
cd react

#install npm packages
npm install

#start react development server on port 3000
npm start

#make changes...

#update the build folder (necessary for packaging into electron)
npm run build
```

### Electron

```bash
#change directory to the electron module
cd electron

#install npm packages
npm install

#start electron in dev mode, automatically copies build folder from react module
npm start
```

## This project is powered by:

* **react**
* **electron**
* **bootstrap**
* **bootstrap icons**
* **react-use-websocket**
* **react-use-localstorage**
* **react-moment**
* **electron-forge**

## License

Websocky is licensed under MIT, see: [license].

[license]: https://github.com/01110/websocky/blob/main/LICENSE
