import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
    
        const handleEmailChange = (e) => {
        setEmail(e.target.value);
        };
    
        const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        };
    
        const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!email) {
            setError(console.log('Email is required'));
            return;
        }
    
        if (!password) {
            setError(console.log('Password is required'));
            return;
        }
    
          // Perform login logic here
        console.log('Login successful!');
        };

return (
    <>
    <div className="login-container">
<h2>Login</h2>
<form  className="login-form" onSubmit={handleSubmit}>
    <div className="login-group">
        <label htmlFor="email">Email Address:</label>
        <input
        type="email"
        id="email"
        name='email'
        value={email}
        onChange={handleEmailChange}
        placeholder="justiceabban002@gmail.com" required/>
    </div>

    <div className="login-group">
        <label htmlFor="password">Password:</label>
        <input
        type="password"
        id="password"
        name='password'
        value={password}
        onChange={handlePasswordChange}
        placeholder="8+ characters" required/>
    </div>

    {error && <span>{error}</span>}

    <div className="login-group">
        <p className="form-group">Forgotten Your Password? <Link to='/Reset-Password'>Reset Password</Link></p>
        <button className='btn' type="submit">Login</button>
    </div>
</form>
</div>
    </>
)
}

export default Login