const express = require('express')
const socket =require('socket.io')

const PORT = 5000;
const app = express()

const server = app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})

//define our sockets io
const io = socket(server,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }
})

//write our call back if event is called (connection event for example)
io.on('connection',(socket)=>{
    socket.emit('connection',null)
    console.log('new users connected')
    console.log(socket.id)
})
