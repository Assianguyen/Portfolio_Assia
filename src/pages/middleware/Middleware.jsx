import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio";
import { style } from "glamor";
import { link } from "glamor";
import { NavBar, Nav, NavItem, Button, Modal, Row, Col } from 'react-bootstrap';

import MiddlewareCourses from "../../components/skillMatrix/middlewareCourses"
import SkillMatrixMiddleware from "../../components/skillMatrix/skillMatrixMiddleware"



function Middleware(props) {
    const theme = props.theme;
    const styles = style({
        backgroundColor: `${theme.accentBright}`,
        ":hover": {
            boxShadow: `0 5px 15px ${theme.accentBright}`,
        },
    });
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div>
            <Header theme={props.theme} setTheme={props.setTheme} />
            <div className="main">
                <div className="course-header-div">
                    <Fade bottom duration={2000} distance="20px">
                        <div className="course-heading-img-div">
                            <img
                                className="com-pic"
                                src={require(`../../assests/images/om2m-m.jpg`)}
                                alt=""
                                style={{ width: "25%" }}
                            />
                        </div>
                        <h1 className="course-header" style={{ color: theme.text }}>
                            Middleware and Service
                        </h1>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Descriptive part
                        </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br /><br />
                            The Middleware & Service course or module gathers 3 classes
                            that study different technologies used today in IoT for different purposes.
                            First, we had a class about Service Oriented Architecture, the main standard
                            used today to develop Web Services, that are a prominent part of the web today.
                            Then, we studied the middleware platform OM2M, which goal is to ensure interoperability
                            between all types of sensors and applications, a crucial problematic of IoT. Finally,
                            we tackled cloud computing techniques like virtualization in the last class.
                            You can find a table summarizing the content of each course:

                            <br /><br />
                        </h1>
                        <MiddlewareCourses />
                        <br /><br />
                        <h1 className="course-subtitle"> Service Oriented Architecture</h1>
                        <h5 className="course-text2">
                            <br />
                            The Service based Architecture and Software Engineering course was in full autonomy. We had exercices and quizzes to complete during this training.
                            We also had a big project: the goal was to create a Web application that automatically manages an INSA’s room . We first had to do think of sensors and actuators that would be relevent in a classroom,
                            and then create scenarios where we would pilot these devices. For that, we had to create microservices (software services) that used simulated sensors. Depending on the value we retrieve from them, actuators or alarms can be triggered.


                            <img
                                className="node-red d-block mx-auto"
                                src={require(`../../assests/images/soa_project.png`)}
                                alt=""
                                style={{ width: "75%" }}
                            />

                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/11AZiDhgmOGm2L2QBwxWRpTRr97nhUGEX/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>SOA project report</a>
                                </button>
                            </div>

                            <h1 className="course-subtitle">Middleware for IoT </h1>
                            <br />

                            {/* <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/1mj6QzKMF_Me-08sUTEua44W_u1xL_GDW/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>SDR report</a>
                                </button>
                            </div> */}


                            <h1 className="course-subtitle">Cloud and autonomic management </h1>
                            <br />
                            The Cloud and Autonomic management class consisted of only two lectures,
                            directly followed by five laboratories that were really important. We studied mainly two elements:
                            hosted virtual machines and containers using VirtualBox, and bare virtual machines using the Openstack platform.
                            The general purpose of the lab in this cours was to enhance our knowledge of concepts
                            and technologies for virtualization techniques. These techniques are used in IT environments
                            that support the provisioning (i.e. development, deployment, management) of novel software systems
                            (with their potential constraints such as QoS and security). These environments are typically dynamic and distributed.
                            <img
                                className="cloud d-block mx-auto"
                                src={require(`../../assests/images/cloud.png`)}
                                alt=""
                                style={{ width: "35%" }}
                            />
                            <br />
                        </h5>

                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Technical part
                        </h1>
                        <br /><br />
                        <h1 className="course-subtitle">Service  Oriented architecture</h1>
                        <h5 className="course-text2">
                            <br />


                        </h5>
                        <br />
                        <h1 className="course-subtitle">Middleware for IoT</h1>
                        <h5 className="course-text2">
                            <br />


                            <br /><br />
                        </h5>

                        <h1 className="course-subtitle">Cloud computing </h1>
                        <h5 className="course-text2">
                            <br />

                        </h5>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Analytic part
                        </h1>
                        <br />
                        <h1 className="course-subtitle"> Skills analysis </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br />
                            This module was a very important one in the ISS curriculum, as we used a lot of the notions learned during this course
                            in other projects, specifically using the OM2M platform implementing a node-red interface
                            The Service Oriented Architecture class mobilized skills that I had never used before.
                            Since I started with a beginner level, I think I was able, through a very concrete project,
                            to acquire many skills such as develop a SOA architecture with microservices. Since I had already done node-red dashboard for
                            the Hackathon and the Smart devices course, I was quite comfortable with this technology.
                            The Middleware for Internet of Things class was completed  simultaneously with the Hackathon, meaning we were able
                            to first learn the notions during the practical work  and then reapply it during the Hackathon.  We learned to use the REST API
                            Postman to carry out HTTP REST requests. After using the OneM2M standard many times as well as the OM2M open-soruce platform,
                            I feel like I am now capable of implementing a full sensor network, which is an primordial skill when working the IoT field.
                            As for the Cloud & Autonomic computing class, it was probably the most challenging course of this module for me because it relied a lot on theoretical approach.
                            Having that much practice work was very useful to me, because we really took the time to explore the concepts with Openstack and Virtualbox and thus take in the main skills of the class.

                            <br /><br />


                        </h1>
                        <SkillMatrixMiddleware />
                        <Button className='button-skills' onClick={handleShow}>
                            How to read the skills matrix
                        </Button>
                        <Modal size='lg' show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="pop-up-title">Skills designations</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="pop-up">
                                <p class="mb-2">
                                    Skill level:
                                </p>
                                <ul>
                                    <li><b>1: AP</b> - level of application: follow-up of instructions or procedures </li>
                                    <li><b>2: AN</b> - level of analysis: improvement or optimization of solutions or proposals </li>
                                    <li><b>3: M</b> - level of proficiency: program design or specification definitions</li>
                                    <li><b>4: EX</b> - level of expertise: definition of orientations or strategies</li>
                                </ul>

                                <p class="mb-2">
                                    Learning mode:
                                </p>
                                <ul>
                                    <li><b>IT: </b>Initial training</li>
                                    <li><b>PE: </b>Peer exchange</li>
                                    <li><b>ST: </b>Self-training</li>
                                    <li><b>PP: </b>Professional practice</li>
                                </ul>

                            </Modal.Body>
                        </Modal>
                        <br />
                        <br />
                        <h1 className="course-subtitle"> General feedback </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br />
                           For me, the Middleware and Service module was fully integrated in the IoT field and was really helpful in building
                           many other projects of this semester.
                           The SOA project and the OM2M labs were nicely linked and complemented each other well since they relied on the same core concepts, mainly Web services and server constraints. 
                           I think the skills that I have acquired during this
                           module are valuable, and widely used in the industry.
                           In conclusion, I really enjoyed this course and was satified with the result of the SOA project, as
                           we were able to implement all the scenarios we wanted, and produce a good dashboard. 
                        </h1>
                        <Footer theme={props.theme} />
                    </Fade>
                </div>
                {/* <SkillSection theme={theme} /> */}
            </div>
        </div>
    );
}
export default Middleware;