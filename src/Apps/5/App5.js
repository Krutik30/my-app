import React , { useState } from "react";

function App5(){

    setInterval(updateTime, 1000);
    
    const now = new Date().toLocaleTimeString();
    
    const [time , setTime] = useState(now);

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={updateTime}>Get time</button>
        </div>
    )
}

export default App5;