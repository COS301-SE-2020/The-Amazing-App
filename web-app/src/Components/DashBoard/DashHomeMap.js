import React from 'react';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './styles.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidGFwZWhuZGhsb3Z1IiwiYSI6ImNrYmV2eTRhdDBwbXUydHA4eTl6cW5neDMifQ.BVjVIq7FUmlnMZJC_BvRDQ';

class DashHomeMap extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      lng: 28.229271,
      lat: -25.747868,
      zoom: 10
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    let title = document.getElementById('location-title');
    let description = document.getElementById('location-description');

    let locations = [
      {
          'id': '2',
          'title': 'Waterkloof',
          'description':
              "This is where hip-hop was born, where the Yankees became a dynasty and where you can find New York City's leading zoo and botanical garden.",
          'camera': {
              center: [28.2441 ,-25.7792],
              zoom: 14.21,
              pitch: 50
          }
      },
      {
          'id': '3',
          'title': 'Menlo Park',
          'description':
              "No matter how hip it looks on TV, NYC's most populous borough is best experienced in person. Read on to find out about live music, Prospect Park, Nets basketball and more.",
          'camera': {
              center: [28.2600 ,-25.7699],
              bearing: -8.9,
              zoom: 14.68
          }
      },
      {
          'id': '1',
          'title': 'Arcadia',
          'description':
              'Even if you think you know Manhattan—its world-class museums, fine dining and unforgettable views—the borough always has something new and exciting in store.',
          'camera': {
              center: [28.2030 ,-25.7453],
              bearing: 25.3,
              zoom: 14.5
          }
      },
      {
          'id': '4',
          'title': 'Brooklyn',
          'description':
              "Taste food from around the globe, watch Mets baseball and US Open tennis, see cutting-edge art and more in one of the world's most diverse places.",
          'camera': {
              center: [28.2393 ,-25.7646],
              bearing: 36,
              zoom: 14.37
          }
      },
      {
          'id': '5',
          'title': 'Hatfield',
          'description':
              'Take a free ferry ride to an island getaway filled with historic architecture, stunning views, gardens and many family-friendly attractions.',
          'camera': {
              center: [28.238,-25.748],
              bearing: 28.4,
              zoom: 14.64
          }
      }
  ];

  function playback(index) {
    title.textContent = locations[index].title;
    description.textContent = locations[index].description;

    map.flyTo(locations[index].camera);

    map.once('moveend', () => {
        window.setTimeout(function() {
            //move to the next one
            index = index + 1 === locations.length ? 0 : index + 1;
            playback(index);
        }, 3000); //3 seconds.
    });
  }

    title.textContent = locations[locations.length - 1].title;
    description.textContent = locations[locations.length - 1].description;

    map.on('load', () => {
      playback(0);
    });
  }

  render(){
    return (
      <div>
          <div ref = {this.mapContainer} className = "mapContainer" id="mapp"></div>
          <div class="map-overlay-container">
              <div class="map-overlay">
                  <h2 id="location-title"></h2>
                  <p id="location-description"></p>
              </div>
          </div>
      </div>
    )
  }
}

export default DashHomeMap;