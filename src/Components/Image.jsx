import React from 'react'


const imgstyle={
    display:' block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'30px',
    width: '50%;'
}
function Image() {

    
  return (
    <div >
        <img src="https://picsum.photos/250/300" alt="Girl in a jacket"  style={imgstyle}></img>
    </div>
  )
}

export default Image