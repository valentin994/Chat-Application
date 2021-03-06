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
import Cookies from 'js-cookie';
import Sidenav from "./Sidenav/Sidenav";

function App() {
  const client = new W3CWebSocket("ws://127.0.0.1:8000/ws");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (Cookies.get("access_token_cookie")) setLoggedIn(true);
    console.log(Cookies.get("access_token_cookie"));
    if (loggedIn) {
      client.onerror = () => {
        console.log("Connection error")
      }
      client.onopen = () => {
        console.log("Connection established");
      };
    }

  })
  let routes = (
    <Switch>
      <Route path="/signin">
        <Login setLoggedIn={setLoggedIn} />
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
      <div className="App border-4">
        <Navigation setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        {routes}
        <Sidenav />
      </div>
    </Router>
  );
}

export default App;
