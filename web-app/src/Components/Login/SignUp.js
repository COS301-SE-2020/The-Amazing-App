import React from 'react';
import loginImg from '../../location.PNG';
import logo from '../../logo.png';
import './login.css'
import axios from 'axios';

export default class SignUp extends React.Component {

    state = {username:"",email:"", password:""}

    onFormSubmit=event=>{
        event.preventDefault();
        const data =
            {
                "username": this.state.username,
                "password": this.state.password,
                "email": this.state.email,
                "image": "base64"   
            } 
            axios.post('http://localhost:8000/user/register',data)  
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
                <form onSubmit={this.onFormSubmit}>
                Username: <input id="username" type="text" name="username" onChange={(e)=>this.setState({username:e.target.value})} />
                Email address: <input id="email" type="email" name="email"onChange={(e)=>this.setState({email:e.target.value})}/>
                Password: <input id="password" type="password" name="password" onChange={(e)=>this.setState({password:e.target.value})}/>
                <div id="input">
                    <input type="submit" id="loginbtn" value="Register" />
                    <a href="#">Forgot Password </a>
                </div>
                </form>
                </div>
            </span> 
        </div>
        <img src={loginImg} alt="girl" id="image"></img>
        </div>
        );
    }
}


