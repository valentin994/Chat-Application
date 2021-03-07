import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav(props) {
    return (
        <div className="flex-1 flex-col w-1/4 h-full border-green-600 border-2">
            <ul>
                <li>Posts</li>
                <li>Chat</li>
            </ul>
        </div>
    );
}

export default Sidenav;