import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const ShowSecret = () => {
  const [secrets, setSecrets] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/secret')
      .then(res => res.json())
      .then(data => setSecrets(data))
      .catch(err => setSecrets(null))

  }, [])

  return (
    <div>
      <h1>Ez a Secret.</h1>

      {
        secrets && secrets.map(secret => <p key={uuidv4()}>{secret.secretDef}</p>)
      }
    </div>
  )
}

export default ShowSecret
