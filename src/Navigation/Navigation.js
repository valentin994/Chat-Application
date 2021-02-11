import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="relative flex items-center justify-between h-16">
                    <ul className="flex font-sans text-lg text-gray-300">
                        <li className="p-2 hover:text-gray-100 cursor-pointer"><Link to="/signin">Signin</Link></li>
                        {props.loggedIn ? <li className="p-2 hover:text-gray-100 cursor-pointer">Logout</li> : ""}
                        <li className="p-2 hover:text-gray-100 cursor-pointer"><button onClick={() => props.setLogin(!props.loggedIn)}>toggle login</button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
