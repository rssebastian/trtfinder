import React, { useEffect, useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyBoQPPRmYzGkwgRvzwDgvChPcFo_6sRY_A');

const Map = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBoQPPRmYzGkwgRvzwDgvChPcFo_6sRY_A',
  });

  const [coordinates, setCoordinates] = useState();
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    let clinicCoordinates = [];
    const getCoordinates = async (clinics) => {
      for (const clinic of clinics) {
        const clinicPromise = await Geocode.fromAddress(clinic.Address);
        clinicCoordinates.push(clinicPromise.results[0].geometry.location);
      }
    };
    console.log(props.clinics.clinics);
    getCoordinates(props.clinics.clinics).then(() => {
      setCoordinates(clinicCoordinates);
      setBusy(false);
    });
    console.log(clinicCoordinates);
  }, [props.clinics.clinics]);

  const center = useMemo(() => ({ lat: 34, lng: -118 }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      {isBusy ? (
        <h1>"Loading..."</h1>
      ) : (
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName='map-container'
        >
          {console.log(coordinates)}
          {coordinates &&
            coordinates.map((coordinate) => {
              console.log(coordinate);
              return <Marker key={coordinate.lat} position={coordinate} />;
            })}
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
