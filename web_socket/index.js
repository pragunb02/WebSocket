import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8000;

// instance of server in sever variable
const server = app.listen(port, () => {
  console.log("server is running");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("Data From Client:", data.toString()); // doubt to string
    console.log("Data From Client :" + data.toString());
    ws.send("thanks buddy");
  });
}); // ws stand for web socket for every specific client ws===stream
