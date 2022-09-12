import React, { useEffect } from 'react'
import { useState } from 'react'

function Joke() {

    const divBack={
        backgroundColor:'lightblue',
       
  margin: "20px",
  marginLeft:'60px',
  marginRight:'60px',
  lineHeight: "60px",
  textAlign: "center"
    }
    const row = {
        textAlign: "center",
        /*the same margin which is every button have, it is for small screen, and if you have many buttons.*/
        marginLeft: "-20px",
        marginRight: "-20px",
        marginTop: "30px",
      }
      const appbutton = {
        backgroundColor: "#01AAAD",
        width: "150px",
        margin: "20px",
        display: "inline-block",
        lineHeight: "60px",
      }

     const [num,setName]=useState(1);
     
     const btnNext=()=>{
        console.log ("pressed next btn");
        setName(num+1);
      }

    

      useEffect(()=>{
alert("clicked");
      })
  return (
    <div>
        <h5 style={divBack}>here joke</h5>
        <div style={row}>
        <button type="button" style={appbutton} onClick={btnNext}>
          Next {num}
        </button>
      </div>
    </div>
  )
}

export default Joke