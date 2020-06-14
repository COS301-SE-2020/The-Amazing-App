import React from "react";
import {Header, Modal,  Form, Button } from "semantic-ui-react";



class UpdatePreferences extends React.Component {

    
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
                Username: TheTshegofatso
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
              <Form size="small" style={{width: 200}} >
                <Form.Field
                  label='New Username'
                  control='input'
                  placeholder='New username'  
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
                Username: Tshegofatso@gmail.com
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
              <Form size="small" style={{width: 200}} >
                <Form.Field
                  label='New Email Address'
                  control='input'
                  type='email'
                  placeholder='New Email Address'  
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
                Password: ********
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
                <Form size="small" style={{width: 200}} >
                <Form.Field
                  label='New Password'
                  control='input'
                  type= 'password'
                  placeholder='New password'  
                />
                <Form.Field
                  label='Confirm Password'
                  control='input'
                  type= 'password'
                  placeholder='New Password'  
                />
                 <button className="ui button" style={{backgroundColor: "#2A9D8F", color: "white"}}>Submit</button>
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

export default UpdatePreferences;
