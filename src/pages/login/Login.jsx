import React, { useContext } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
const navigate = useNavigate()
  
  const {login} = useContext(AuthContext);

  const handleLogin = ()=>{
    login();
    navigate('/')
  }

  return (
    <div className="login">
      <div className="card">
        
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" name="name" placeholder="username" />
            <input type="password" name="password" placeholder="password" />

            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            consectetur numquam nemo molestias illo non quisquam, ipsum in quae
            totam laudantium iure similique tenetur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button className="btn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
