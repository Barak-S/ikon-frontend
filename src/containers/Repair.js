import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';


class Repair extends React.Component {

    state={
        // name: "",
        model: "",
        caliber: "",
        manufacturer: "",
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <Col xs={12} sm={12} md={5} lg={5} className="align-auto">
                <Form className="repair-form">
                    <h3>Repairs</h3>
                    <hr/>
                    <Form.Group>
                        <Form.Label>Model</Form.Label>
                        <Form.Control  
                            onChange={(e)=>this.handleChange(e)} 
                            type="text" 
                            name="model" 
                            value={this.state.model} 
                            placeholder="Model" 
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Caliber</Form.Label>
                        <Form.Control  
                            onChange={(e)=>this.handleChange(e)} 
                            type="text" 
                            name="caliber" 
                            value={this.state.caliber} 
                            placeholder="Caliber" 
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control  
                            onChange={(e)=>this.handleChange(e)} 
                            type="text" 
                            name="manufacturer" 
                            value={this.state.manufacturer} 
                            placeholder="Manufacturer" 
                            required
                        />
                    </Form.Group>
                    <hr/>
                    <Button style={{backgroundColor: '#E62346'}} className="form-button" type="submit">Submit</Button>
                </Form>
            </Col>
        );
    }
};

export default Repair;