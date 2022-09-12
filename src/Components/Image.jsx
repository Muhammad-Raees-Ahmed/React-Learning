import React from "react";
import { useState } from "react";

const imgstyle = {
  display: " block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "30px",
  width: "50%;",
};

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
function Image() {
  let url="https://picsum.photos/250/300";
  const [image, setImage] = useState(url);

  const btnNext=()=>{
    console.log("Clicked Next Button");
    setImage("https://picsum.photos/200");
  }
  const btnBack=()=>{
    console.log("Clicked Back Button");
    setImage("https://picsum.photos/seed/picsum/200/300");
  }
  return (
    <div>
      <img src={image} alt="Girl in a jacket" style={imgstyle}></img>

      <div style={row}>
        <button type="button" style={appbutton} onClick={btnBack}>
          Back!
        </button>
        <button type="button" style={appbutton} onClick={btnNext}>
          Next!
        </button>
      </div>
    </div>
  );
}

export default Image;
