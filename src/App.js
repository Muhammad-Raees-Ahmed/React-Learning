import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Divide from "./Components/Divide";
import Multiply from "./Components/Multiply";
import Add, { add, mul, div, sub } from "./Components/Add";
import { calculate } from "./Components/Add";
import Subtract from "./Components/Subtract";
import Card1 from "./Components/Card1";
import Navbar from "./Components/Navbar";
import Hook1 from "./Components/Hook1";
import Miniusestate from "./Components/Miniusestate";

// let today = new Date();
// const time =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// let date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

// const obj = {
//   img1: "https://picsum.photos/200/300",
//   img2: "https://picsum.photos/200/300",
//   img3: "https://picsum.photos/200/300",
// };
// const name = ["Muhammad Raees", "Software Engineering"];

//   const textcolor = {
//     color: "black",
//   };
//   let curDate = new Date();
//   curDate = curDate.getHours();
//   let greetings = "";
//   if (curDate >= 1 && curDate < 12) {
//     greetings = "Good Morning";
//     textcolor.color = "green";
//   } else if (curDate >= 12 && curDate < 19) {
//     greetings = "Good AfterNon";
//     textcolor.color = "orange";
//   } else {
//     greetings = "Good Night";
//     textcolor.color = "red";
//   }
const textstyle = {
  marginTop: "150px",
  textAlign: "center",
  backgroundColor: "#0af0d1",
  marginRight: "450px",
  marginLeft: "450px",
  border: "2px solid red",
  borderRadius: "50px 20px",
};
//   const back = {
//     backgroundColor: "blue",
//   };

const myobj1 = [
  {
    name: 'Raees',
    role: 'Full stack developer',
    company: 'Hashpotato',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU'
  },
  {
    name: 'Rameez',
    role: 'MERN stack developer',
    company: 'Hashpotato',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU'
  },
  {
    name: 'Adeel',
    role: 'MERN stack developer',
    company: 'Hashpotato',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU'
  },
  {
    n1: 'Home',
    n2: 'About',
    n3: 'Contact'
  }
];

function App() {

  const myCard = (datum) => {
    console.log("flag", datum);
    return (
      <Card1 data={datum} />
    );
  }

  return (
    <>
      <Navbar data={myobj1[3]} />
      {/* <Add/>
      <Subtract/>
      <Multiply/>
      <Divide/> */}
      {/* <div style={textstyle}>
      <h1>Addition is : {add(2,3)}</h1>
      <h1>Subtraction is : {sub(14,7)}</h1>
      <h1>Multiplication is : {mul(3,3)}</h1>
      <h1>Division is :{div(8,4)}</h1>
      </div>
       */}
      {/* <h1 >Hello {`Hello ${name[0]} and i am ${name[1]}`}</h1>
      <h2>Time is = {time}</h2>
      <h2>Date is : {date}</h2>  
      <img src={obj.img1} alt='image'></img>
      <img src={obj.img2} alt='image'></img>
      <img src={obj.img3} alt='image'></img> */}

      {/* <div style={textstyle}>
        <h1>
          Hello Sir, <span style={textcolor}>{greetings}</span>
        </h1>
      </div> */}

      {/* <div className="App1"> 

      <div className="row">
        <div className="column">
          <Card1  data={myobj1[0]}/>
        </div>
        <div className="column">
          <Card1   data={myobj1[1]}/>
        </div>
        <div className="column">
          <Card1  data={myobj1[2]}/>
        </div>
      </div>
      </div>
       {myobj1.map(myCard)} */}

       {/* <Hook1/> */}

       <Miniusestate/>
    </>
  );
}

export default App;
