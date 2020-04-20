import React, { Component } from 'react';
import ReactDOM from "react-dom"
import '../App.css';
import {Container, Row, Col, Image} from "react-bootstrap"

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="actualimages">
                <h1>Select one image</h1>
                <Container className="gallery">
                    <Row>
                        <div class="img" style={{backgroundImage:"url('/home/gowtham/Documents/Sem-6/PDP/Lowes/superkart-react-electron/src/images/9vbattery.jpeg')"}}></div>
                        <div class="img" style={{backgroundImage:"url('/home/gowtham/Documents/Sem-6/PDP/Lowes/superkart-react-electron/src/images/fogg.jpeg')"}}></div>
                    </Row>
                    <Row>
                        <div class="img" style={{backgroundImage:"url('/home/gowtham/Documents/Sem-6/PDP/Lowes/superkart-react-electron/src/images/redlabel.jpeg')"}}></div>
                        <div class="img" style={{backgroundImage:"url('/home/gowtham/Documents/Sem-6/PDP/Lowes/superkart-react-electron/src/images/medimix.jpeg')"}}></div>
                    </Row>
                    <Row>
                        <div class="img" style={{backgroundImage:"url('/home/gowtham/Documents/Sem-6/PDP/Lowes/superkart-react-electron/src/images/goodday.jpeg')"}}></div>
                        <div class="img" style={{backgroundImage:"url('/home/gowtham/Documents/Sem-6/PDP/Lowes/superkart-react-electron/src/images/yippee.jpeg')"}}></div>
                    </Row>
                </Container>
            </div>
         );
    }
}
export default Images;