import React, { Component } from 'react';
import {DropdownButton, Dropdown} from "react-bootstrap"
import '../App.css';
import ReactDOM from "react-dom"
class Barcode extends Component {
    constructor(props) {
        super(props);
        this.changeTitle = this.changeTitle.bind(this);
        this.state = { 
            dropdownTitle : "Items"
         }
    }
    changeTitle(e) {
        this.setState({
            dropdownTitle: e.currentTarget.textContent
        })
    }
    render() { 
        const dropdownItems = this.props.availableitems.map((item)=>{
        if(item.display)
            return <Dropdown.Item key={item.id} href="#/action-1" onClick={(e)=>{this.props.barcodeClickFunction(item.id);this.changeTitle(e)}}>{item.name}</Dropdown.Item>
        })
        return ( 
            <div className="actualbarcode">
                <h1>Scan new item</h1>
                <DropdownButton id="dropdown-basic-button" title={this.state.dropdownTitle}>
                    {dropdownItems}
                </DropdownButton>
            </div>
         );
    }
}
export default Barcode;