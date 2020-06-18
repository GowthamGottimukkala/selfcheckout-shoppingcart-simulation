/* eslint-disable */
import React, {Component} from 'react';
import './App.css';
import Bill from './Components/Bill'
import Barcode from './Components/Barcode'
import Images from './Components/Images'
import {Container, Row, Col, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import filenames from "./Components/imgfilenamesobj"
import itemscsv from "./Components/itemsobj"

class App extends Component {
  constructor(props) {  
    super(props);
    this.handleBarcodeClick = this.handleBarcodeClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.state = { 
      barcode : [{id:'fogg',name:'Fogg Bodyspray',display:true},{id:'medimix',name:'Medimix soap',display:true}, {id:"redlabel",name:'3roses Teapowder',display:true}, {id:"goodday",name:'Goodday Buttercookies',display:true}],
      dropDownTitle : "Items",
      bill : [],
      images : [5,7,13,14],
      barcodeSelectedItem : undefined,
      imageSelected : undefined,
      submitButton : "Start Validation",
      submitFunction : this.handleSubmitClick,
      itemsPresentInBill : [],
      totalBill : 0,
      shouldHide : false,
      checkOut : undefined,
      dialogbox : true,
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

  async handleSubmitClick() {
    this.setState({
      shouldHide : true,
      submitButton : "Validating..",
      submitFunction : undefined
    })
    var barcodeCombinedOutput = []
    var imageName = undefined
    this.state.bill.forEach(billeditem=>{
      barcodeCombinedOutput.push(billeditem.id)
    })
    barcodeCombinedOutput.push(this.state.barcodeSelectedItem)
    console.log(barcodeCombinedOutput)
    imageName = filenames[this.state.imageSelected].name
    var awsResult = await window["upload"](imageName)
    this.setState({
      submitButton : "Start Validation",
      shouldHide : false,
      submitFunction : this.handleSubmitClick
    })
    console.log(awsResult)
    if(awsResult.sort().join(',')=== barcodeCombinedOutput.sort().join(',')){
      var keyValidated = undefined
      for(let i=0;i<itemscsv.length;i++){
        if(this.state.barcodeSelectedItem === itemscsv[i].id){
          keyValidated = i
          break;
        }
      }
      this.setState(prevState => {
        return {
          ...prevState,
          totalBill : prevState.totalBill + parseInt(itemscsv[keyValidated].price)
        }
      })
      this.setState((prevState)=>{  
        return {
          ...prevState,
          bill: [...prevState.bill, {key:itemscsv[keyValidated].key,name:itemscsv[keyValidated].name,price:itemscsv[keyValidated].price,id:itemscsv[keyValidated].id}],
          itemsPresentInBill : [...prevState.itemsPresentInBill, itemscsv[keyValidated].id],
        }
      },function(){
        console.log(this.state.bill)
      })
      var nextImages = await window["imageselector"](this.state.itemsPresentInBill)
        console.log(nextImages)
        this.setState((prevState)=>{
          const barcodetemp = prevState.barcode.map(obj => {
            if(nextImages[1].includes(obj.id))
              return obj
            else
              return {
                ...obj,
                display: false
              }
          })
          return {
            ...prevState,
            barcode: barcodetemp,
            barcodeSelectedItem: undefined,
            imageSelected : undefined,
            images: nextImages[0],
            dropDownTitle: "Items"
          }
        },function(){
          console.log(this.state.barcode)
          if(this.state.images.length === 0){
            this.setState({
              checkOut : "checkout",
              shouldHide : true
            }, function(){
              console.log("All items are completed. Need to start simulation again")
              alert("All items are completed. Need to start simulation again")
            })
          }
        })
      if(this.state.checkOut != "checkout"){
         if (window.confirm("\t\t\tItem successfully validated and added to Bill.\t\t\t \n\n If you want to continue adding items press OK or If u want to checkout press cancel") !== true) {
             this.setState({
               checkOut : "checkout",
               shouldHide : true
             })
         }
      }
    }
    else {
      console.log(this.state.imageSelected)
      alert('Fraud Detected. Place again');

    }
      const elements = document.getElementsByClassName("imge")
      for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove('clicked');
       }
      this.setState({
        barcodeSelectedItem : undefined,
        imageSelected : undefined,
        dropDownTitle : "Items"
      })
  }
  changeTitle(e) {
    this.setState({
        dropDownTitle: e.currentTarget.textContent
    })
  }
  importAll(r) {
    return r.keys().map(r);
  }
  handleCheckout(){
    this.setState({
      barcode : [{id:'fogg',name:'Fogg Bodyspray',display:true},{id:'medimix',name:'Medimix soap',display:true}, {id:"redlabel",name:'3roses Teapowder',display:true}, {id:"goodday",name:'Goodday Buttercookies',display:true}],
      dropDownTitle : "Items",
      bill : [],
      images : [5,7,13,14],
      barcodeSelectedItem : undefined,
      imageSelected : undefined,
      submitButton : "Start Validation",
      submitFunction : this.handleSubmitClick,
      itemsPresentInBill : [],
      totalBill : 0,
      checkOut : undefined,
      shouldHide : false,
    })
  }
  handleDialogBox(){
    this.setState({
      dialogbox : false
  })
  }
  render() { 
    const forapp = this.importAll(require.context('./forapp/', false));
    return ( 
      <Container fluid>
        {this.state.dialogbox == true &&
          (window.confirm("\t\t\tPlease read this information before proceeding!\n----------------------------------------------------------------------------------------------------------------------------\n\n--This is a simulation for a self-checkout shopping cart.\n\n--The 3 inputs label-from-barcode-scanner, Snapshot-of-cart, Weight-of-cart are being taken from the user in this simulation.\n\n----In 1st option, you will be asked to choose the label which is the object-scanned.\n\n----In the 2nd option, you will be asked to choose the snapshot-of-cart which is the object-placed.\n\n----The weight of the cart is also sent as you choose your option2. The bill is displayed in a separate container on your right in real-time.")) &&
             this.handleDialogBox()
        }
        
      <Row>
        <Col xs={3} className="barcode">
            <Barcode availableitems = {this.state.barcode} barcodeClickFunction = {this.handleBarcodeClick} dropDownTitleProperty = {this.state.dropDownTitle} changeTitleFunction = {this.changeTitle} shouldHide = {this.state.shouldHide}/>
            <div className="bottom">
              <img src={forapp[0]}></img>
              <h6>Here you scan the item you want to add into cart</h6>
            </div>
        </Col>
        <Col className="images">
            <Images imageFiles = {this.state.images} imageClickFunction = {this.handleImageClick} shouldHide = {this.state.shouldHide}/>
            {this.state.barcodeSelectedItem!==undefined && this.state.imageSelected!==undefined &&
              <div>
              <Button className = {this.state.addToCart} onClick={this.state.submitFunction} >{this.state.submitButton}</Button>
              </div>
            }
            {
              this.state.submitButton==="Validating.." &&
              <div style={{marginTop: 30}}>
                <h6>This may take a few seconds</h6>
                <h6>Validating using AWS custom object detection model</h6>
              </div>
            }
            <div className="bottom-images">
              <h6>Here you can place any item (used to simulate our fraud detection strategies)</h6>
              <h6>Above images are for simulation purposes only. In the actual product a single image is automatically obtained from the camera present in the cart after you place something</h6>
            </div>
        </Col>
        <Col xs={3} className="bill">
            <Bill billeditems = {this.state.bill} totalBill = {this.state.totalBill}/>
            {
              this.state.checkOut==="checkout" &&
              <div>
              <h6 style = {{marginBottom: 10, fontWeight: "bolder"}}>Total bill is {this.state.totalBill}</h6>
              <Button className = {this.state.addToCart} onClick={this.handleCheckout} >Start again</Button>
              </div>
            }
            <div className="bottom-bill">
              <h6>This shows the current bill</h6>
            </div>
        </Col>
      </Row>
    </Container>    
      
     );
  }
}
export default App;

