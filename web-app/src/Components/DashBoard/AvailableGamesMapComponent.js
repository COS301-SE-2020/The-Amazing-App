import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashHomeMap from './DashHomeMap'
class AvailableGamesMapComponent extends React.Component{
    render(){
        return(
            <div style={{height: "100%", marginRight: 20}}>
                <div style={{height: 480, marginTop: 12}}>
                    <DashHomeMap />
                </div>
            </div>
            
        )
    }
}

export default AvailableGamesMapComponent;