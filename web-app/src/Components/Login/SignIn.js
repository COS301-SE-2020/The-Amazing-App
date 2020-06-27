import React from 'react';
import map from "../Assets/map.jpg";
import logo from '../../logo.png';
import axios from 'axios';
import './login.css'

class SignIn extends React.Component
{

    state = {Username:'',pasword:''}
    onFormSubmit=event=>{
        event.preventDefault();
        const data =
            {
                "username": this.state.username,
                "password": this.state.password,
                 
            } 
            axios.post('http://localhost:8000/user/login',data)  
            .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.status == 200){
                /*
                    Load the home page 
                */
                }
              })
    }

    render()
    {
        return (<div>
            <img src={logo} alt="logo" id="logo"></img>
            <div class = "loginPage" >
                <span class="loginContainer">
                    <div class = "logReg">
                        <ul>
                            <li><a class="active" href="login.html">Login</a></li>
                            <li><a  href="register.html">Register</a></li>
                        </ul>
                    </div>
                    <form onSubmit={this.onFormSubmit}>
                    Username: <input id="username" type="text" name="username"  onChange={(e)=>this.setState({username:e.target.value})}></input>
                    Password: <input id="password" type="password" name="password"  onChange={(e)=>this.setState({password:e.target.value})}></input>
                    <div id="input">
                        <button id="loginbtn">Login</button>
                        <a href="#">Forgot Password </a>
                    </div>
                </form>
                </span> 
            </div>
            <img src={map} alt="map1" style={{width: 400, marginTop: -130, marginLeft:170}} />
            </div>);
    }
}

export default SignIn;
