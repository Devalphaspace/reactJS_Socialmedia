import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="login">
      <div className="card">
        
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" name="name" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="name" placeholder="Name" />
            <input type="password" name="password" placeholder="Password" />
            <button className="btn">Register</button>
          </form>
        </div>
        <div className="left">
          <h1>React Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            consectetur numquam nemo molestias illo non quisquam, ipsum in quae
            totam laudantium iure similique tenetur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button className="btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
