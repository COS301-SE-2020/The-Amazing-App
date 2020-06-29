import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './map4.PNG';
import GameMap from './GameMap';

class AvailableGamesMapComponent extends React.Component{
    render(){
        return(
            <div style={{height: "100%", marginRight: 20}}>
                <div style={{height: 480, marginTop: 12}}>
                    <GameMap />
                </div>
            </div>
            
        )
    }
}

export default AvailableGamesMapComponent;