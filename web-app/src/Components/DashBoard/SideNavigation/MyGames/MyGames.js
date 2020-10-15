import React from "react";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { db } from "../../../../Config/fbConfig";
import Cookies from "js-cookie";

class MyGames extends React.Component {
  state = {
    games: null,
  };

  deleteDoc(name) {
    //event.preventDefault();
    alert("Do you want to delete this game ?")
    const doc_query = db.collection("projects").where("name", "==", name);
    doc_query.get().then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        if (doc.data().user_id == Cookies.get("userid")) {
          doc.ref.delete();
        }
      });
    });
  }

  componentDidMount() {
    db.collection("projects")
      .get()
      .then((snapshot) => {
        const games = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.user_id == Cookies.get("userid")) {
            console.log(doc.data().properties[0].location);
            games.push(data);
          }
        });
        this.setState({ games: games });
        //console.log(snapshot.docs[1]._document.proto.fields.location[0]);
        //console.log(games[0].properties[0].location);
      });
  }

  componentWillUpdate() {
    db.collection("projects")
      .get()
      .then((snapshot) => {
        const games = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.user_id == Cookies.get("userid")) {
            //console.log(doc.data());
            games.push(data);
          }
          //games.push(data);
        });
        this.setState({ games: games });
        //console.log(snapshot.docs[1]._document.proto.fields.location[0]);
        //console.log(games[0].properties[0].location);
      });
  }

  render() {
    return (
      <div>
        {this.state.games &&
          this.state.games.map((game) => {
            return (
              <div>
                <Card>
                  <Card.Content>
                    <Card.Header>{game.name}</Card.Header>
                    <Card.Description>{game.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui buttons">
                      <Button
                        basic
                        color="red"
                        onClick={() => this.deleteDoc(game.name)}
                      >
                        Delete Game
                      </Button>
                    </div>
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
export default MyGames;
