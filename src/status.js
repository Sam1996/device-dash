import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

class Cards extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const count = this.props.data;
        return (
            <Row className="statusBlock">
                <div className="container-fluid">
                    <Row>
                        <Col><h2 className="white">Device Dashboard</h2></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="gutter">
                                <Card.Body>
                                    <Row>
                                        <Col xs="12" sm="6">
                                            Active Devices
                                            <Card.Title><h1>{count.active}</h1></Card.Title>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <div className="statusCol d-flex justify-content-center align-items-center" style={{minHeight:85}}>
                                                <h1>
                                                    { (count.active > count.inactive ) ? <i class="fas fa-arrow-up text-success"></i> : <i class="fas fa-arrow-down text-danger"></i> }
                                                </h1>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                {/* <Card.Footer><i class="fas fa-arrow-up"></i></Card.Footer> */}
                            </Card> 
                        </Col>
                        <Col>
                            <Card className="gutter">
                                <Card.Body>
                                    <Row>
                                        <Col xs="12" sm="6">
                                            Inactive Devices
                                            <Card.Title><h1>{count.inactive}</h1></Card.Title>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <div className="statusCol d-flex justify-content-center align-items-center" style={{minHeight:85}}>
                                                <h1>
                                                    { (count.active < count.inactive ) ? <i class="fas fa-arrow-up text-success"></i> : <i class="fas fa-arrow-down text-danger"></i> }
                                                </h1>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                {/* <Card.Footer><i class="fas fa-arrow-up"></i></Card.Footer> */}
                            </Card>
                        </Col>
                        <Col>
                            <Card className="gutter">
                                <Card.Body>
                                    <Row>
                                        <Col xs="12" sm="6">
                                            Total Devices
                                            <Card.Title><h1>{count.total}</h1></Card.Title>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <div className="statusCol d-flex justify-content-center align-items-center" style={{minHeight:85}}>
                                                <h1><i class="fas fa-dot-circle text-primary"></i></h1>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                {/* <Card.Footer><i class="fas fa-arrow-up"></i></Card.Footer> */}
                            </Card>
                        </Col>
                    </Row>
                </div>
                
            </Row>
        );
    }
};

export default Cards;