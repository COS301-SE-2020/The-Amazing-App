import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './map1.PNG';

class AvailableGamesMapComponent extends React.Component{
    render(){
        return(
            <div>
                <h3 style={{textAlign: "center", color: "#FF4500", fontWeight: "bold", marginTop: 12, marginBottom: 12}}>
                    Available Games
                    <i className="map marker alternate icon"></i>
                </h3>
                <img src={image} className="ui fluid image" alt="map1" />
            </div>
            
        )
    }
}

export default AvailableGamesMapComponent;