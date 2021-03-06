import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function Chat(props) {
    const [message, setMessage] = useState("");
    const [listMessages, setListMessages] = useState([""]);

    useEffect(() => {
        props.client.onmessage = (message) => {
            setListMessages([...listMessages, JSON.parse(message.data).message]);
            console.log(listMessages);
        }
    })

    const sendMsg = (event) => {
        event.preventDefault();
        let msg = {
            "sender": "petar",
            "sent_to": "peric",
            "message": message
        }
        axios.post("http://127.0.0.1:8000/send_message/", msg).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        setMessage("");
    }

    const handleChange = (event) => {
        setMessage(event.target.value)
    }
    return (
        <div className="text-white border-4 border-red-600">
            <form onSubmit={sendMsg}>
                <input type="text" value={message} onChange={handleChange} placeholder="Message" />
                <button type="submit">send</button>
            </form>
            {listMessages ? listMessages.map((item) => (
                <p>{item}</p>
            )) : ""}
        </div>
    )
}
