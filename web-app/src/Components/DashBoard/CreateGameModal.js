import React from "react";
import { Button, Modal } from "semantic-ui-react";
import {Form} from "semantic-ui-react";
import GameMap from "./GameMap";

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
              <div class="ui form" style={{width: 500}}>
                <div class="field">
                    <label>Game Question</label>
                    <input type="text" placeholder="Type Question..."/>
                  </div>
              </div>
              <div class="ui form" style={{marginTop: 15}}>
                <div class="three fields">
                  <div class="field">
                    <label>Answer 1</label>
                    <input type="text" placeholder="Type Answer..."/>
                  </div>
                  <div class="field">
                    <label>Answer 2</label>
                    <input type="text" placeholder="Type Answer..."/>
                  </div>
                  <div class="field">
                    <label>Answer 3</label>
                    <input type="text" placeholder="Type Answer..."/>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui form" style={{marginTop: 15}}>
              <h6>Location</h6>
              <div class="ui form" style={{marginTop: 15}}>
                <div class="three fields">
                  <div class="field">
                    <label>Location Name</label>
                    <input type="text" placeholder="City or Area..."/>
                  </div>
                  <div class="field">
                    <label>Latitude</label>
                    <input type="text" placeholder="lat..."/>
                  </div>
                  <div class="field">
                    <label>Longitude</label>
                    <input type="text" placeholder="long..."/>
                  </div>
                </div>
              </div>
            </div>
            <button class="ui button" style={{backgroundColor: "#2A9D8F", color: "white"}}>Submit</button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default CreateGameModal;
