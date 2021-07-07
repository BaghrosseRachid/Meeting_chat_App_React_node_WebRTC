import socketClient from 'socket.io-client'

//define,our server used
const SERVER ="http://localhost:5000"
let socket;

export const connectWebSocket=()=>{
    socket = socketClient(SERVER)
    //emit events listeners to backend
    socket.on('connection',()=>{
        console.log('succesfullt connected with wss server ')
        console.log(socket.id)
    })
}