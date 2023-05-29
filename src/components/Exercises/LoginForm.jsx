import React, { useState } from 'react'

const LoginForm = () => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false)

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleButton = () =>{
    if (user === "alejandro" && password === "bootcamp") {
      setLogin(true)
    } 
  }

  if (login) {
    return <p>Welcome back {user} !</p>
  }

  return (
    <div>
    <h2>Login form</h2>
      <label>Username</label>
      <input
        value={user}
        onChange={handleUserChange}></input>
      <label>Password</label>
      <input
        type='password'
        value={password}
        onChange={handlePasswordChange}></input>
      <button onClick={handleButton}>Log in</button>
    </div>
  )
}

export default LoginForm