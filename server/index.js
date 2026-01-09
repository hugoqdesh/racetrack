const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const { setUpSocketEvents } = require("./socket-events");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(join(__dirname, "..", "public")));

setUpSocketEvents(io);

server.listen(3000, () => {
	console.log("Server running at http://localhost:3000");
});
