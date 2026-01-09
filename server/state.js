// All State Managements (sessions, timer, race)

const sessions = [
	{
		id: 1,
		drivers: ["Bob", "Hugo"],
	},
];

function addSession() {}

function getSessions() {
	return sessions;
}

module.exports = {
	addSession,
	getSessions,
};
