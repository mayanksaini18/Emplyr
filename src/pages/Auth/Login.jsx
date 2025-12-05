import React from 'react'
import { Link} from 'react-router-dom'
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="center-screen">
            <div className="card auth-card">
                <h2>Login</h2>

                <form onSubmit={handleSubmit} className="form">

                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
                    <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" required />
                    <button className="btn">Login</button>
                </form>
                <p className="muted">Don't have an account? <Link to="./signup">Register</Link></p>
            </div>
        </div>
    )
}

export default Login
