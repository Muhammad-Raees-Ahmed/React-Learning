import React from 'react'


const design = {

    marginLeft: 'auto',
    marginRight: 'auto'

}
function Miniusestate() {
    return (
        <div className="container bg-light"  style={{marginTop:'180px'}}>
            <div className="mb-3">
            
               <textarea className="form-control"  id="myBox" rows={8}>Enter some text</textarea>
            </div>
            <button className='btn btn-primary'>Convert to Upercase</button>
            
            <button className='btn btn-primary' style={{marginTop:'30px'}}>Convert to Lowercase</button>
        </div>
    )
}

export default Miniusestate