import React from 'react';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';

class Search extends React.Component {
    render(){
        const filter = this.props.filterFunc;
        return (
            <Row>
                <Col><h2>Device List</h2></Col>
                <Col sm={4} className="ml-auto">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><i className="fa fa-search"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="Search by name" onChange={filter} />
                    </InputGroup>
                </Col>
            </Row>
          );
    }
  
};

export default Search;