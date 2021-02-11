import React, { useState } from 'react'

export default function Chat(props) {
    const [message, setMessage] = useState("")

    const sendMsg = (event) => {
        event.preventDefault();
        setMessage("")
        props.client.send(message);
    }

    const handleChange = (event) => {
        setMessage(event.target.value)
    }
    return (
        <div>
            <form onSubmit={sendMsg}>
                <input type="text" value={message} onChange={handleChange} placeholder="Message" />
                <button type="submit">send</button>
            </form>
        </div>
    )
}
