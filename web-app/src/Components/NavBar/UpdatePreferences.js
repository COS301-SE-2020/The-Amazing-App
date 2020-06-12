import React from "react";
import {Header, Modal, Icon, Button } from "semantic-ui-react";



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
                <Button size='medium' style={{fontSize: 13, backgroundColor: "#2A9D8F",color: "white", marginLeft: 50, marginTop: 20, marginBottom: 20}}>
                <i className="users icon"></i>
                    Update Username
                </Button>
            </span>
            <br></br>
            <span style={{margin: 50}}>
                Username: Tshegofatso@gmail.com
                <br></br>
                <Button size='medium' style={{fontSize: 13, backgroundColor: "#2A9D8F",color: "white", marginLeft: 50, marginTop: 20, marginBottom: 20}}>
                <i className="envelope icon"></i>
                    Update Email Address
                </Button>
            </span>
            <br></br>
            <span style={{margin: 50}}>
                Password: ********
                <br></br>
                <Button size='medium' style={{fontSize: 13, backgroundColor: "#2A9D8F",color: "white", marginLeft:50, marginTop: 20, marginBottom: 20}}>
                <i className="lock icon"></i>
                    Update Password
                </Button>
            </span>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default UpdatePreferences;
