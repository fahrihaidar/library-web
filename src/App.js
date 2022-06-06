import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: 'admin@example.com',
    password: 'admin',
  }

  const [user, setUSer] = useState ({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log (details);
    
    if (details.email === adminUser.email && details.password === adminUser.password) {
      setUSer({
        name: details.name,
        email: details.email,
      });
    }
    else {
      alert ("Masukkan email : admin@example.com dan password : admin");
    }
  }

  const Logout = () => {
    setUSer({
      name: "",
      email: "",
    });
  } 

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          <h1>Welcome,<span> {user.name} </span></h1>
          <button onClick={Logout}>Logout</button>
    </div>

  ) : (
    <LoginForm Login={Login} error={error}/> 
)}
    </div>
  );
}

export default App;
