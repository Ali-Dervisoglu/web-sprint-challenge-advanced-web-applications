import React, { useState } from "react"
import axios from "axios"

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

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

    axios.post("http://localhost:5000/api/login", data)
      .then(result => {
        console.log(result.data)
        localStorage.setItem("token", result.data.token)
        props.history.push("/bubble-page")
      })
      .catch(err => {
        setError(err.response.data.message)
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <input type="text" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </>
  )
};

export default Login;
