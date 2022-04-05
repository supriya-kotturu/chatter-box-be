const express = require('express');
const http = require('http');
const { Server, Socket } = require('socket.io');
const { PORT } = require('./config');
const { Message } = require('./models/user');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/send', (req, res) => {
	const msg = Message.sendMessage('user-1', 'user-2', req.body.message);
	console.log(msg);
});

io.on('connection', (socket) => {
	console.log('new user in network');
	socket.on('chat message', (message) => {
		console.log('message : ', message);
		io.emit('chat message', message);
	});

	socket.on('disconnect', () => {
		console.log('user left the network');
	});
});

server.listen(PORT, () => console.log('listening on port : ', PORT));
