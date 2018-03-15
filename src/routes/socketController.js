import Post from '../models/PostModel'

const socketio = (server) => {
    var io = require('socket.io').listen(server);
    // define interactions with client
    io.sockets.on('connection', function(socket){

        //send data to client
        setInterval(function(){
            socket.emit('stream', getPosts());
        }, 2000);
    });
}

function getPosts() {
    Post.find({}, (err, post) => {
        if (!err) {
            return post
        }   
    })
}

export default socketio;
