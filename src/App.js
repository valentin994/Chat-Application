import './App.css';
import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useEffect } from 'react';
import Chat from './Chat/Chat';

function App() {
  const client = new W3CWebSocket("ws://127.0.0.1:8000/ws")
  useEffect(() => {
    client.onerror = () => {
      console.log("Connection error")
    }
    client.onopen = () => {
      console.log("Connection established");
    };
    client.onmessage = (message) => {
      console.log(message)
    }
  })
  return (
    <div className="App">
      <Navigation />
      <Login />
      <Chat client={client} />
    </div>
  );
}

export default App;
