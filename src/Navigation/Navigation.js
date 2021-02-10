import React from 'react'

export default function Navigation() {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="flex flex-row-reverse">
                    <ul className="font-sans text-lg text-gray-300">
                        <li className="p-2 hover:text-gray-100 cursor-pointer">Logout</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
