import { useRef, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { emailRegex } from "../../constants";
import { signupHandler } from "../services/crud";

export async function loader(){
  if (localStorage.getItem('user-token')) {
    console.log("llll", localStorage.getItem("user-token"));
    return redirect('/today')
  }
  return null
}
export const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: false,
    confirmPassword: false,
  });
  const passwordRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate()

  async function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    if (formData.confirmPassword !== formData.password) {
      passwordRef.current.style.borderColor = "red";
      setError((prevState) => ({ ...prevState, confirmPassword: true }));
      return;
    }
    if (!emailRegex.test(formData.email)) {
      emailRef.current.style.borderColor = "red";
      setError((prevState) => ({ ...prevState, email: true }));
      return;
    }
    setError({ email: false, confirmPassword: false });
    // passwordRef.current.style.borderColor = 'blue'
    // emailRef.current.style.borderColor ='blue'

    const response = await signupHandler({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    console.log("Signup", response);
    if (response.status === 201) {
      navigate('/login')
    }
  }

  function updateFormHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={submitHandler} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              id="name"
              name="username"
              value={formData.username}
              onChange={updateFormHandler}
              placeholder="Justice Abban"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={updateFormHandler}
              placeholder="example@gmail.com"
              required
            />
            {error.email && (
              <span className="text-red-600">Please enter a valid email</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={updateFormHandler}
              placeholder="Password"
              name="password"
              required
            />
            {}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              ref={passwordRef}
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={updateFormHandler}
              name="confirmPassword"
              required
            />
            {error.confirmPassword && (
              <span className="text-red-600">Please confirm your password</span>
            )}
          </div>
          <div className="form-group">
            <p className="form-group">
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
            <button  to={"/today"} className="btn" type="submit">
              {" "}
              sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
