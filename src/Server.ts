import express = require('express');
import http = require('http');
import socketio = require('socket.io');
import Deck from './models/Deck';


const app = express();
const httpInstance = http.createServer(app);
const io = socketio(httpInstance);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('deck', JSON.stringify(new Deck()));
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 3001;
app.get('/api', (req, res) => {
    // Used for testing server without proxy
    // res.send('Server running...<script src="https://cdn.jsdelivr.net/npm/socket.io-client@2/dist/socket.io.js"></script>');
    res.send('Server running...');
});

httpInstance.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});


export default app;