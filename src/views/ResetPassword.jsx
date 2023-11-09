import { useState } from "react"

useState
const Resetpassword = () => {
return (
    <>
    <div className="resetPassword-container">
    <h2>Reset password</h2>
    <form >
    <div className="password-form">
            <label htmlFor="name">New Password:</label>
            <input type="text" id="name" name="name" placeholder="Enter Your New Password" required />
        </div>
        <div className="password-form">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input type="text" id="comfirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
        </div>
        <div className="password-form">
            <button className="btn" type="submit">reset password</button>
    </div>
    </form>
    </div>
    </>
)
}
export default Resetpassword