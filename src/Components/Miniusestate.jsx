import React from 'react';
import { useState } from 'react';


const design = {

    marginLeft: 'auto',
    marginRight: 'auto'

}
function Miniusestate() {

const [text,setText]=useState("Enter Text Here");

   const  changetexttoUC=(()=>{
console.log("clicked")
setText(text.toUpperCase());
    });

   const  changetexttoLC=(()=>{
    console.log("clicked")
    setText(text.toLowerCase());
    })
   
    const changehandler=((event)=>{
setText(event.target.value);
    })

    return (
        <div className="container bg-light" style={{ marginTop: '180px' }}>
            <div className="mb-3">

                <textarea className="form-control" id="myBox" rows={8}  value={text} onChange={changehandler}> </textarea>
            </div>
            <button className='btn btn-primary'  onClick={changetexttoUC}>Convert to Upercase</button>

            <button className='btn btn-primary' style={{ marginTop: '30px' }} onClick={changetexttoLC}>Convert to Lowercase</button>
        </div>
    )
}

export default Miniusestate