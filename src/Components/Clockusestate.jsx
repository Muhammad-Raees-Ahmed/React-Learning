import React from 'react'
import { useState } from 'react';



 
function Clockusestate() {
    

    let time = new Date().toLocaleTimeString();
    const [ctime, newTime] = useState(time);
  
    function updateTime() {
      time = new Date().toLocaleTimeString();
      newTime(time);
    }
  
    setInterval(updateTime, 1000);
     
      return (
    <div>
        <h1>{`Time is = ${ctime}`}  </h1>
    </div>
  )
}

export default Clockusestate