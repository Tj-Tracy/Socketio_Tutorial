//Socket.io client logic
const socket = io.connect('http://localhost:3000');
//display a message sent from a server
socket.on("msgToClient", (msg, id) => {
    document.querySelector('.messages')
    .insertAdjacentHTML('beforeend', `<p><b>${id}</b>: ${msg}</p>`);
});

//add users to the list and display a connected message
socket.on("updateUsers", (users, currentUser, connected) => {
    document.querySelector('.users').innerHTML = ` `;
    users.forEach( (id) => {
        console.log(id);
        document.querySelector('.users')
        .insertAdjacentHTML('beforeend', `<p>${id}</p>`);
    });

    document.querySelector('.messages')
    .insertAdjacentHTML('beforeend', connected ? `<p>User ${currentUser} has joined the room</p>` : `<p>User ${currentUser} has disconnected</p>`);
});

//send the message to the server to be relayed to everyone in the room
function sendMessage() {

    let msg = document.querySelector('.message-bar').value;
    //clear the chat bar
    document.querySelector('.message-bar').value = "";
    socket.emit('msgToServer', msg);
    let scroll = document.querySelector('.messages');
    scroll.scrollTop = (scroll.scrollHeight);
}
