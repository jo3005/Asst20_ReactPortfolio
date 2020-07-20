/* import React, { useEffect, useState } from "react"; */
import React from "react";
import ImageThumbnail from "../components/ImageThumbnail";
import pic1 from "../images/site_400x400.jpg";
import pic2 from "../images/wavelet_pic.png";
import pic3 from "../images/analytics_400x400.jpg";
import "./style.css";
import {Container,Row,Col,ButtonGroup,Button} from "react-bootstrap"

export default function Portfolio() {
    return (
        <>
            <Container className="container-fluid biography am_background">
                <section className="row">
                    <h3 className="page_headers">Website Development</h3>
                </section>

                {/*  <!-- Project 1: PDL --> */}
                    <section className="row project_row">
                        <section className="col-sm-5">
                            <section className="row">
                                <a href="https://prognosticsdl.ecm.uwa.edu.au/" target="_blank">
                                    <img className="img-thumbnail webthumbs" src="../images/pdl.png" alt="Prognostics Data Library" 
                                    />
                                </a>
                                
                            </section>
                        </section>    
                        <section className="col-sm-7 project_text">  
                            <section className="row project_desc">
                                <section className="col-sm-12">
                                    <section className="row ">
                                        <h4 className="project_title">The Prognostics Data Library </h4> 
                                    </section>
                                    <section className="row ">
                                        <h5 className ="project_customer" >for the UWA System Health Lab </h5>
                                    </section>
                                    <section className="row">
                                        <p className="project_desc">The Prognostics Data Library is a web-based data management system for use by researchers and industry around the world to access suitable datasets for testing prognostic models. 
                                            The PDL is primarily built for three groups: researchers needing datasets, industry and academics with datasets.</p>
                                    </section>
                                    <section className="row">
                                        <section className="col-sm-12">
                                            <a href="https://prognosticsdl.ecm.uwa.edu.au/"  target="Prognostics Data Library">www.prognosticsdl.ecm.edu.au </a>
                                        </section>
                                    </section>

                                </section>
                            </section>                   
                        </section>
                    </section>

                    {/* <!-- TODO: Replace Empty row with proper margins --> */}
                    <section className="row"></section>
                    
                    
                    {/* <!-- Project 2: DRAT --> */}
                    <section className="row project_row">
                        <section className="col-sm-7 project_text">  
                            <section className="row project_desc ">
                                <section className="col-sm-12">
                                    <section className="row">
                                        <h4 className="project_title" >DRAT Process Landing Page </h4> 
                                    </section>
                                    <section className="row ">
                                        <h5 className ="project_customer" >for the ARC Training Centre for Transforming Maintenance Through Data Science</h5>
                                    </section>
                                    <section className="row">
                                        <p className="project_desc">The DRAT is a simple tool that evaluates the risk associated with sharing a specific corporate dataset with trusted third parties.

                                            It asks you a series of questions to determine what type of information the dataset contains, and from that presents a suggested risk ranking. 
                                            Then it will offer some suggestions, based on a modified 5-Safes Framework, to help mitigate that risk. 
                                            The landing page adds a front end to the tool that explains the process.</p>
                                    </section>
                                    <section className="row">
                                        <section className="col-sm-12">
                                            <a href="http://drat-process.com.au" target="Data Risk Assessment Tool">www.drat-process.com </a>
                                        </section>
                                    </section>
                                </section>
                            </section>
                                
                        </section>
                        <section className="col-sm-5">
                            <section className="row">
                                <a href="http://drat-process.com.au" target= "_blank">
                                    <img className="img-thumbnail webthumbs" src="../images/drat.png" alt="DRAT Landing Page" 
                                        />
                                    </a>
                            </section>
                        </section> 
                    </section>
                        
                
                    
                    {/* <!-- Project 1: Surf Spot --> */ }

                    <section className="row project_row">
                        <section className="col-sm-5">
                            <section className="row">
                                <a href="https://cazb67.github.io/find-surf-spot-app/" target= "_blank">
                                    <img className="img-thumbnail webthumbs" src="../images/surfspot.png" alt="Surf Spot App" 
                                        />
                                </a>
                            </section>
                        </section> 
                        <section className="col-sm-7 project_text">  
                            <section className="row project_desc">
                                <section className="col-sm-12">
                                    <section className="row ">
                                        <h4 className="project_title">Surf Spot App </h4> 
                                    </section>
                                    <section className="row ">
                                        <h5 className ="project_customer" >Full Stack Bootcamp Team Project 1</h5>
                                    </section>
                                    <section className="row">
                                        <p className="project_desc">The Surf Spot App uses the Willy Weather API and group developed algorithms to match the best surf spot in Perth to predicted weather conditions.</p>
                                    </section>
                                    <section className="row">
                                        <section className="col-sm-12">
                                            <a href="https://cazb67.github.io/find-surf-spot-app/"  target="Surf Spot App">Go to: Surf Spot App on Github pages</a>
                                        </section>
                                    </section>
                                </section>
                            </section>                   
                        </section>    
                    </section>


                    {/* <!-- Project Travel Weather --> */}
                    <section className="row project_row">
                        <section className="col-sm-7 project_text">  
                            <section className="row project_desc ">
                                <section className="col-sm-12">
                                    <section className="row">
                                        <h4 className="project_title" >Travel Weather Dashboard</h4> 
                                    </section>
                                    <section className="row ">
                                        <h5 className ="project_customer" >FullStack Bootcamp Assignment 6</h5>
                                    </section>
                                    <section className="row">
                                        <p className="project_desc">
                                            A simple dashboard that uses the OpenWeather API and allows the user to check the weather in locations around the world for the next five days.</p>
                                    </section>
                                    <section className="row">
                                        <section className="col-sm-12">
                                            <a href="https://jo3005.github.io/Asst6_WeatherApp/index.html " target="Weather Travel App">Go to: Travel Weather App on Github Pages </a>
                                        </section>
                                    </section>
                                </section>
                            </section>
                                
                        </section>
                        <section className="col-sm-5">
                            <section className="row">
                                <a href="https://jo3005.github.io/Asst6_WeatherApp/index.html" target= "_blank">
                                    <img className="img-thumbnail webthumbs" src="../images/travel_weather.png" alt="Weather Dashboard" 
                                        />
                                    </a>
                            </section>
                        </section> 
                    </section>

            {/* <!-- Project 4: Quiz --> */  }

            <section className="row project_row">
                <section className="col-sm-5">
                    <section className="row">
                        <a href="https://jo3005.github.io/Asst4_JavascriptQuiz/index.html" target= "_blank">
                            <img className="img-thumbnail webthumbs" src="../images/quiz.png" alt="Surf Spot App" 
                               />
                        </a>
                    </section>
                </section> 
                <section className="col-sm-7 project_text">  
                    <section className="row project_desc">
                        <section className="col-sm-12">
                            <section className="row ">
                                <h4 className="project_title">Timed Quiz</h4> 
                            </section>
                            <section className="row ">
                                <h5 className ="project_customer" >Full Stack Bootcamp Assignment 4</h5>
                            </section>
                            <section className="row">
                                <p className="project_desc">The quiz asks a series of questions about Javascripts in a 2 minute time period and scores the results. If the user gets a wrong answer the time is reduced. </p>
                            </section>
                            <section className="row">
                                <section className="col-sm-12">
                                    <a href="https://jo3005.github.io/Asst4_JavascriptQuiz/index.html"  target="Timed Quiz">Go to: Timed Quiz on Github pages</a>
                                </section>
                            </section>
                        </section>
                    </section>                   
                </section>    
            
            </section>
                

            {/* <!-- School Pool App --> */}
            <section className="row project_row">
                <section className="col-sm-7 project_text">  
                    <section className="row project_desc ">
                        <section className="col-sm-12">
                            <section className="row">
                                <h4 className="project_title" >School Pool App</h4> 
                            </section>
                            <section className="row ">
                                <h5 className ="project_customer" >FullStack Bootcamp Project 2</h5>
                            </section>
                            <section className="row">
                                <p className="project_desc">
                                    This app helps parents or guardians get their kids to and from school and school events by connecting them with available parent drivers. Note: Not all functionality has been enabled yet.</p>
                            </section>
                            <section className="row">
                                <section className="col-sm-12">
                                    <a href="https://schoolpool-app.herokuapp.com/ " target="SchoolPool App">Go to: SchoolPool App on Heroku </a>
                                </section>
                            </section>
                        </section>
                    </section>
                        
                </section>
                <section className="col-sm-5">
                    <section className="row">
                        <a href="https://schoolpool-app.herokuapp.com/ " target= "_blank">
                            <img className="img-thumbnail webthumbs" src="../images/schoolpool.png" alt="School Pool Menu" 
                                />
                            </a>
                    </section>
                </section> 
            </section>


            {/*  <!-- Project 4: Quiz --> */}
            <section className="row project_row">
                <section className="col-sm-5">
                    <section className="row">
                        <a href="" target= "_blank">
                            <img className="img-thumbnail webthumbs" src="../images/automated_readme.PNG" alt="Surf Spot App" 
                                />
                        </a>
                    </section>
                </section> 
                <section className="col-sm-7 project_text">  
                    <section className="row project_desc">
                        <section className="col-sm-12">
                            <section className="row ">
                                <h4 className="project_title">Automated Readme Generator</h4> 
                            </section>
                            <section className="row ">
                                <h5 className ="project_customer" >Full Stack Bootcamp Assignment 9</h5>
                            </section>
                            <section className="row">
                                <p className="project_desc">This nodejs server application asks a series of questions via the console and creates a formatted Readme.md file for a github repository. </p>
                            </section>
                            <section className="row">
                                <section className="col-sm-12">
                                
                                </section>
                            </section>
                        </section>
                    </section>                   
                </section>    
            </section>
            




            </Container>
        </>
    )
};

