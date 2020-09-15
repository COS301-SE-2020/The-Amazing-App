import React from "react";
import { Icon, Image, Item } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import image3 from "../../../../Assets/detective.jpg";
import image4 from "../../../../Assets/quest.png";
import image5 from "../../../../Assets/octopus.png";

const GameSummary = ({ project }) => {
  return (
    <div className="gameSummary">
      <Item.Group>
        <Item>
          <Item.Image
            size="small"
            src={image3}
            className="ui small image"
            alt="userImage"
          />
          <Item.Content>
            <Item.Header as="a">game</Item.Header>
            <Item.Description>
              <p>
                Play the detective role by solving riddles related to a crime
                that had recently happened.
              </p>
            </Item.Description>
            <Button
              style={{
                backgroundColor: "#2A9D8F",
                color: "white",
                marginTop: 10,
              }}
            >
              <i className="trash icon"></i>
              Delete
            </Button>
          </Item.Content>
        </Item>
        <hr />
        <Item>
          <Item.Image size="small" src={image5} alt="userImage" />

          <Item.Content>
            <Item.Header as="a">Octopus</Item.Header>
            <Item.Description>
              <p>
                Octopus is a game where you need to solve riddles about plants
                and animals that live in water.
              </p>
            </Item.Description>
            <Button
              style={{
                backgroundColor: "#2A9D8F",
                color: "white",
                marginTop: 10,
              }}
            >
              <i className="trash icon"></i>
              Delete
            </Button>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};
export default GameSummary;
