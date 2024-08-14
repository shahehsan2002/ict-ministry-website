
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const positions = [
    { lat: 23.8103, lng: 90.4125, title: "Dhaka Office" },
    { lat: 22.3569, lng: 91.7832, title: "Chittagong Office" },
    // Add more locations
  ];

  return (
    <MapContainer center={[23.6850, 90.3563]} zoom={7} className="h-96 rounded-lg overflow-hidden shadow-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((pos, index) => (
        <Marker key={index} position={[pos.lat, pos.lng]}>
          <Popup>{pos.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
