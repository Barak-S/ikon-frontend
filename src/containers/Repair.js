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
            <div className="content-wrapper">
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
                        <Button style={{backgroundColor: '#E62346'}} className="form-button" type="submit">Submit</Button>
                        <hr/>
                        <p className="text-muted">
                        Once approved, you can rest easy while our expert gunsmiths repair your gun. 
                        </p>
                        <p className="text-muted">
                        Using our online tracking system, you can follow along as your firearm goes through each step of the process.
                        </p>
                        <p className="text-muted">
                        After completion, you'll get an email notification letting you know the job's done and on it's way, complete with a tracking number.
                        </p>
                    </Form>
                </Col>
            </div>
        );
    }
};

export default Repair;


