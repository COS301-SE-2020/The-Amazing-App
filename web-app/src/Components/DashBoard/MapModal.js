import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import GameMap from "./GameMap";

class MapModal extends React.Component{
    render(){
        return(
            <Modal style={{marginTop: 75, marginLeft: 25, height: 600, width: 700, display: "flex", justifyContent: "center", alignItems: "center"}} 
            trigger={<Button style={{backgroundColor: "#2A9D8F", color: "white"}}>Get Location</Button>} 
            basic size='fullscreen'
            >
            <Modal.Content style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <GameMap />
            </Modal.Content>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Button color='green' inverted style={{color: "white"}}>
                    <Icon name='checkmark' /> Select Location
                </Button>
            </div>
          </Modal>
        );
    }
}
  

export default MapModal;