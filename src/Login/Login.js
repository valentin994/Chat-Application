import React from 'react'

export default function Login() {

    return (
        <div>
            <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <form className="m-6">
                    <input type="text" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
                </form>
            </div>
        </div>
    )
}
