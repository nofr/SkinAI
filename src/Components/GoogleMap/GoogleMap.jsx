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
        console.log("results= " + results);
        for (const [key, value] of Object.entries(results)) {
          console.log(`${key}: ${value}`);
        }
        //name
        const image =
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
        for (let i = 0; i < results.length; i++) {
          //this.addMarker(map,results[i].geometry.location,results[i].name)
          new google.maps.Marker({
            position: results[i].geometry.location,
            map: map,
            title: results[i].name,
            animation: google.maps.Animation.DROP,
          });
        }
        /*console.log("results= "+ results[0].geometry.location);
                for (const [key, value] of Object.entries(results[0].geometry)) {
                    console.log(`${key}: ${value}`);
                }*/
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
