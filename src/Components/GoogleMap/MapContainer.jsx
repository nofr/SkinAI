import React from "react";
import Map from "../GoogleMap/GoogleMap";
import "./Map.css";
class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: false,
      lat: "",
      lng: "",
      doctors: "",
    };
  }
  componentDidMount() {
    this.getPosition();
    console.log("hello");
  }
  getPosition = () => {
    console.log("get position");
    if (navigator.geolocation) {
      console.log("get position If");
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.posError
      ); // Passing in a success callback and an error callback fn
    } else {
      console.log("get position else");
      alert("Sorry, Geolocation is not supported by this browser."); // Alert is browser does not support geolocation
    }
  };
  // Geolocation error callback fn. Query permissions to check if the error occured due to user not allowing location to be shared
  posError = () => {
    console.log("posError");
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((res) => {
        if (res.state === "denied") {
          alert(
            "Enable location permissions for this website in your browser settings."
          );
        }
      });
    } else {
      alert(
        "Unable to access your location. You can continue by submitting location manually."
      ); // Obtaining Lat/long from address necessary
    }
  };
  // Geolocation success callback fn
  showPosition = async (position) => {
    console.log("showposition");
    let lat = position.coords.latitude; // You have obtained latitude coordinate!
    let long = position.coords.longitude; // You have obtained longitude coordinate!
    console.log("Lat= " + lat);
    console.log("long= " + long);
    //getmarkers
    //const doctors =
    this.setState({ lat: lat, lng: long, position: true });
    //props.set_lat(lat) // Using dispatch to modify lat store state
    //props.set_long(long) // Using dispatch to modify long store state
    //convertToAddress(lat, long) // Will convert lat/long to City, State, & Zip code
  };
  render() {
    return (
      <div className="mapContainer">
        {this.state.position && (
          <Map lat={this.state.lat} lng={this.state.lng} />
        )}
      </div>
    );
  }
}
export default MapContainer;
