/* eslint-disable */
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
      const billItems = this.props.billeditems.map((item)=>{
        return(
          <tr key={item.key}>
            <td>{item.key}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        )
      })
        return ( 
            <div className="actualbill">
              <h1>Bill</h1>
            <Table striped bordered hover responsive>
                 <thead>
                   <tr>
                     <th>Key</th>
                     <th>Item</th>
                     <th>Price</th>
                   </tr>
                 </thead>
                 <tbody>
                    {billItems}
                 </tbody>
                 <tfoot>
                   <br></br>
                   Total = {this.props.totalBill}
                 </tfoot>
            </Table>
            </div>
         );
    }
}
 
export default Bill;