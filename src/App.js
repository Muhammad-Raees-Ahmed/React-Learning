import logo from './logo.svg';
import './App.css';
import React from 'react';
let today = new Date();
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const obj={
  img1:'https://picsum.photos/200/300',
  img2:'https://picsum.photos/200/300',
  img3:'https://picsum.photos/200/300'
}

function App() {
  const name=['Muhammad Raees','Software Engineering'];

 
  const textcolor={
    color:"black" 
  }
  let curDate=new Date();
  curDate=curDate.getHours();
  let greetings='';
  if (curDate>=1 && curDate<12){
greetings="Good Morning";
textcolor.color='green';
  }
  else if (curDate>=12 && curDate<19){
    greetings='Good AfterNon';
    textcolor.color='orange';
  }
  else{
    greetings='Good Night';
    textcolor.color='red';
  }
const textstyle={
  marginTop:'150px',
  textAlign:'center',
  backgroundColor:'#0af0d1',
  marginRight: '450px',
  marginLeft: '450px',
  border: '2px solid red',
  borderRadius: '50px 20px'
};
const back={
  backgroundColor: 'blue',

}
  return (
   <div className='.App'>
      {/* <h1 >Hello {`Hello ${name[0]} and i am ${name[1]}`}</h1>
      <h2>Time is = {time}</h2>
      <h2>Date is : {date}</h2>  
      <img src={obj.img1} alt='image'></img>
      <img src={obj.img2} alt='image'></img>
      <img src={obj.img3} alt='image'></img> */}
      <div style={textstyle}>
      <h1 >
        Hello Sir, <span style={textcolor}>{greetings }</span> 
        </h1>
        </div>
      </div>
  );
}

export default App;
