import React, { Component } from 'react';
import {DropdownButton, Dropdown} from "react-bootstrap"
import '../App.css';
import ReactDOM from "react-dom"
class Barcode extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    render() { 
        const dropdownItems = this.props.availableitems.map((item)=>{
        if(item.display)
            return <Dropdown.Item key={item.id} href="#/action-1" onClick={(e)=>{this.props.barcodeClickFunction(item.id);this.props.changeTitleFunction(e)}}>{item.name}</Dropdown.Item>
        })
        return ( 
            <div className="actualbarcode">
                <h1>Scan new item</h1>
                <DropdownButton id="dropdown-basic-button" title={this.props.dropDownTitleProperty}>
                    {dropdownItems}
                </DropdownButton>
            </div>
         );
    }
}
export default Barcode;