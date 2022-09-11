import React from 'react'

function Navbar1(props) {
  return (
    <div>
        <nav>
    <div className="nav-wrapper">
    <a href="#" className="brand-logo right">
      Logo
    </a>
    <ul id="nav-mobile" className="left hide-on-med-and-down">
      <li>
        <a href="sass.html">{props.value.n1}</a>
      </li>
      <li>
        <a href="badges.html">{props.value.n2}</a>
      </li>
      <li>
        <a href="collapsible.html">{props.value.n3}</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar1