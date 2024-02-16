import axios from 'axios'
import React, { useState } from 'react'
import "./page.css"

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const registerData = await axios.post(`http://localhost:8000/user`, {
      email: email,
      password: password,
      role: "user"
    })

    setEmail('')
    setPassword('')

    alert("User Registered")

    console.log(registerData.data);

  }

  return (
    <div className="register-section">
      <div className="container">
        <div className="row">
          <div className="register-form">
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1>User Register</h1>

              <p>MCS membership is completely free of charge and open to anyone interested in discovering more about their makwana consultancy services heritage.</p>
              
              <div className="login-email">
                <label>
                  Email address
                </label>
              </div>
              <div className="login-password">

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register