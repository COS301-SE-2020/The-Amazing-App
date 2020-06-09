import React from 'react';
import loginImg from '../../location.PNG';
import logo from '../../logo.png';
import './login.css'
import axios from 'axios';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        axios.post('http://localhost:4000/users/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', email: '', password: ''})
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
                <form onSubmit={this.onSubmit}>
                Username: <input id="username" type="text" value={this.state.name} onChange={this.onChangeUserName} name="username"/>
                Email address: <input id="email" type="email" value={this.state.email} onChange={this.onChangeUserEmail} name="email"/>
                Password: <input id="password" type="password" value={this.state.password} onChange={this.onChangeUserPassword} name="password"/>
                <div id="input">
                    <input type="submit" id="loginbtn" value="Register"/>
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


