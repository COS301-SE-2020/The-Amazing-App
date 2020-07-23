import React from "react";
import {Header, Modal,  Form, Button } from "semantic-ui-react";
import axios from 'axios';
import Cookies from 'js-cookie';



export default class UpdatePreferences extends React.Component {

  constructor(props) {
    super(props)

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.onSubmitUsername = this.onSubmitUsername.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.state = {
      username: '',
      email: '',
      password:'',
      newusername: '',
      newemail: '',
      newpassword: '',
      currentpassword: '',
      err:''
    }
    this.token = Cookies.get('token');
    const instance = axios.get('http://localhost:8000/api/auth/me',{headers: {Authorization : 'Bearer ' + this.token}}
    ).then(res => {
      if(res.status == 200){
        this.state.username = res.data.data.username;
        this.state.email = res.data.data.email;
       // this.state.password = res.data.data.password;
        console.log(this.state.password);
      }
      }).catch(error => {
         console.log(error.message);
      });

    }
  onChangeUserName(e) {
    this.setState({ newusername: e.target.value })

}

onChangeUserEmail(e) {
    this.setState({ newemail: e.target.value })
}

onChangeUserPassword(e) {
    this.setState({ currentpassword: e.target.value })
}

onChangeNewPassword(e) {
  this.setState({ newpassword: e.target.value })
}

  onSubmitUsername(e) {
      e.preventDefault()
     
      this.token = Cookies.get('token');
      const data = {'username': this.state.newusername }
      const instance = axios.put('http://localhost:8000/api/auth/UpdateUsername',data,{headers: {Authorization : 'Bearer ' + this.token}}
      ).then(res => {
        if(res.status == 200){
          this.state.username = this.state.newusername
        }
    }).catch(error => {
        this.setState({username:error.message});
    });
      
  }

  onSubmitEmail(e) {
    e.preventDefault()
    
    this.token = Cookies.get('token');
    const data = {'email': this.state.newemail}
    const instance = axios.put('http://localhost:8000/api/auth/UpdateEmail',data,{headers: {Authorization : 'Bearer ' + this.token}}
    ).then(res => {
      if(res.status == 200){
        this.state.email= this.state.newemail
      }
  }).catch(error => {
      this.setState({email:error.message});
  });
}

  onSubmitPassword(e) {
    e.preventDefault()
  
  const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (regPassword.test(this.state.newpassword) == true){
    this.token = Cookies.get('token');
    const data = {'CurrentPassword': this.state.currentpassword,
                  'NewPassword': this.state.newpassword
    }
    const instance = axios.put('http://localhost:8000/api/auth/ChangePassword',data,{headers: {Authorization : 'Bearer ' + this.token}}
    ).then(res => {
      if(res.status == 200){
        this.state.err= 'Password updated successfully!'
      }
      }).catch(error => {
          this.setState({err:error.message});
      });
  }
  else{
    this.setState({err:"Password must contain 1 uppercase letter, 1 lowercase letter,1 number, 1 special character and must be 8 characters long!"});
  }

  }

    
  render() {
    return (
      <Modal
        style={{marginTop: 100, top: "auto",bottom: "auto",left: "auto",right: "auto",position: "relative",height: 400}} 
        trigger={<Button size='small' style={{marginTop: 5,backgroundColor: "white",color: "black",}}>
        <i className="settings icon" style={{marginRight: 15}}></i>
        Settings
      </Button>
        } centered={false} closeIcon>
        <Modal.Header>Settings</Modal.Header>
        <Modal.Content >
          <Modal.Description>
           <span style={{margin: 50}}>
                Username: {this.state.username}
                <br></br>
                <Modal
                  style={{marginTop: 100, top: "auto",bottom: "auto",left: "auto",right: "auto",position: "relative",height: 200, width: 400}} 
                  trigger ={<Button size='medium' style={{fontSize: 13, backgroundColor: "#2A9D8F",color: "white", marginLeft: 50, marginTop: 20, marginBottom: 20}}>
                <i className="users icon"></i>
                    Update Username
                </Button>} >
                <Modal.Header>Update Username</Modal.Header>
        <Modal.Content >
          <Modal.Description>
          <div>
              <Form size="small" style={{width: 200}} onSubmit={this.onSubmitUsername} >
                <Form.Field
                  label='New Username'
                  control='input'
                  placeholder='New username'
                  value={this.state.newusername} 
                  onChange={this.onChangeUserName}
                />
                 <button className="ui button" style={{backgroundColor: "#2A9D8F", color: "white"}}>Submit</button>
              </Form>
            </div>
           </Modal.Description>
          </Modal.Content>
          </Modal>
            </span>
            <br></br>
            <span style={{margin: 50}}>
                Email: {this.state.email}
                <br></br>
                <Modal 
                style={{marginTop: 100, top: "auto",bottom: "auto",left: "auto",right: "auto",position: "relative",height: 200, width:400}} 
                trigger={<Button size='medium' style={{fontSize: 13, backgroundColor: "#2A9D8F",color: "white", marginLeft: 50, marginTop: 20, marginBottom: 20}}>
                <i className="envelope icon"></i>
                    Update Email Address
                </Button>} >
                <Modal.Header>Update Email Address</Modal.Header>
        <Modal.Content >
          <Modal.Description>
          <div>
              <Form size="small" style={{width: 200}} onSubmit={this.onSubmitEmail} >
                <Form.Field
                  label='New Email Address'
                  control='input'
                  type='email'
                  placeholder='New Email Address'
                  value={this.state.newemail} 
                  onChange={this.onChangeUserEmail}
                />
                 <button className="ui button" style={{backgroundColor: "#2A9D8F", color: "white"}}>Submit</button>
              </Form>
            </div>
           </Modal.Description>
          </Modal.Content>
          </Modal>
            </span>
            <br></br>
            <span style={{margin: 50}}>
                Password: {this.state.err}
                <br></br>
                <Modal 
                style={{marginTop: 100, top: "auto",bottom: "auto",left: "auto",right: "auto",position: "relative",height: 300, width:400}} 
                trigger={<Button size='medium' style={{fontSize: 13, backgroundColor: "#2A9D8F",color: "white", marginLeft:50, marginTop: 20, marginBottom: 20}}>
                <i className="lock icon"></i>
                    Update Password
                </Button>} >
                <Modal.Header>Update Password</Modal.Header>
                <Modal.Content >
                <Modal.Description>
                <div>
                <Form size="small" style={{width: 200}} onSubmit={this.onSubmitPassword}>
                <Form.Field
                  label='Current Password'
                  control='input'
                  type= 'password'
                  placeholder='New password'  
                  value={this.state.currentpassword} 
                  onChange={this.onChangeUserPassword}
                />
                <Form.Field
                  label='New Password'
                  control='input'
                  type= 'password'
                  placeholder='Confirm Password'
                  value={this.state.newpassword} 
                  onChange={this.onChangeNewPassword}
                />
                 <input type="submit" className="ui button" style={{backgroundColor: "#2A9D8F", color: "white"}} value="Submit"/>
              </Form>
            </div>
           </Modal.Description>
          </Modal.Content>
          </Modal>
            </span>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

