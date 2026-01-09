// Socket Event Handlers
const state = require("./state");

function setUpSocketEvents(io) {
	io.on("connection", (socket) => {
		console.log("user connected");

		socket.emit("race sessions", state.getSessions());

		socket.on("add session", (session) => {
			console.log(session);
		});
	});
}

module.exports = { setUpSocketEvents };
