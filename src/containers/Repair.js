import React from 'react';
import { Button, Form, Col, Modal } from 'react-bootstrap';
import Progress from '../components/Progress'

class Repair extends React.Component {

    state={
        // name: "",
        model: "",
        caliber: "",
        manufacturer: "",
        sent: false,
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClose=(e)=>{
        this.setState({
            sent: false
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
            sent: true
        })
    }

    render(){
        
        return (
            <div className="repair-content">
                <div className="repair-banner"></div>
                <Col xs={12} sm={12} md={7} lg={6} className="align-auto">
                    <Form className="repair-form">
                        <h3 className="repair-banner-text">IKON REPAIRS</h3>
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
                        <Button style={{backgroundColor: '#E62346'}} className="form-button" type="submit" onClick={(e)=>this.handleSubmit(e)}>Submit</Button>
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
                <>
                    <Modal
                        show={this.state.sent}
                        onHide={this.handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>TIME TO SHIP</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p><strong>Please Ship the firearm to: </strong></p> 
                            <p>1951 Pisgah Rd, 125, Florence, South Carolina 29501, US</p>
                            <h4>STATUS</h4>
                            <Progress/>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        );
    }
};

export default Repair;


