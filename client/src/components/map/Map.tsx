import React from "react";
import GoogleMapReact from 'google-map-react';
import "./map.css";
import RoomIcon from '@mui/icons-material/Room'; // MUI location icon instead of Iconify

interface Location {
  address: string;
  lat: number;
  lng: number;
}

const location: Location = {
  address: "1600 Amphitheatre Parkway, Mountain View, California.",
  lat: 37.42216,
  lng: -122.08427,
};

interface LocationPinProps {
  lat: number;
  lng: number;
  text: string;
}

const LocationPin: React.FC<LocationPinProps> = ({ text }) => (
  <div className="pin">
    <RoomIcon className="pin-icon" /> {/* Replacing with MUI's RoomIcon */}
    <p className="pin-text">{text}</p>
  </div>
);

const Map: React.FC = () => {
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact
           bootstrapURLKeys={{ key: "AIzaSyCUlZIr1YkqmKD3Kvu8qFURaIviDn2YbjU" }}
          defaultCenter={location}
          defaultZoom={17}>
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;