import React , { useState }from "react";

let count=0;
function Hook1() {

    // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const pressbtn=(()=>{
    setCount(count+1);
    console.log(count,"clicked");
    });
  return <div style={{marginTop:'200px'}}>
    <div className="container bg-light">
    <div className="col-md-12 text-center">
    <h1>{count}</h1>
      <button type="button" className="btn btn-primary" onClick={pressbtn}>
        Add
      </button>
      
    </div>
  </div>
    </div>;
}

export default Hook1;
