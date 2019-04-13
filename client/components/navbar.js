import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div className="center-align navblock">
    <h1>SalarySim</h1>
    <nav>
      <Link to="/home">Home</Link>
    </nav>
    <hr />
  </div>
)

export default Navbar