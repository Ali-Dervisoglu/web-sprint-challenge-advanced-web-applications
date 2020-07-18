import React, { useState } from "react"
import axiosWithAuth from "../utils/axiosWithAuth.js";

const Login = (props) => {

  console.log(props);
  const [error, setError] = useState()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth().post("http://localhost:5000/api/login", data)
      .then(result => {
        console.log(result.data)
        localStorage.setItem("token", result.data.payload)
        props.history.push("/bubble-page")
      })
      .catch(err => {
        setError(err.response.data.message)
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <input type="text" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <nav>
        <ul>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </nav>
    </>
  )
};

export default Login;
