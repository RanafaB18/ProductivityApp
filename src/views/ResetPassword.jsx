const Resetpassword = () => {
  return (
    <>
    <div className="signup-container">
    <h2>Reset password</h2>
     <form >
     <div className="form-group">
            <label htmlFor="name">New Password:</label>
            <input type="text" id="name" name="name" placeholder="Enter Your New Password" required />
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input type="confirmPassword" id="comfirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
        </div>
        <div className="form-group">
        <input type="submit" value="reset password" />
    </div>
     </form>
    

    </div>

    </>
  )
}

export default Resetpassword