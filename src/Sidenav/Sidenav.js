import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav(props) {
    return (
        <div className="font-sans flex-1 flex-col w-60 text-white dark:bg-gray-800 border-r-1 border-gray-900">
            <div className="text-md p-5">
                <ul>
                    <li className="p-1">Posts</li>
                    <li className="p-1">Chat</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidenav;