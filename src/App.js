import { useContext, useEffect, useState } from 'react';
import ClinicsContext from './store/clinics-context';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './components/Map';
import List from './components/List';
import axios from 'axios';

function App() {
  const clinicsCtx = useContext(ClinicsContext);
  return (
    <Container>
      <Row>
        <h1>Fin Vs Fin Coding Challenge</h1>
      </Row>
      <Row>
        <Map clinics={clinicsCtx} />
      </Row>
    </Container>
  );
}

export default App;
