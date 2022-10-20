const express = require('express');
const socketio= require('socket.io');
const http = require('http');
const router = require('./routes');
const cors = require('cors');
const {addUser,removeUser,getUser,getUserInRoom} = require('./user');
const app = express();
const PORT =process.env.PORT || 5000;

app.use(cors());
const server =http.createServer(app);
const io = socketio(server,{
    cors:{
        origin:'http://localhost:3000'
    }
});


io.on('connection',(socket)=>{

    socket.on('join',({name,room},callback)=>{

        const {error,user} = addUser(socket.id,name,room)

        if(error) return callback(error);

        socket.emit('message',{user:'admin',text:`${user.name},welcome to the room ${user.room}`});

        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} has joined`});
        socket.join(user.room);

        io.to(user.room).emit('roomData',{room:user.room,users:getUserInRoom(user.room)});

        callback()
    });

    //sending a message
    socket.on('sendMessage',(message,callback)=>{
        const user = getUser(socket.id);

        io.to(user.room).emit('message',{user:user.name,text:message});
        io.to(user.room).emit('roomData',{room:user.room,users:getUserInRoom(user.room)});

        callback()
    })

    io.on('disconnect',(soc)=>{
        const user =removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left`});
        }
    })


})

app.use(router)
server.listen(PORT,()=>console.log(`server is running in http://localhost:${PORT}`))