import React from 'react'
import { Icon, Image, Item } from 'semantic-ui-react'
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
            <Item.Description><p>Duration: 00:10:00</p></Item.Description>
            <Item.Extra>
            <i className="trophy icon" /> completed 121 
            </Item.Extra>
           
          </Item.Content>

        </Item>
           <hr />
        <Item>
          <Item.Image size='small' src={image4} className="ui small image" alt="userImage"/>

          <Item.Content>
            <Item.Header as='a'>cornQuest</Item.Header>
            <Item.Description><p>Duration: 00:20:00</p></Item.Description>
            <Item.Extra>
            <i className="trophy icon" />completed 100 
            </Item.Extra>
          </Item.Content>
        </Item>
        <hr />
        <Item>
          <Item.Image size='small' src={image5}  alt="userImage" />

          <Item.Content>
            <Item.Header as='a'>Octopus</Item.Header>
            <Item.Description><p>Duration: 00:15:00</p></Item.Description>
            <Item.Extra>
              <i className="trophy icon" /> completed 50
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
  </div>
);
        }
    }
export default MyGames;