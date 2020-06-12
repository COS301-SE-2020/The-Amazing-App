import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map(){
    return(
        <GoogleMap defaultZoom={10} defaultCentre={{lat: -25.747868, lng: 28.229271}} />
    );
}

const MapWrapper = withScriptjs(withGoogleMap(Map));

export default function GameMap(){
    return(
        <div className="border" style={{width: 1000, height: 500}}>
            <MapWrapper
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB8fs0LlnaEbIRrT7o0kzLzCsnENboPvr0'}
                loadingElement={<div style={{height: "100%"}} />}
                containerElement={<div style={{height: "100%"}} />}
                mapElement={<div style={{height: "100%"}} />}  
            />
        </div>
    );
}