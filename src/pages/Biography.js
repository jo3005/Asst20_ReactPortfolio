/* import React, { useEffect, useState } from "react"; */
import React from "react";
import ImageThumbnail from "../components/ImageThumbnail";
import pic1 from "../images/site_400x400.jpg";
import pic2 from "../images/wavelet_pic.png";
import pic3 from "../images/analytics_400x400.jpg";
import "./style.css";
import {Container,Row,Col,ButtonGroup,Button} from "react-bootstrap"

function Biography() {
    return (
        <>
            <Container className="container-fluid biography am_background">
                <Row><h4 className="am_content quals">Dr Joanna Z. Sikorska</h4> </Row>
                <Row><p className="am_content quals">BE (Mech, 1st Class Hons),</p></Row> 
                <Row><p className="am_content quals">PhD (Mech Eng)</p></Row>
                <Row>
                    <Col sm={2}>
                        <ImageThumbnail source={pic1}/>
                        <ImageThumbnail source={pic2}/>
                        <ImageThumbnail source={pic3}/>
                    </Col>
                    <Col sm={10}>
                        <Row className="am_content">
                            <h5 className="am_content">What can I do?</h5>
                            <p className="am_content">I am a reliability engineer (and amateur artist) turned data scientist who is just as comfortable taking
                                field measurements from troublesome equipment as I am interrogating corporate databases, researching new prognostic models, or 
                                designing the web pages that will display the data results in novel ways.
                            </p>
                            <p className="am_content">I'll admit, this seems like an eclectic mix of skills for a qualified mechanical engineer with a passion for asset management 
                                to be developing.
                            </p>
                            <h5 className="am_content">Why these skills?</h5>  
                            <p className="am_content">Data science has immense potential to help organisations extract more value and life from their working assets.  However, to 
                                acheive this potential, we usually need more than just state of the art modelling techniques.  We also require a contextual 
                                understanding of the data being collected, the ability to manipulate the data so it can be made usable and then ultimately, the skills 
                                to reticulate the results in a way that is easy and pleasant for the business to use in their day-to-day operations.
                            </p>
                            <p className="am_content">Click below to see some examples of my work.</p>
                        </Row>

                        <Row >
                            <Col md={2}></Col>
                            <Col md={8}>
                                <ButtonGroup  className="btn-group" role="group" aria-label="Folio Links" >
                                    <Button href="/portfolio" target="Web Portfolio" variant="outline-info">Web Development</Button>
                                    <Button variant="outline-info disabled">Research Papers</Button>
                                    <Button variant="outline-info disabled">Artwork</Button>
                                </ButtonGroup>
                            </Col>
                            <Col md={2}></Col>
                        </Row>
                    </Col>
                </Row>    
            </Container>
          
    </>
    );
  }


export default Biography;