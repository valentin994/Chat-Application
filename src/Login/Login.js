import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

export default function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [register, setRegister] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!register) {
            axios.post("http://localhost:8000/login/", { "email": username, "password": password }, {
                withCredentials: true, headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
            }).then(res => {
                props.setLoggedIn(true);
                history.push("/");
            }).catch(err => {
                console.log(err)
            })
        } else {
            axios.post("http://localhost:8000/register/", { "name": name, "email": username, "password": password }, {
                withCredentials: true, headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
            }).then(res => {
                setRegister(false);
            }).catch(err => {
                setErrorMessage(JSON.parse(err.request.response).detail)
            })
        }
    }

    let formFields =
        <div>
            <h3 className="p-2 text-white text-4xl">Sign in</h3>
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} className="rounded-sm px-4 py-3 mt-3 placeholder-white focus:outline-none bg-gray-500 text-white w-full" placeholder="Username" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="rounded-sm px-4 py-3 mt-3 placeholder-white focus:outline-none bg-gray-500 text-white w-full" placeholder="Password" />
            <div>
                <button className="mt-6 px-4 py-1 text-white bg-green-400 hover:bg-green-500"
                    type="submit">Sign in</button> <Link onClick={() => setRegister(true)} className="text-white underline p-2 text-xs">You don't have an account? Register</Link>
            </div>
        </div>

    if (register) {
        formFields =
            <div>
                <h3 className="p-2 text-white text-4xl">Register</h3>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="rounded-sm px-4 py-3 mt-3 placeholder-white focus:outline-none bg-gray-500 text-white w-full" placeholder="Name" />
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} className="rounded-sm px-4 py-3 mt-3 placeholder-white focus:outline-none bg-gray-500 text-white w-full" placeholder="Email" />
                <p className="text-red-400">{errorMessage}</p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="rounded-sm px-4 py-3 mt-3 placeholder-white focus:outline-none bg-gray-500 text-white w-full" placeholder="Password" />
                <div>
                    <button className="mt-6 px-4 py-2 text-white bg-green-400 hover:bg-green-500"
                        type="submit">Sign in</button> <Link onClick={() => setRegister(false)} className="text-white underline p-2 text-xs">You have an account? Sing in</Link>
                </div>
            </div>
    }
    return (
        <div>
            <div className="bg-gray-800 lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <form className="m-6 p-4" onSubmit={handleSubmit}>
                    {formFields}
                </form>
            </div>
        </div>
    )
}
