import React, { useContext } from 'react';
import ClinicsContext from '../../store/clinics-context';

function Map() {
  const clinicsCtx = useContext(ClinicsContext);
  const { clinics } = clinicsCtx;
  console.log(clinics);
  return (
    <div>
      {clinics.map((clinic) => {
        return (
          <div key={clinic.Phone}>
            <h1>{clinic.Name}</h1>
            <p>{clinic.Address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Map;
