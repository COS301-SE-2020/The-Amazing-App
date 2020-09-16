import React from "react";
import mapboxgl from "mapbox-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "../styles.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGFwZWhuZGhsb3Z1IiwiYSI6ImNrYmV2eTRhdDBwbXUydHA4eTl6cW5neDMifQ.BVjVIq7FUmlnMZJC_BvRDQ";
let slideLat = 0;
let slideLong = 0;

class DashHomeMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 28.229271,
      lat: -25.747868,
      zoom: 10,
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    let title = document.getElementById("location-title");
    let description = document.getElementById("location-description");

    let locations = [
      {
        id: "1",
        title: "Detective",
        description:
          "Play the detective role by solving riddles related to a crime that had recently happened.",
        camera: {
          center: [28.203, -25.7453],
          bearing: 25.3,
          zoom: 14.5,
        },
      },
    ];

    function playback(index) {
      title.textContent = locations[index].title;
      description.textContent = locations[index].description;
      slideLong = locations[index].camera.center[0];
      slideLat = locations[index].camera.center[1];

      let marker = new mapboxgl.Marker()
        .setLngLat([slideLong, slideLat])
        .addTo(map);
      map.flyTo(locations[index].camera);
      map.once("moveend", () => {
        window.setTimeout(function () {
          //move to the next one
          index = index + 1 === locations.length ? 0 : index + 1;
          marker.remove();
          playback(index);
        }, 10000); //3 seconds.
      });
    }

    title.textContent = locations[locations.length - 1].title;
    description.textContent = locations[locations.length - 1].description;

    map.on("load", () => {
      playback(0);
    });
  }

  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="mapContainer" id="mapp"></div>
        <div class="map-overlay-container">
          <div class="map-overlay">
            <h4 id="location-title"></h4>
            <p id="location-description"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default DashHomeMap;
