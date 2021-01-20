import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;
const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  fetchDoctors = (mapProps, map) => {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    const position = { lat: this.props.lat, lng: this.props.lng };
    const request = {
      location: position,
      radius: 10000,
      types: ["hospital", "health", "doctor", "medical", "clinic"],
    };
    service.nearbySearch(request, (results, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          const infowindow = new google.maps.InfoWindow({
            content: 
            `<p>${results[i].name}</p><p>${results[i].vicinity}</p>`
          });
          let marker = new google.maps.Marker({
            position: results[i].geometry.location,
            map: map,
            title: results[i].name,
            animation: google.maps.Animation.DROP
          });
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
        }
      }
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        onReady={this.fetchDoctors}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API_KEY,
})(MapContainer);
