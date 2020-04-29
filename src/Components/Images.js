import React, { Component } from 'react';
import ReactDOM from "react-dom"
import '../App.css';
import {Container} from "react-bootstrap"

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    importAll(r) {
        return r.keys().map(r);
      }
    changeCSS(e) {
        if(e.target.className.includes("clicked"))
            e.target.className = "imge"
        else{
            const elements = document.getElementsByClassName("imge")
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('clicked');
             }
            e.target.className += " clicked"
        }
    }
    render() { 
        const images = this.importAll(require.context('../images/', false));
        const gallery = this.props.imageFiles.map((id)=>{
            return <img key= {id} className="imge" src={images[id]} onClick = {(e)=>{this.changeCSS(e); this.props.imageClickFunction(id)}} />;
        })
        return ( 
            <div className="actualimages">
                <h1>Select the snapshot of the cart</h1>
                <Container className="gallery" id = {this.props.shouldHide ? 'hidden' : ''}>
                    {gallery}
                </Container>
            </div>
         );
    }
}
export default Images;