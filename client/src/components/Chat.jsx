import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Infobar from './Infobar';
import InputBar from './InputBar';
import Messages from './Messages';

let socket;

const Chat = () => {
  const ENDPOINT='http:://localhost:5000';
 const [name,setName] = useState('');
 const [room,setRoom] = useState('');
 const [messages,setMessages] = useState([]);
 const [message,setMessage] = useState('');

  useEffect(()=>{
    const {name,room} = queryString.parse(window.location.search);
    socket = io('http://localhost:5000/')
    setName(name)
    setRoom(room)
    
    socket.on("connect", () => {
      socket.emit("join", {name,room},()=>{
      
      });
    });

    return ()=>{
      socket.emit('disconect');

      socket.off()
    }
  },[ENDPOINT,window.location.search]);

  useEffect(()=>{
      socket.on('message',(message)=>{
          setMessages([...messages,message])
      })
      },[messages])

      const sendMessage=(e)=>{
        e.preventDefault();

        if(message){
          socket.emit('sendMessage',message,()=>setMessage(''))
        }
      }


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-2/5 border">
       <Infobar room={room} />

        <Messages messages={messages} name={name} />
       <InputBar message={message} setMessage={setMessage} sendMessage={sendMessage} />

      </div>
    </div>
  )
}

export default Chat