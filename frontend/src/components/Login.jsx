import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
  let history = useHistory()

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())

    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: params.code,
      })
    }).then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token)
        //history.push("/home")
        //checkToken()
      })
      .catch(err => console.log({ message: err }))
  }, [])

  return (
    <div>

    </div>
  )
}

export default Login
