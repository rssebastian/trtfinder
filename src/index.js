import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClinicsContextProvider } from './store/clinics-context';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClinicsContextProvider>
    <App />
  </ClinicsContextProvider>
);
