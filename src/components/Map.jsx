import { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const API_KEY = import.meta.env.VITE_API_KEY;

const MapContainer = ({ address, handleAddressChange }) => {
  const [coordinates, setCoordinates] = useState(null);

  const containerStyle = {
    width: '500px',
    height: '350px',
  };

  const handleGeocode = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${API_KEY}`
      );
      const data = await response.json();
      if (data.status === 'OK' && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        setCoordinates({ lat: location.lat, lng: location.lng });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (address) {
      handleGeocode();
    }
  }, [address]);

  return (
    <div className='my-5'>
      <input
        type='text'
        value={address}
        onChange={handleAddressChange}
        className='w-full border pl-2'
        placeholder='Enter address...'
      />
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates || { lat: 50.407027725284344, lng: 30.52044047388431 }}
          zoom={coordinates ? 14 : 10}
        >
          {coordinates && <Marker position={coordinates} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
