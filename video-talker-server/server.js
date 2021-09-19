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

let peers =[]

//define brodcastEventType event
const broadcastEventTypes ={
    ACTIVE_USERS :'ACTIVE_USERS',
    GROOP_CALL_ROOMS:'GROOP_CALL_ROOMS '
}
//write our call back if event is called (connection event for example)
io.on('connection',(socket)=>{
    socket.emit('connection',null)
    console.log('new users connected')
    console.log(socket.id)

    //register the new user connected in the server
    socket.on('register-new-user',(data)=>{
      peers.push({
          username:data.username,
          socketId:data.socketId
      })
      console.log('new user rejestred')
      console.log(`peers`, peers)

      // dispatch user connected event to informe all guests that a new guest joined the room
         //send event brodcast and peers table as data
      io.emit('broadcast',{
          event : broadcastEventTypes.ACTIVE_USERS,
          activeUsers:peers
      })
    })

    //handle if some user disconnected
    socket.on('disconnect',()=>{
        console.log('user disconnected')
        peers = peers.filter(peer=>peer.socketId !== socket.id)
        io.emit('broadcast',{
            event : broadcastEventTypes.ACTIVE_USERS,
            activeUsers:peers
        })
    })
})
