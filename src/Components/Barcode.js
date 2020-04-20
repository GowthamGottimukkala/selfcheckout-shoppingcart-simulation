import React, { Component } from 'react';
import {DropdownButton, Dropdown} from "react-bootstrap"
import '../App.css';
import ReactDOM from "react-dom"
class Barcode extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="actualbarcode">
                <h1>Scan one of these items</h1>
                <DropdownButton alignCenter id="dropdown-basic-button" title="Items">
                    <Dropdown.Item href="#/action-1">tea</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">soap</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">spray</Dropdown.Item>
                </DropdownButton>
            </div>
         );
    }
}
export default Barcode;