import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

interface MapComponentProps {
  coordinates: { lat: number, lng: number, label: string }[];
}

const Map: React.FC<MapComponentProps> = ({ coordinates }) => {
  if (!coordinates || coordinates.length === 0) {
    return null;
  }
  return (
    <MapContainer
      center={[coordinates[0].lat, coordinates[0].lng]} 
      zoom={13} 
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates.map((coord, index) => (
        <Marker
          key={index}
          position={[coord.lat, coord.lng]}
          icon={new L.Icon({ iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png' })}
        >
          <Popup>{coord.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
