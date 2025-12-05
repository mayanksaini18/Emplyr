import React from 'react'
import { useState } from 'react';
import { Link} from 'react-router-dom'

const SignUp = () => {

    async function handleSubmit(e) {
    e.preventDefault();
   
  }

    const [form, setForm] = useState({ name: '', email: '', password: '' });

    return (
        <div className="center-screen">
            <div className="card auth-card">
                <h2>Register</h2>
             
                <form onSubmit={handleSubmit} className="form">

                    <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" required />

                    <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" type="email" required />
                    
                    <input value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Password" type="password" required />
                    <button className="btn">Create account</button>
                </form>
                <p className="muted">Already have account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default SignUp
