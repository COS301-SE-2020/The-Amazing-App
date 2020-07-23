import React from 'react';
import mapboxgl from 'mapbox-gl';
import Geocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './styles.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidGFwZWhuZGhsb3Z1IiwiYSI6ImNrYmV2eTRhdDBwbXUydHA4eTl6cW5neDMifQ.BVjVIq7FUmlnMZJC_BvRDQ';

class GameMap extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      lng: 28.229271,
      lat: -25.747868,
      add: "",
      zoom: 10
    };
  }

  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    const geocoder =  new Geocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      })
      //console.log(geocoder);

      map.addControl(geocoder);

      geocoder.on('result', (e) => {
        //console.log(e.result.place_name);
        this.setState({ add: e.result.place_name});
        this.props.updateSomething(this.state.add);
      });

    map.on('click', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render(){
    return (
        <div style={{height: 450}}>
          <div className='sidebarStyle'>
            <div>Address: {this.state.add}</div>
          </div>
          <div ref={el => this.mapContainer = el} className='mapContainer' />
        </div>
    )
  }
}

export default GameMap;