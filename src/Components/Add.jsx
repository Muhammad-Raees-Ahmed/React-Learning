import React from 'react'

const First = () => {
  return (
    <div>
         <h1>2+2= ?</h1>
         <h1>Addition is : {2+2} </h1>
    </div>
   
  )
}
const add=((num1,num2)=>{
  return num1+num2;
});
const sub=((num1,num2)=>{
  return num1-num2;
});
const mul=((num1,num2)=>{
  return num1*num2;
});
const div=((num1,num2)=>{
  return num1/num2;
});

export default First

export {add,sub,mul,div};

