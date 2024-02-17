import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./page.css"
import { signInWithPopup } from 'firebase/auth';
import { auth, google } from '../firebase';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            let googleAuth = await signInWithPopup(auth,google)

        } catch (err) {
            console.log(err);
            return false
        }

        alert("Google Authentication successfully")

        setEmail('')
        setPassword('')

    }

    return (
        <div className="login-section">
            <div className="container">
                <div className="row">
                    <div className="login-form">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <h1>Login to mcs</h1>

                            <p>MCS membership is completely free of charge and open to anyone interested in discovering more about their makwana consultancy services heritage.</p>

                            <div className="register-link">
                                <h3>Not signed up to MCS? <a href="">Sign up Here</a></h3>
                            </div>

                            <div className="login-email">
                                <label>
                                    Email address
                                </label>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="login-password">
                                <label>
                                    Password
                                </label>
                                <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>
                            <div className="btn">
                                <button type='submit'>login with google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login