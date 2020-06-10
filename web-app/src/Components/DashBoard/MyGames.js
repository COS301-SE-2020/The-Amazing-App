import React from 'react'
import { Icon, Image, Item } from 'semantic-ui-react'

//const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

class MyGames extends React.Component {
    render() {
        return (
    <div>
      <Item.Group>
        <Item>
          <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Detective</Item.Header>
            <Item.Description><p>hello</p></Item.Description>
            <Item.Extra>
              <Icon color='green' name='check' /> 121 Votes
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>cornQuest</Item.Header>
            <Item.Description><p>hello</p></Item.Description>
            <Item.Extra content='121 Votes' />
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Item.Content header='Cute Dog' extra='121 Votes' />
        </Item>
      </Item.Group>
  </div>
);
        }
    }
export default MyGames;