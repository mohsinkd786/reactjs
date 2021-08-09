import { useState } from "react";

const Aboutus = props =>{
    const [message,setMessage] = useState('');
    return (
        <>
            <h3>About us Component</h3>
            <div>
                <i>{props.sample}</i>
            </div>
            <div>
                <button onClick={()=>setMessage('Message Sent')}>Send Message</button>
            </div>
            <div>
                <b>{message}</b>
            </div>
        </>
    )
}

export default Aboutus;