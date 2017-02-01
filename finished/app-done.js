const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const users = [];

app.use(express.static('public'));

app.get('/', (req, res) => {
    app.sendFile(__dirname + 'index.html');
});

server.listen(3000, () => {
    console.log('hey');
});


io.on('connection', (socket) => {

    //add the user to the list of users
    id = socket.id.substring(0, 6);
    users.push(id);
    console.log(users);
    console.log('connected ID: ' + id);
    io.emit('updateUsers', users, id, true);

    socket.on('msgToServer', (data) => {
        io.emit('msgToClient', data, id);
    });

    socket.on('disconnect', () =>{
        console.log('disconnected ID: ' + id);
        let dc = users.indexOf(id);
        users.splice(dc, 1);
        io.emit('updateUsers', users, id, false);
    });

});
