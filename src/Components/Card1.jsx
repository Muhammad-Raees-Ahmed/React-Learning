import React from 'react'

const spacing={
    marginRight:'10px'
}
function Card1(props) {
  console.log(`name,${props.data[0]}`);
  return (

    <div className="card">
    <img src={props.data.image} alt="John" style={{ width: "100%" }} />
    <h1>{props.data.name}</h1>
    <p className="title">CEO &amp; {props.data.company}</p>
    <p>{props.data.role}</p>

<a href="#" style={spacing}>
      <i className="fa fa-dribbble" />
    </a>
    <a href="#" style={spacing}>
      <i className="fa fa-twitter" />
    </a>
    <a href="#" style={spacing}>
      <i className="fa fa-linkedin" />
    </a>
    <a href="#" >
      <i className="fa fa-facebook" />
    </a>
    
    <p>
      <button>Contact</button>
    </p>
  </div>
  )
}

export default Card1