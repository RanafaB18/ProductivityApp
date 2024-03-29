import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { client, loginHandler } from "../services/crud";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  function updateFormHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username && formData.password) {
      const response = await loginHandler({
        username: formData.username,
        password: formData.password,
      });
      if (response.status === 200) {
        navigate("/today");
        const accessToken = response.data.token
        client.defaults.headers.common[
          "Authorization"
        ] = accessToken ? `Token ${accessToken}` : null;
        localStorage.setItem('user-token', JSON.stringify(response.data.token))
        localStorage.setItem('todo-username', JSON.stringify(formData.username))
      } else {
        setError("User is not authenticated");
      }
    } else {
      setError(e.target.value);
    }
  };

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={updateFormHandler}
              placeholder="patrick"
              required
            />
          </div>

          <div className="login-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={updateFormHandler}
              placeholder="Password"
              required
            />
          </div>

          {error && <span>{error}</span>}
          <div className="login-group">
            <p>Don&apos;t have an account? <Link to={'/'} className="text-[#fa8232]">Sign Up</Link> </p>
          </div>

          <div className="login-group">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
