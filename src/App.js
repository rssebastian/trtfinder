import { useContext } from 'react';
import ClinicsContext from './store/clinics-context';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Map from './components/Map';

function App() {
  const { clinics } = useContext(ClinicsContext);

  return (
    <Container>
      <Row>
        <h1>Fin Vs Fin Coding Challenge</h1>
      </Row>
      <Row>
        <Map clinics={clinics} />
      </Row>
    </Container>
  );
}

export default App;
