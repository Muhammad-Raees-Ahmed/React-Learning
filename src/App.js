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
  return (
   <div className='App'>
      <h1 style={{color:'GrayText'}}>Hello {`Hello ${name[0]} and i am ${name[1]}`}</h1>
      <h2>Time is = {time}</h2>
      <h2>Date is = {date}</h2>  
      <img src={obj.img1} alt='image'></img>
      <img src={obj.img2} alt='image'></img>
      <img src={obj.img3} alt='image'></img>
      </div>
  );
}

export default App;
