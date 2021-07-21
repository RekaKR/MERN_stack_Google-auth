import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ googleSignIn, logout, user }) => {
  return (
    <div className="header">
      <Link to="/">
        Home
      </Link>

      <Link to="/secret">
        Secret
      </Link>

      <Link to="/show-secret">
        Show Secrets
      </Link>

      {
        user
          ? <button onClick={() => logout()}>Logout</button>
          : <button onClick={() => googleSignIn()}>Login</button>
      }

    </div>
  )
}

export default Header
