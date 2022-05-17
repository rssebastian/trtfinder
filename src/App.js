import { useEffect, useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './components/Map';
import List from './components/List';
import axios from 'axios';

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get('https://trtfinder-6f7e0-default-rtdb.firebaseio.com/')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setIsLoading(false);
  //       setData(data);
  //     });
  // }, []);

  return (
    <Container>
      <Row>
        <h1>Fin Vs Fin Coding Challenge</h1>
      </Row>
      <Row>
        <Map />
      </Row>
    </Container>
  );
}

export default App;
