import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";


export default function Navigation(props) {
    let history = useHistory();

    const handleLogout = () => {
        Cookies.remove("access_token_cookie")
        props.setLoggedIn(false);
        history.push("/signin")
    }

    return (
        <div>
            <nav className="bg-gray-900">
                <div className="relative flex items-center justify-between h-16">
                    <ul className="flex font-sans text-lg text-gray-300">
                        {props.loggedIn ? "" : <li className="p-2 hover:text-gray-100 cursor-pointer"><Link to="/signin">Signin</Link></li>}
                        {props.loggedIn ? <li className="p-2 hover:text-gray-100 cursor-pointer" onClick={handleLogout} >Logout</li> : ""}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
