import React, {Component} from 'react';
import './App.css';
import Bill from './Components/Bill'
import Barcode from './Components/Barcode'
import Images from './Components/Images'
import {Container, Row, Col, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import filenames from "./readfiles"

class App extends Component {
  constructor(props) {  
    super(props);
    this.handleBarcodeClick = this.handleBarcodeClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.state = { 
      barcode : [{id:'fogg',name:'Fogg bodyspray',display:true},{id:'medimix',name:'Medimix soap',display:true}, {id:"redlabel",name:'Redlabel Tea powder',display:true}, {id:"goodday",name:'Goodday buttercookies',display:true}],
      bill : [{id:"fogg",key:1,name:"Bodyspray",price:100}],
      images : [0,1,2,3,4,5],
      barcodeSelectedItem : undefined,
      imageSelected : undefined,
     }
  }
  handleBarcodeClick(id){
    this.setState({
      barcodeSelectedItem : id
    },function () {
      console.log(this.state.barcodeSelectedItem);
  })
  }

  handleImageClick(id){
    if(this.state.imageSelected === id){
    this.setState((prevState)=>{
      return {
        ...prevState,
      imageSelected : undefined
      }
    },function () {
      console.log(this.state);
  })}
    else{
    this.setState((prevState)=>{
      return {
        ...prevState,
      imageSelected : id
      }
    },function () {
      console.log(this.state);
  })}
}

  // here we use the state.barcodeselecteditem and state.imageSelected to perform validation using AWS and weights then
  // 1. Display "Success" or "Place again" and hide Images Component
  // 2. If "Success" Add state.bill with validated item with the help of csv
  // 3. If "Success" Update state.barcode.display for all items according to the images available
  // 4. If "Success" Call the function to list all the available images having the items present in the bill (and state.selectedItem is not needed
  //    because to show fraud detection cases) ,then update state.image and unhide Images component
  
  handleSubmitClick() {
    var barcodeCombinedOutput = []
    var imageName = undefined
    this.state.bill.forEach(billeditem=>{
      barcodeCombinedOutput.push(billeditem.id)
    })
    barcodeCombinedOutput.push(this.state.barcodeSelectedItem)
    console.log(barcodeCombinedOutput)
    imageName = filenames[this.state.imageSelected].name
    console.log(imageName)
  }

  render() { 
    return ( 
      <Container fluid>
      <Row>
        <Col xs={3} className="barcode">
            <Barcode availableitems = {this.state.barcode} barcodeClickFunction = {this.handleBarcodeClick} />
        </Col>
        <Col className="images">
            <Images imageFiles = {this.state.images} imageClickFunction = {this.handleImageClick}/>
            {this.state.barcodeSelectedItem!==undefined && this.state.imageSelected!==undefined &&
              <Button onClick={this.handleSubmitClick} >Add to Cart</Button>
            }
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

