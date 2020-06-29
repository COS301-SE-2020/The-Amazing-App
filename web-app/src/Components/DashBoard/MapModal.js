import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import GameMap from "./GameMap";

class MapModal extends React.Component{
    render(){
        return(
            <Modal style={{marginTop: 90, marginLeft: 25, height: 550, width: 700, display: "flex", justifyContent: "center", alignItems: "center"}} 
            trigger={<Button style={{backgroundColor: "#2A9D8F", color: "white"}}>Get Location</Button>} 
            basic size='fullscreen'
            closeIcon
            >
            <div>
                <GameMap />
            </div>
          </Modal>
        );
    }
}
  

export default MapModal;