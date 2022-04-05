const { Message } = require('./user');
const { users } = require('./user');

users.push({ id: 'user-1', messages: [] }, { id: 'user-2', messages: [] });

const currentUser = users[0];
const sender = users[1];

const msg = new Message();
let len = msg.getMessages(currentUser.id, sender.id);

msg.sendMessage('user-1', 'user-2', 'hello');
msg.sendMessage('user-1', 'user-2', 'hello');
msg.sendMessage('user-1', 'user-2', 'hello');
msg.sendMessage('user-1', 'user-2', 'hello');
msg.sendMessage('user-1', 'user-2', 'hello');
msg.sendMessage('user-2', 'user-1', 'world');
// const m1 = msg.getMessages('user-2', 'user-1');
// const m2 = msg.getMessages('user-1', 'user-2');

const timer = setInterval(() => {
	const m1 = msg.getMessages(currentUser.id, sender.id);
	if (m1.length > len) {
		console.log(m1);
	}
}, 3000);

// console.log(m1, m2);
