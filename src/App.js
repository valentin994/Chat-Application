import './App.css';
import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useEffect, useState } from 'react';
import Chat from './Chat/Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const client = new W3CWebSocket("ws://127.0.0.1:8000/ws");
  const [loggedIn, setLoggedIn] = useState(false);

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
  let routes = (
    <Switch>
      <Route path="/signin">
        <Login />
      </Route>
    </Switch>)
  if (loggedIn) {
    routes = (
      <Switch>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/">
          <Chat client={client} />
        </Route>
      </Switch>
    )
  }
  return (
    <Router>
      <div className="App">
        <Navigation setLogin={setLoggedIn} loggedIn={loggedIn} />
        {routes}
      </div>
    </Router>
  );
}

export default App;
