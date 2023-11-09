import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        

        const [error, setError] = useState('');
    
        const handleEmailChange = (e) => {
        setUsername(e.target.value);
        };
    
        const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        };
    
        const handleSubmit = (e) => {
        e.preventDefault();
    

        if (username && password) {
            axios.post('https://claraborlu.pythonanywhere.com/accounts/login/',{ username: username , password},{
                headers: {
                    'Authorization': 'Token 3739b90244d5f0a192bdb2c8209f7a6c27127fe8',
                    // 'Content-Type': 'application/json',
                    // 'Accept': 'application/json'
                }
             }
             )
             .then((response)=>{
                if(response.status == 200){
                console.log("use authentication");                                                                              
                }else{
                    console.log("user not authenticated");
                }
        
             })
             .catch(()=>{
                console.log("Failure");
             });

        } else {

            setError(e.target.value)
        }
    
        };

return (
    <>
    <div className="login-container">
<h2>Login</h2>
<form  className="login-form" onSubmit={handleSubmit}>
    <div className="login-group">
        <label htmlFor="username">Username:</label>
        <input
        type="text"
        id="username"
        name='username'
        value={username}
        onChange={handleEmailChange}
        placeholder="Username" required/>
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