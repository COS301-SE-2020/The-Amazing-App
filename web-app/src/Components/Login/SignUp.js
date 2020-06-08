import React from 'react';
import loginImg from '../../location.PNG';
import logo from '../../logo.png';
import './login.css'

class SignUp extends React.Component
{
    render()
    {
        return(<div>
        <img src={logo} alt="logo" id="logo"></img>
        <div class = "loginPage" >
            <span class="loginContainer">
                <div class = "logReg">
                    <ul>
                        <li><a href="login.html">Login</a></li>
                        <li><a class="active"  href="register.html">Register</a></li>
                    </ul>
                </div>
                <div>
                Username: <input id="username" type="text" name="username"></input>
                Email address: <input id="email" type="email" name="email"></input>
                Password: <input id="password" type="password" name="password"></input>
                <div id="input">
                    <button id="loginbtn">Register</button>
                    <a href="#">Forgot Password </a>
                </div>
                </div>
            </span> 
        </div>
        <img src={loginImg} alt="girl" id="image"></img>
        </div>
        );
    }
}

export default SignUp;
