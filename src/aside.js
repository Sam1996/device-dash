import React , { Component } from 'react';
import { Image, Col, Nav } from 'react-bootstrap';

class Aside extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return(
             <Col className="no-gutters" id="aside">
                 <Nav defaultActiveKey="/home" className="flex-column sticky-top padding" >
                        <Image src="https://relayr.io/wp-content/themes/relayr/img/logo.svg" style={{width:180,height:40,marginBottom:20}}></Image>
                        <Nav.Link href="">Link</Nav.Link>
                        <Nav.Link href="">Link</Nav.Link>
                        <Nav.Link href="">Link</Nav.Link>
                    </Nav>
            </Col> 
        
        )
    }
}

export default Aside;