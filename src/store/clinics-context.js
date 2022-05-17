import { createContext, useState } from 'react';
import * as data from '../data/TRTData.json';

const ClinicsContext = createContext({
  clinics: [],
});

export function ClinicsContextProvider(props) {
  const context = {
    clinics: [...data.default],
  };

  return (
    <ClinicsContext.Provider value={context}>
      {props.children}
    </ClinicsContext.Provider>
  );
}

export default ClinicsContext;
