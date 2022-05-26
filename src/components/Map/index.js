import React, { useEffect, useMemo, useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_API_KEY);
const Map = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [coordinates, setCoordinates] = useState();
  const [currentClinic, setCurrentClinic] = useState(null);
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    let clinicCoordinates = [];
    const getCoordinates = async (clinics) => {
      for (const clinic of clinics) {
        const clinicPromise = await Geocode.fromAddress(clinic.Address);
        clinicCoordinates.push(clinicPromise.results[0].geometry.location);
      }
    };
    getCoordinates(props.clinics).then(() => {
      setCoordinates(clinicCoordinates);
      setBusy(false);
    });
  }, [props.clinics]);

  const center = useMemo(() => ({ lat: 34.06656545, lng: -118.42574034 }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      {isBusy ? (
        <h1>"Loading..."</h1>
      ) : (
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName='map-container'
        >
          {coordinates &&
            coordinates.map((coordinate, index) => {
              return (
                <Marker
                  key={index}
                  position={coordinate}
                  onClick={() => setCurrentClinic(index)}
                />
              );
            })}
          {currentClinic != null && (
            <InfoWindow
              position={coordinates[currentClinic]}
              onCloseClick={() => setCurrentClinic(null)}
            >
              <div>
                <h6>{props.clinics[currentClinic].Name}</h6>
                <p>Address: {props.clinics[currentClinic].Address}</p>
                <p>Phone Number: {props.clinics[currentClinic].Phone}</p>
                <p>Website: {props.clinics[currentClinic].Website}</p>
                <p>
                  Google Rating (out of 5):{' '}
                  {props.clinics[currentClinic]['Google Rating (out of 5)']}
                </p>
                <p>
                  Number of reviews:{' '}
                  {props.clinics[currentClinic]['Number of reviews']}
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
