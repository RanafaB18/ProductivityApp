import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../services/crud";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate()
  const [error, setError] = useState("");
  function updateFormHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username && formData.password) {
      axios
        .post(
          "https://claraborlu.pythonanywhere.com/accounts/login/",
          { username: formData.username, password: formData.password },
          // {
          //   headers: {
          //     Authorization: "Token 3739b90244d5f0a192bdb2c8209f7a6c27127fe8",
          //     // 'Content-Type': 'application/json',
          //     // 'Accept': 'application/json'
          //   },
          // }

        )
        .then((response) => {
          if (response.status == 200) {
            navigate("/today")
            client.defaults.headers.common['Authorization'] = `Token ${response.data.token}`
            localStorage.setItem('token', response.data.token)
            console.log("Client", client.defaults.headers.common['Authorization'], response);
          } else {
            console.log("user not authenticated");
          }
        })
        .catch(() => {
          console.log("Failure");
        });
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
            <p className="form-group">
              Forgotten Your Password?{" "}
              <Link to="/reset-password">Reset Password</Link>
            </p>
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
