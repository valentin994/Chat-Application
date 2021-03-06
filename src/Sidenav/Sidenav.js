import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav(props) {
    return (
        <div className="w-1/12 border-4 text-center">
            <ul>
                <li>Posts</li>
                <li>Chat</li>
            </ul>
        </div>
    );
}

export default Sidenav;