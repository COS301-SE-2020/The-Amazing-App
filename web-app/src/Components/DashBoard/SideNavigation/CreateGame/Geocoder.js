import React from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidGFwZWhuZGhsb3Z1IiwiYSI6ImNrYmV2eTRhdDBwbXUydHA4eTl6cW5neDMifQ.BVjVIq7FUmlnMZJC_BvRDQ';

const e = React.createElement;

class Geocoder extends React.Component{
    
    componentDidMount(){
         const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });
        
        
        geocoder.addTo("#coder")
    }

    render(){
        
        return(
            <div id="coder"></div>
        );
    }

}

export default Geocoder;