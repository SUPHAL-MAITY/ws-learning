"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    console.log("new connection");
    ws.on('error', console.error);
    ws.on('message', function message(data) {
        console.log('received: %s', data);
        if (data.toString() === "ping") {
            ws.send("pong");
        }
    });
    //periodic sending 
    // setInterval(()=>{
    //   ws.send("what is the price of solana"+Date.now())
    // },2000)
    ws.send('something happened once');
});
