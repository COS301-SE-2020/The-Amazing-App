import React from "react";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { db } from "../../../../Config/fbConfig";
import Cookies from "js-cookie";
import io from "socket.io-client";

const conect = io('http://192.168.247.253:3000', {
        jsonp: false,
        transports: ['websocket'] // you need to explicitly tell it to use websockets
      });

class MyNotifcations extends React.Component {
  state = {
    notArray: null,
  };

  componentDidMount() {
    console.log("mounted");
      conect.on('join_game', (data) => {
        //console.log("started connection");
        //console.log("data array " + JSON.stringify(data[0].gameName));
          if(data){
            this.setState({notArray: data});
          }
       });
  }
  



  render() {
    conect.emit('notification');
    return (
      <div>
      {this.state.notArray &&
          this.state.notArray.map((game) => {
              let name = JSON.stringify(game.username);
              let gname = JSON.stringify(game.gameName);
              return (
                <div>
                  <Card>
                    <Card.Content>
                          <Card.Header>{name.replace(/^"|"$/g, '')} has joined {gname.replace(/^"|"$/g, '')}</Card.Header>
                    </Card.Content>
                  </Card>
                  <hr />
                </div>
              ); 
          })}
      </div>
    );
  }
}
export default MyNotifcations;

