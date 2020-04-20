import React, { Component } from 'react';
import Table from "react-bootstrap/Table"
import '../App.css';
import ReactDOM from "react-dom"
class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="actualbill">
              <h1>Bill</h1>
            <Table striped bordered hover responsive>
                 <thead>
                   <tr>
                     <th>Id</th>
                     <th>Item</th>
                     <th>Price</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>1</td>
                     <td>Redlabel Tea</td>
                     <td>65rs</td>
                   </tr>
                   <tr>
                     <td>2</td>
                     <td>Medimix soap</td>
                     <td>30rs</td>
                   </tr>
                 </tbody>
            </Table>
            </div>
         );
    }
}
 
export default Bill;