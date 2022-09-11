import React from 'react'



const imgstyle={
    display:' block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'30px',
    width: '50%;'
}

const row={
    textAlign:'center',
/*the same margin which is every button have, it is for small screen, and if you have many buttons.*/
marginLeft:'-20px',
marginRight:'-20px',
marginTop:'30px'
}

const appbutton={
    backgroundColor: '#01AAAD',
    width: '150px',
    margin: '20px',
    display:'inline-block',
    lineHeight: '60px'
}
function Image() {

    
  return (
    <div >
        <img src="https://picsum.photos/250/300" alt="Girl in a jacket"  style={imgstyle}></img>

        <div style={row}>
  <input
    type="submit"
   
    style={appbutton}
    id="btnSearch"
    defaultValue="Aply Filters"
  />
  <input
    type="submit"
   
    style={appbutton}
    id="btnClearSearch"
    defaultValue="Clear Filters"
  />
</div>
    </div>
  )
}

export default Image