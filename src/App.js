import React, {Component} from 'react';
import './App.css';
import Bill from './Components/Bill'
import Barcode from './Components/Barcode'
import Images from './Components/Images'
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';   

class App extends Component {
  constructor(props) {  
    super(props);
    this.handleBarcodeClick = this.handleBarcodeClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.state = { 
      barcode : [{id:'fogg',name:'Fogg bodyspray',display:true},{id:'medimix',name:'Medimix soap',display:true}, {id:'hw',name:'9v Battery hw',display:true}, {id:"redlabel",name:'Redlabel Tea powder',display:true}, {id:"goodday",name:'Goodday buttercookies',display:true}, {id:"yippe",name:'Yippee noodles',display:true}],
      bill : [],
      images : [0,1,2,3,4,5],
      barcodeSelectedItem : "",
      imageSelected : "",
     }
  }

  handleBarcodeClick(e){
    this.setState({
      barcodeSelectedItem : e.currentTarget.textContent
    },function () {
      console.log(this.state.barcodeSelectedItem);
  })
  }

  handleImageClick(e){
    console.log(e.target)
  }

  handleSubmitClick(){
    // here we use the state.selecteditem and image received from <Images/> to perform validation using AWS and weights then
    // 1. Display "Success" or "Place again" and hide Images Component
    // 2. If "Success" Add state.bill with validated item with the help of csv
    // 3. If "Success" Update state.barcode.display for all items according to the images available
    // 4. If "Success" Call the function to list all the available images having the items present in the bill (and state.selectedItem is not needed
    //    because to show fraud detection cases) ,then update state.image and unhide Images component
  }

  render() { 
    return ( 
      <Container fluid>
      <Row>
        <Col xs={3} className="barcode">
            <Barcode availableitems = {this.state.barcode} barcodeClickFunction = {this.handleBarcodeClick} />
        </Col>
        <Col className="images">
            <Images imageFiles = {this.state.images} imageClickFunction = {this.handleImageClick} submitClickFunction = {this.handleSubmitClick} />
        </Col>
        <Col xs={3} className="bill">
            <Bill billeditems = {this.state.bill}/>
        </Col>
      </Row>
    </Container>      
     );
  }
}
export default App;

