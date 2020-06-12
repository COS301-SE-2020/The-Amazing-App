import React from "react";
import { Button, Modal } from "semantic-ui-react";
import {Form} from "semantic-ui-react";
import MapModal from "./MapModal";

class CreateGameModal extends React.Component {
  render() {
    return (
      <Modal
        style={{marginTop: 100 ,top: "auto",bottom: "auto",left: "auto",right: "auto",position: "relative",height: 700}} 
        trigger={
          <Button size='medium' style={{marginTop: 12,fontSize: 13, marginLeft: 10, backgroundColor: "#2A9D8F",color: "white",}}>
            <i className="users icon"></i>
            Create Game
          </Button>
        } centered={false} closeIcon>
        <Modal.Header>Create Game</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div>
              <Form size="small" style={{width: 200}} >
                <Form.Field
                  label='Game Name'
                  control='input'
                  placeholder='Game name...'  
                />
              </Form>
            </div>
            <div style={{marginTop: 15}}>
              <div className="ui form" style={{width: 700}}>
                <div className="field">
                    <label>Game Question</label>
                    <input type="text" placeholder="Type Question..."/>
                  </div>
              </div>
              <div className="ui form" style={{marginTop: 15}}>
                <div className="three fields">
                  <div className="field">
                    <label>Answer 1(Correct Option)</label>
                    <input type="text" placeholder="Type Correct Answer..."/>
                  </div>
                  <div className="field">
                    <label>Answer 2</label>
                    <input type="text" placeholder="Type Answer..."/>
                  </div>
                  <div className="field">
                    <label>Answer 3</label>
                    <input type="text" placeholder="Type Answer..."/>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui form" style={{marginTop: 15}}>
              <MapModal />
              <div className="ui form" style={{marginTop: 15}}>
                <div className="three fields">
                  <div className="field">
                    <label>Location Name</label>
                    <input type="text" placeholder="City or Area..."/>
                  </div>
                  <div className="field">
                    <label>Latitude</label>
                    <input type="text" placeholder="latitude..."/>
                  </div>
                  <div className="field">
                    <label>Longitude</label>
                    <input type="text" placeholder="longitude..."/>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui button" style={{backgroundColor: "#2A9D8F", color: "white"}}>Submit</button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default CreateGameModal;
