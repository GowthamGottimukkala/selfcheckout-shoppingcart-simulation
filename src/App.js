import React from 'react';
import './App.css';
import Bill from './Components/Bill'
import Barcode from './Components/Barcode'
import Images from './Components/Images'
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';   

function App() {
  return (
  <Container fluid>
    <Row>
      <Col xs={3} className="barcode">
          <Barcode/>
      </Col>
      <Col className="images">
          <Images/>
      </Col>
      <Col xs={3} className="bill">
          <Bill/>
      </Col>
    </Row>
  </Container>
  );
}

export default App;
