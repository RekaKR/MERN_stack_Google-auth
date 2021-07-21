import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to="/home">
        Home
      </Link>

      <button>Login</button>
    </div>
  )
}

export default Header
