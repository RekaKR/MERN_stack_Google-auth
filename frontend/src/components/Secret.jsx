import React, { useState } from 'react'
import '../style.css'

const Secret = () => {
  const [secret, setSecret] = useState('')
  const [res, setRes] = useState(false)

  const submit = () => {
    fetch('http://localhost:3001/secret', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        isIt: true,
        secretDef: secret
      })
    }).then(res => res.json())
      .then(data => setRes(true))
      .catch(err => setRes(false))
  }

  return (
    <div>
      <h1>Ez a Secret.</h1>

      <input type="text" onChange={e => setSecret(e.target.value)} placeholder="Secret" />

      <button disabled={!secret} onClick={() => submit()}>Submit</button>
    </div>
  )
}

export default Secret
