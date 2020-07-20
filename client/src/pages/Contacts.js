/* import React, { useEffect, useState } from "react"; */
import React from "react";
import "./style.css";
import {Container,Row,Col,Card,Form,InputGroup,ButtonGroup,Button} from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faPhoneSquare,faAt,faUser,faEnvelope,faComment} from '@fortawesome/free-solid-svg-icons';

export default function Contacts(props) {
    return (
        <>
            <Container className="container-fluid contacts">
                <Row><h4 className="am_content quals">Contact Me</h4> </Row>   
                <Row>
                    <Col sm={6}>
                        <Row>
                            <Col sm={1}><FontAwesomeIcon icon={faPhoneSquare} className="fontAwesomeIcons"/></Col>
                            <Col><p>+61 431245156</p></Col>
                        </Row>
                        <Row>
                            <Col sm={1}><FontAwesomeIcon icon={faAt} className="fontAwesomeIcons"/></Col>
                            <Col><a href="mailto:#" className="emailadd">jo@caswa.com</a></Col>
                        </Row>
                        <Row>
                            <Col sm={1}><FontAwesomeIcon icon= {['fab','linkedin']} className="fontAwesomeIcons"/></Col>
                            <Col><a href="https://www.linkedin.com/in/joanna-sikorska-a284791a/" 
                                     target="_blank" className="emailadd"> https://www.linkedin.com/in/joanna-sikorska-a284791a/ </a></Col>
                        </Row>
                        <Row><p></p></Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                    
                        <Card className="rounded-0 no-border contact-form">
                            <Card.Header className="p-0">
                                <h4 className="bg-info text-white text-center py-2 contact-header"> <FontAwesomeIcon icon={faEnvelope} className="fontAwesomeIcons "/> Send a Message </h4>
                            </Card.Header>
                            <Card.Body className="p-3">
                                <Form>
                                    <Form.Group>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faUser} className="text-info"/></InputGroup.Text>
                                            
                                            </InputGroup.Prepend>
                                            <Form.Control id="form_lastname" placeholder="Please enter your full name" required='required'  data-error="Please leave us a name."/>
                                        </InputGroup>
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} className="text-info"/></InputGroup.Text>
                                            
                                            </InputGroup.Prepend>
                                            <Form.Control type="email" className="form-control" id="nombre" name="form_email" placeholder="Please enter your email" required='required'  data-error="Please leave us an email."/>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon={faComment} className="text-info"/></InputGroup.Text>
                                            
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" className="form-control contact_msg" id="form_message" name="message" placeholder="Please type your message" required='required'  data-error="Please leave us an email."/>
                                        </InputGroup>
                                    </Form.Group>
                                    <Button className="btn-info btn-block rounded-0 py-2" onClick={props.onMsgSubmit}>Submit</Button>
                                    
                                </Form>
                            </Card.Body>
                        </Card>
                
                    </Col>
                </Row> 
            </Container >


        </>
    )
};




{/* 
    
      
      <section class="row">
        <div class="card contact_card"> 
          <div class="card-body">
            <form action="../php/mail.php" method="post" id='contact_form' role='form'>  
              <div class="card rounded-0 no-border contact-form">
                  <div class="card-header p-0">
                      <div class="bg-info text-white text-center py-2 contact-header">
                          <h3><i class="fa fa-envelope"></i> Send a Message </h3>
                          <p class="m-0"></p>
                      </div>
                  </div>
                  <div class="card-body p-3">

                      <!--Body-->
                      <div class="form-group">
                          <div class="input-group mb-2 ">
                              <div class="input-group-prepend">
                                  <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                              </div>
                              <!-- <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Enter your full name" required> -->
                              <input type="text" class="form-control" id="form_lastname" placeholder="Please enter your full name" required='required'  data-error="Please leave us a name.">
                          </div>
                      </div>
                      <div class="form-group">
                          <div class="input-group mb-2">
                              <div class="input-group-prepend">
                                  <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                              </div>
                              <input type="email" class="form-control" id="nombre" name="form_email" placeholder="Please enter your email" required='required'  data-error="Please leave us an email.">
                          </div>
                      </div>

                      <div class="form-group">
                          <div class="input-group mb-2">
                              <div class="input-group-prepend">
                                  <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                              </div>
                              <textarea type="text" class="form-control contact_msg" id="form_message" name="message" placeholder="Please type your message" required='required'  data-error="Please leave us an email."> </textarea>
                          </div>
                      </div>
                      
                        <div class="form-group">                                       
                          <div class="g-recaptcha" data-sitekey="6LfwyDEUAAAAAHwP7cx_q_Rdk4UN1dJ8S1XR9A04"></div>
                        </div>
                      
                      <div class="text-center">
                          <input type="submit" value="Submit" class="btn btn-info btn-block rounded-0 py-2">
                      </div>
                  </div>

              </div>
          </form>
            <!-- <form>
              <div class="form-group">
                <label for="contact_name">Name</label>
                <input type="text" class="form-control" id="contact_name" placeholder="Enter full name">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="contact_msg_label">Message</label>
                <textarea type="text" class="form-control contact_msg" id="contact_msg" placeholder="Type your message"> </textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form> -->
          </div>
          
        </div>

        
      </section>
      <section>
        
      </section>
    </section>
    <section class="col-sm-6">
      <section class="row">
           
      </section>
        

    </section>
</section>
    
</section> */}