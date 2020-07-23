import React from 'react';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavComponent from './SideNavComponent'
import Footer from '../NavBar/Footer'
import Navbar from '../NavBar/navBar'
import axios from 'axios';
import Cookies from 'js-cookie';
import SignIn from '../Login/SignIn';

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            success: ""
            }
        }

        componentDidMount(){
            this.token = Cookies.get('token');
            const instance = axios.get('http://localhost:8000/api/auth/me',{headers: {Authorization : 'Bearer ' + this.token}}
            ).then(res => {
            if(res.status == 200){
              this.setState({auth: true});
              this.setState({success: "found"});
            }
            }).catch(error => {
                console.log(error.message);
                this.setState({success: "notfound"});
            });
        }

    render(){
        const myStyle = {
            height: "200px",
            width: "400px",
            position: "fixed",
            top: "50%",
            left: "50%",
            marginTop: "-100px",
            marginLeft: "-200px"
        };

        if(this.state.success == ""){
            return <div style={myStyle} class="ui active centered inline massive loader"></div>
        }

        else{
            if(this.state.auth){
                return(
                    <div>
                        <Navbar/>
                        <SideNavComponent/>
                        <Footer/>
                    </div>
                );
            }

            else{
                return(
                    <div>
                        <SignIn/>
                    </div>
                );
            }
        }
    }
}

export default App;