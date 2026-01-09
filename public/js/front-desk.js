// Front Desk Interface Setup
const socket = io();
let sessions = [];

socket.on("race sessions", (data) => {
	sessions = data;
	console.log(data);
});

const form = document.getElementById("add-form");
const input = document.getElementById("drivers-input");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (input.value) {
		socket.emit("add session", input.value);
		input.value = "";
		form.classList.add("hidden");
	}
});

document.getElementById("auth-form").onsubmit = (e) => {
	e.preventDefault();
	document.getElementById("auth-form").classList.add("hidden");
	document.getElementById("race-sessions").classList.remove("hidden");
};

function showAddForm() {
	document.getElementById("add-form").classList.remove("hidden");
}
