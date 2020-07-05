import React from "react";
import { Button, Modal} from "semantic-ui-react";
import MapModal from "./MapModal";
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import GameName from "./GameName";

mapboxgl.accessToken = 'pk.eyJ1IjoidGFwZWhuZGhsb3Z1IiwiYSI6ImNrYmV2eTRhdDBwbXUydHA4eTl6cW5neDMifQ.BVjVIq7FUmlnMZJC_BvRDQ';

const gameObject = {
    question: "",
    answers: [],
    location: ""
  }

const game = {
  name: "",
  description: "",
  properties: []
}

//const gamesArray = [];

class CreateGameModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "",
      gameDesc: "",
      returnVal: "",
      address: "",
      quest: "",
      ans1: "",
      ans2: "",
      ans3: ""
    }
  }

  addToGameProp = (event) =>{
    event.preventDefault();
    gameObject.question = this.state.quest
    gameObject.answers[0] = this.state.ans1
    gameObject.answers[1] = this.state.ans2
    gameObject.answers[2] = this.state.ans2
    gameObject.location = this.state.address

    game.properties.push(gameObject);
    console.log(game)
  }

  updateAddress(value){
    this.setState({
      address: value
    })
  }

  getGameName(value){
    game.name = value.gameName
    game.description = value.descrip
  }

  render() {
    return (
      <Modal
        style={{marginTop: 80 ,top: "auto",left: "auto",right: "auto",position: "relative"}} 
        trigger={
          <Button size='medium' style={{marginTop: 12,fontSize: 13, marginLeft: 10, backgroundColor: "#2A9D8F",color: "white",}}>
            <i className="users icon"></i>
            Create Game
          </Button>
        } centered={false}
        closeIcon
        >
        <Modal.Header>
          Create Game
        </Modal.Header>
        <Modal.Content scrolling>
          <GameName getGameDetails={this.getGameName.bind(this)}/>
          <hr/>
          <Modal.Description style={{marginTop: 10}}>
            <div style={{marginTop: 5}}>
              <div className="ui form" style={{width: 700}}>
                <div className="field">
                    <label>Question 1</label>
                    <input required type="text" value={this.state.quest} placeholder="Type Question..." 
                      onChange={e => this.setState({quest: e.target.value})}
                    />
                  </div>
              </div>
              <div className="ui form" style={{marginTop: 15}}>
                <div className="three fields">
                  <div className="field">
                    <label>Answer 1(Correct Option)</label>
                    <input required type="text" value={this.state.ans1} placeholder="Type Correct Answer..."
                      onChange={e => this.setState({ans1: e.target.value})}
                    />
                  </div>
                  <div className="field">
                    <label>Answer 2</label>
                    <input required type="text" value={this.state.ans2} placeholder="Type Answer..."
                      onChange={e => this.setState({ans2: e.target.value})}
                    />
                  </div>
                  <div className="field">
                    <label>Answer 3</label>
                    <input required type="text" value={this.state.ans3} placeholder="Type Answer..."
                      onChange={e => this.setState({ans3: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <div className="ui form" style={{marginTop: 15}}>
                <MapModal getAddress={this.updateAddress.bind(this)}/>
                <div className="ui form" style={{marginTop: 15, width: 520}}>
                    <div className="field disabled" style={{color: "grey"}}>
                        <input required id="location1" type="text" value={this.state.address} 
                          onChange={e => this.setState({address: this.state.address})}
                          placeholder="Selected Location Will Appear Here..."
                        />
                    </div>
                </div>
              </div>
              <Button style={{backgroundColor: "#2A9D8F", color: "white", marginTop: 10}} onClick={this.addToGameProp}>
                <i className="checkmark icon"></i>
                Save
              </Button>
            </div>
            <hr/>
            <div style={{marginTop: 5}}>
              <div className="ui form" style={{width: 700}}>
                <div className="field">
                    <label>Question 2</label>
                    <input type="text" value={this.state.quest} placeholder="Type Question..."
                      onChange={e => this.setState({quest: e.target.value})}
                    />
                  </div>
              </div>
              <div className="ui form" style={{marginTop: 15}}>
                <div className="three fields">
                  <div className="field">
                    <label>Answer 1(Correct Option)</label>
                    <input type="text" value={this.state.ans1} placeholder="Type Correct Answer..."
                      onChange={e => this.setState({ans1: e.target.value})}
                    />
                  </div>
                  <div className="field">
                    <label>Answer 2</label>
                    <input type="text" value={this.state.ans2} placeholder="Type Answer..."
                      onChange={e => this.setState({ans2: e.target.value})}
                    />
                  </div>
                  <div className="field">
                    <label>Answer 3</label>
                    <input type="text" value={this.state.ans3} placeholder="Type Answer..."
                      onChange={e => this.setState({ans3: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <div className="ui form" style={{marginTop: 15}}>
                <MapModal getAddress={this.updateAddress.bind(this)}/>
                <div className="ui form" style={{marginTop: 15, width: 520}}>
                    <div className="field disabled" style={{color: "grey"}}>
                      <input id="location2" type="text" value={this.state.address} 
                        onChange={e => this.setState({address: this.state.address})}
                        placeholder="Selected Location Will Appear Here..."
                      />
                    </div>
                </div>
              </div>
              <Button style={{backgroundColor: "#2A9D8F", color: "white", marginTop: 10}} onClick={this.addToGameProp}>
                <i className="checkmark icon"></i>
                Save
              </Button>
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
                <MapModal getAddress={this.updateAddress.bind(this)}/>
                <div className="ui form" style={{marginTop: 15, width: 520}}>
                    <div className="field disabled" style={{color: "grey"}}>
                      <input id="location3" type="text" value={this.state.address[2]} placeholder="Selected Location Will Appear Here..."/>
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
