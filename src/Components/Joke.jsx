import React, { useEffect } from 'react'
import { useState } from 'react'

function Joke() {

  const divBack = {
    backgroundColor: 'lightblue',

    margin: "20px",
    marginLeft: '60px',
    marginRight: '60px',
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

  const [num, setName] = useState(1);
  const [joke, setJoke] = useState("wait....");

  const btnNext = () => {
    console.log("pressed next btn");
    setName(num + 1);
    setJoke(
      getjoke()
    )
  }


const getjoke=()=>{
  fetch("http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe")
        .then(res => res.json())
        .then(res2 => {
          console.log(res2);
          setJoke(res2.value.joke);
        })
}

useEffect(()=>{
  getjoke();
},[])

  return (
    <div>
      <h5 style={divBack}>{joke}</h5>
      <div style={row}>
        <button type="button" style={appbutton} onClick={btnNext}>
          Next {num}
        </button>
      </div>
    </div>
  )
}

export default Joke