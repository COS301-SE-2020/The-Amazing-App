import React from 'react'
import { Icon, Image, Item } from 'semantic-ui-react'
import { Button} from "semantic-ui-react";
import image3 from "./detective.jpg";
import image4 from "./quest.png";
import image5 from "./octopus.png"

class MyGames extends React.Component {
    render() {
        return (
    <div>
      <Item.Group>
        <Item>
          <Item.Image size='small' src={image3} className="ui small image" alt="userImage" />
          <Item.Content>
            <Item.Header as='a'>Detective</Item.Header>
            <Item.Description><p>Play the detective role by solving riddles related to a crime that had recently happened.</p></Item.Description>
            <Button style={{backgroundColor: "#2A9D8F", color: "white", marginTop: 10}}>
                <i className="trash icon"></i>
                Delete
              </Button>
          </Item.Content>

        </Item>
           <hr />
        <Item>
          <Item.Image size='small' src={image4} className="ui small image" alt="userImage"/>

          <Item.Content>
            <Item.Header as='a'>cornQuest</Item.Header>
            <Item.Description><p>Play the interesting cornQuest game by solving mathematical riddles and puzzles in the game.</p></Item.Description>
            <Button style={{backgroundColor: "#2A9D8F", color: "white", marginTop: 10}}>
                <i className="trash icon"></i>
                Delete
              </Button>
          </Item.Content>
        </Item>
        <hr />
        <Item>
          <Item.Image size='small' src={image5}  alt="userImage" />

          <Item.Content>
            <Item.Header as='a'>Octopus</Item.Header>
            <Item.Description><p>Octopus is a game where you need to solve riddles about plants and animals that live in water.</p></Item.Description>
            <Button style={{backgroundColor: "#2A9D8F", color: "white", marginTop: 10}}>
                <i className="trash icon"></i>
                Delete
              </Button>
          </Item.Content>
        </Item>
      </Item.Group>
  </div>
);
        }
    }
export default MyGames;