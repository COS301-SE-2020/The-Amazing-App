import React from 'react'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"
import { Button, Modal} from 'semantic-ui-react'
import GameMap from "./GameMap";

class MapModal extends React.Component{
    render(){
        return(
            <Modal 
                style={{marginTop: 90, bottom: "auto",left: "auto",right: "auto",position: "relative", height: 540, width: 1300, display: "flex !important", justifyContent: "center", alignItems: "center"}} 
                trigger={<Button style={{backgroundColor: "#2A9D8F", color: "white"}}>Get Location</Button>}
                centered={true}
                className="border"
                size="fullscreen"
                closeIcon = {{ style: { top: 0, right: 0 }, color: 'black', name: 'close' }}
            >
                <Modal.Header closeIcon><Button style={{backgroundColor: "#2A9D8F", color: "white"}}>Get Location</Button></Modal.Header>
                {/*<Modal.Content>
                    <div style={{height: 400}}>
                        <GameMap />
                    </div>
                </Modal.Content>*/}
          </Modal>
        );
    }
}
  

export default MapModal;