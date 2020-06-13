import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './map4.PNG';
import GameMap from './GameMap';

class AvailableGamesMapComponent extends React.Component{
    render(){
        return(
            <div style={{height: 580, marginRight: 30}} className="border-bottom">
                <div style={{height: 500, marginTop: 12}}>
                    <GameMap />
                </div>
            </div>
            
        )
    }
}

export default AvailableGamesMapComponent;