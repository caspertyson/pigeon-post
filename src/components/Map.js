import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Don't forget to import leaflet's CSS
import '../style/Map.css'
// Optional: You could place these styles in a CSS file
const mapStyle = {
  width: '100vw',
  height: '100vh',
  position: 'absolute'
};

const MapComponent = ({onCloseMap}) => {
  return (
    <div id='mapContainer'>
        <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
        style={mapStyle}
        >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        </MapContainer>
        <div >
            <button onClick={onCloseMap} id="mapBackButton" >Back</button>
        </div>

    </div>
  );
};

export default MapComponent;