import React from 'react';
import map from "../Assets/map.jpg";
import logo from '../../logo.png';
import './login.css'
import { Base64 } from 'js-base64';
import axios from 'axios';

export default class SignUp extends React.Component {

    state = {username:"",email:"", password:"",err:""}

    onFormSubmit=event=>{
        event.preventDefault();
        //check if all fields are filled in
        if (this.state.username == "" || this.state.email == "" || this.state.password == "")
        {
            this.setState({err:"Please fill in all the fields!"});
        }
        else {
            //valid email REGEX
            const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            //valid password REGEX
            const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

            //check if email address if valid
            if (regEmail.test(this.state.email) == false){
                this.setState({err:"Please enter a valid email address!"});
            }
            //check if password is valid
            else if (regPassword.test(this.state.password) == false){
                this.setState({err:"Password must contain 1 uppercase letter, 1 lowercase letter,1 number, 1 special character and must be 8 characters long!"});
            }
            else {
                const data =
                    {
                        "username": this.state.username,
                        "password": Base64.encode(this.state.password),//encodo password before saving to database
                        "email": this.state.email,
                        "image": "base64"   
                    } 
                    axios.post('http://localhost:8000/user/register',data)  
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                        if(res.status == 200){
                        
                            //Load the home page 
                        
                        }
                    })
                }
            }
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
                    <p id="error">{this.state.err}</p>
                </div>
                </form>
                </div>
            </span> 
        </div>
        <img src={map} alt="map1" style={{width: 400, marginTop: -130, marginLeft:170}} />
        </div>
        );
    }
}


