const users = [];

class Message {
	getMessages = (id, senderId) => {
		const currentUser = users.find((user) => user.id === id);

		const messages =
			currentUser &&
			currentUser.messages.find((message) => message.id === senderId);

		return currentUser.messages;
	};

	register = () => {};

	sendMessage = (id, senderId, message) => {
		const sender = users.find((user) => user.id === senderId);
		const tempMessage = {
			id,
			message,
		};
		sender.messages.push(tempMessage);
	};
}

class User {
	constructor(id, messages = []) {
		this.id = id;
		this.messages = messages;
	}
}

module.exports = { Message, users };
