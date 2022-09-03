import React from "react";


const pressbtn=(()=>{
    num+=1;
    console.log(num,"clicked");
});

let num=0;
function Hook1() {
  return <div style={{marginTop:'200px'}}>



    <div className="container bg-light">
    <div className="col-md-12 text-center">
    <h1>{num}</h1>
      <button type="button" className="btn btn-primary" onClick={pressbtn}>
        Add
      </button>
      
    </div>
  </div>
    </div>;
}

export default Hook1;
