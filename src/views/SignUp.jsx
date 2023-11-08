import React from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
return (
    <>

<div className="signup-container">
    <h2>Sign Up</h2>
    
    <form  className="signup-form">
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='Justice Abban'required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="justiceabban002@gmail.com" required />
        </div>
    <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="8+ characters" name="password" required/>
    </div>
    <div className="form-group">
        <label htmlFor="password">Confirm Password:</label>
        <input type="password" id="ConfirmPassword" placeholder="ConfirmPassword" name="ConfirmPassword" required/>
    </div>
    <div className="form-group">
    <p className="form-group">Already have an account? <Link to={'/login'}>LogIn</Link></p>
        <input type="submit" value="sign Up" />
    </div>
    </form>
</div>
    </>
)
}
