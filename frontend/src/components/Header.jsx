import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ googleSignIn, logout, user }) => {
  return (
    <div className="header">
      <Link to="/home">
        Home
      </Link>

      {
        user
          ? <button onClick={() => googleSignIn()}>Login</button>
          : <button onClick={() => logout()}>Logout</button>
      }

    </div>
  )
}

export default Header
