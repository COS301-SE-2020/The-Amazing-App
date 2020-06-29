import React from "react";
import { Button, Modal } from "semantic-ui-react";
import MapModal from "./MapModal";
import mapboxgl from 'mapbox-gl';
import Geocoder from "./Geocoder";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const e = React.createElement;
mapboxgl.accessToken = 'pk.eyJ1IjoidGFwZWhuZGhsb3Z1IiwiYSI6ImNrYmV2eTRhdDBwbXUydHA4eTl6cW5neDMifQ.BVjVIq7FUmlnMZJC_BvRDQ';

class CreateGameModal extends React.Component {
  render() {
    return (
      <Modal
        style={{marginTop: 80 ,top: "auto",bottom: "auto",left: "auto",right: "auto",position: "relative",height: 1000}} 
        trigger={
          <Button size='medium' style={{marginTop: 12,fontSize: 13, marginLeft: 10, backgroundColor: "#2A9D8F",color: "white",}}>
            <i className="users icon"></i>
            Create Game
          </Button>
        } centered={false} closeIcon>
        <Modal.Header>Game Questions</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div style={{marginTop: 5}}>
              <div className="ui form" style={{width: 700}}>
                <div className="field">
                    <label>Question 1</label>
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
              <div className="ui form" style={{marginTop: 15}}>
                <MapModal />
                <div className="ui form" style={{marginTop: 15, width: 400}}>
                    <div className="field disabled" style={{color: "grey"}}>
                      <input id="location" type="text" placeholder="Selected Location Will Appear Here..."/>
                    </div>
                </div>
              </div>
            </div>
            <hr/>
            <div style={{marginTop: 5}}>
              <div className="ui form" style={{width: 700}}>
                <div className="field">
                    <label>Question 2</label>
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
              <div className="ui form" style={{marginTop: 15}}>
                <MapModal />
                <div className="ui form" style={{marginTop: 15, width: 400}}>
                    <div className="field disabled" style={{color: "grey"}}>
                      <input id="location" type="text" placeholder="Selected Location Will Appear Here..."/>
                    </div>
                </div>
              </div>
            </div>
            <hr/>
            <div style={{marginTop: 5}}>
              <div className="ui form" style={{width: 700}}>
                <div className="field">
                    <label>Question 3</label>
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
              <div className="ui form" style={{marginTop: 15}}>
                <MapModal />
                <div className="ui form" style={{marginTop: 15, width: 400}}>
                    <div className="field disabled" style={{color: "grey"}}>
                      <input id="location" type="text" placeholder="Selected Location Will Appear Here..."/>
                    </div>
                </div>
              </div>
            </div>
            <hr/>
            <button className="ui button" style={{backgroundColor: "#2A9D8F", color: "white"}}>Submit Game</button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default CreateGameModal;
