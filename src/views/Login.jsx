import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
return (
    <>
    <div className="login-container">
<h2>Login</h2>
<form  className="login-form">
    <div className="login-group">
    <label htmlFor="email">Email Address:</label>
    <input type="email" id="email" name="email" placeholder="justiceabban002@gmail.com" required/>
    </div>
    <div className="login-group">
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="8+ characters" required/>
    </div>
    <div className="login-group">
    <p className="form-group">Forgotten Your Password? <Link to='/Reset-Password'>Reset Password</Link></p>
        <input type="submit" value="LogIn" />
    </div>
</form>
</div>
    </>
)
}

export default Login