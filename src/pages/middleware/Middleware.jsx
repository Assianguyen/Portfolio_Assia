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
                                className="middleware-pic"
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
                            The Middleware & Service course is divided in 3 classes
                            that focus on different technologies used in IoT.
                            We first had a course regarding Service Oriented Architecture which is an architectural style that supports service orientation.
                            It is used to create web services.
                            We also had a class about Middleware for IoT where we learned to use the opensource platform OM2M,
                            which aims to provide a M2M service platform for developing services independently of the underlying network and thus
                            ensure interoperability between heterogeneous devices.
                            Finally, we studied cloud computing and autonomic management through virtualization techniques.<br />
                            You can find below a table summarizing the content of each course:

                            <br /><br />
                        </h1>
                        <MiddlewareCourses />
                        <br /><br />
                        <h1 className="course-subtitle"> Service Oriented Architecture</h1>
                        <h5 className="course-text2">
                            <br />
                            The Service based Architecture and Software Engineering course was in full autonomy. We had exercices and quizzes to complete during this training.
                            tackled protocols like SOAP and REST and languages like BPEL.
                            We also had a big project on Maven: the goal was to create a Web application that automatically manages an INSA’s room . We first had to do think of sensors and actuators that would be relevent in a classroom,
                            and then create scenarios where we would pilot these devices. For that, we had to create microservices (software services) that used simulated sensors. Depending on the value we retrieve from them, actuators or alarms can be triggered.
                            We also had to deploy an interface that would display all the room's information and allow to control the actuators.
                            <br />
                            This project was linked to the Software Engineering class in the Analysis & Data Processing module.
                            We managed our project using the Agile method and we divided our project in 3 sprints of 3 weeks.
                            <br /><br />
                            <Row>
                                <Col md={6}>
                                    <img
                                        className="node-red d-block mx-auto"
                                        src={require(`../../assests/images/soa_ms.png`)}
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                    <h6 className="text-center !important"> <i>Architecture of the SOA project</i></h6>

                                </Col>
                                <Col md={6}>
                                    <img
                                        className="node-red d-block mx-auto"
                                        src={require(`../../assests/images/soa_project.png`)}
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                    <h6 className="text-center !important"> <i>Node-red interface</i></h6>

                                </Col>


                            </Row>


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
                            This course focused on the OneM2M standard that aims to give a general vision of IoT systems. This class
                            was supposed to help us during the Hackathon, as we had to use the OM2M platform.
                            Through Openclassroom and MOOC classes, we learned about the architecture of this standard. It is composed of an application
                            layer (Application Entities), a service layer (Common Services Entities) and finally,
                            a transport layer, linked to the physical transfers of data. It uses HTTP requests.
                            This course also introduced another protocol called MQTT (Message Queuing Telemetry Transport) based on a publisher-subscriber architecture.
                            This protocol is adapted to the systems mobility and is very useful in IoT.

                            {/* <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/1mj6QzKMF_Me-08sUTEua44W_u1xL_GDW/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>SDR report</a>
                                </button>
                            </div> */}

                            <br /><br />
                            <h1 className="course-subtitle">Cloud and autonomic management </h1>
                            <br />
                            The Cloud and Autonomic management class started with 2 lectures followed by pratical works.
                            We studied hosted virtual machines and containers using VirtualBox and Openstack .
                            The general purpose of these labs was to enhance our knowledge of concepts
                            and technologies for virtualization techniques. Our final objective was to deploy a NaaS (Network as-a-Service) provider,
                            to deliver virtualized network topologies
                            that include virtual hosts, routers, and communication functions.
                            <br /><br />
                            <img
                                className="cloud d-block mx-auto"
                                src={require(`../../assests/images/cloud.png`)}
                                alt=""
                                style={{ width: "35%" }}
                            />
                            <h6 className="text-center !important"> <i>Topology of the virtual network on Openstack</i></h6>
                            <br />
                        </h5>

                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Technical part
                        </h1>
                        <br /><br />
                        <h1 className="course-subtitle">Service  Oriented architecture</h1>
                        <h5 className="course-text2">
                            <br />
                            One of the challenges I faced was implementing all the scenarios we had imagined at the beginning of the project.
                            We had created too many and had to delete some during the course of the project to only keep 8 of those scenarios.
                            We used the Springboot java framework to create a class architecture where every actuator or sensor had a microservice associated.
                            For each actuator we used, we created an associated class in the model package of the
                            microservice.
                            First, I had some difficulties understanding the overall architecture of each microservice as well as the global microservice
                            that managed all the others and generated the response to the scenarios. We had to write the Setters,Getters, the API endpoints and the
                            Ressource file. Thankfully, thanks to an easy-to-follow tutorial from our professor, I was able to
                            construct one microservice and then reapply and personnalize this model to every other microservice.
                            Another challenge for this class was doing the Continuous Integration of our project.
                            We were supposed to manipulate Jenkins but we could not figure out how to configure and use this tool. That is why
                            we switched to GitHub Action since it was easier to write the automated test on this tool.

                        </h5>
                        <br />
                        <h1 className="course-subtitle">Middleware for IoT</h1>
                        <h5 className="course-text2">
                            <br />
                            This course well documented and supervised, so I had no major difficulty during the practical work sessions.
                            This only challenge occured at the beginning of the course, when we had to configure the CSE-MN and CSE-IN
                            servers. I also took some time understanding the architecture of OM2M with the Application Entities (AE), the containers, descriptors and data.
                            Since we used the Postman API , I also had to assimilate how to write a http request using this software.                            Postman API
                            Once I had understood the basic notions, I was able to apply it to all of the projects and practical works that used OM2M.

                            <br /><br />
                        </h5>

                        <h1 className="course-subtitle">Cloud computing </h1>
                        <h5 className="course-text2">
                            <br />
                            This concepts seen during the practical works were hard to apprehend because they were very new to me.
                            Initially, I was not able at first to grasp what were the differences between a container
                            and a hosted virtual machine. Comparing different containers was also challenging because of
                            my lack of knowledge on the technical terms such as containerization level or tooling.
                            Having us do some theoretical research was a good idea since it helped me tackle these concepts before using them.
                            Then, we created virtual machines and started 2 containers using Docker.
                            That allowed us to assess the operations and settings that can be done with containers.
                            We created images and instances of the VM and set up the network to enable two-way communication with the outside.
                            Finally, we discovered Openstack, a cloud computing platform managed via a web interface, 
                            that provides VMs that work on the server's machines.
                            This part was challenging for me from the start because I found the platform difficult to deploy and
                            to configure. The complexity lied in implementing Network virtualization and creating topologies with
                            virtual sub local networks, routers and virtual machines. The virtual gateway, meaning to connect 
                            back-end services and the front-endapplications, was especially hard to set up. I
                            really benefitted from the teacher's explanations during this part of the lab session.

                            <br /><br />

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
                            Postman to carry out HTTP REST requests. After using the OneM2M standard many times as well as the OM2M open-source platform,
                            I feel like I am now capable of implementing a full sensor network, which is an primordial skill when working the IoT field.
                            As for the Cloud & Autonomic computing class, it was probably the most challenging course of this module for me because it relied a lot on theoretical approach.
                            Having that much practice work was very useful to me, because we really took the time to explore the concepts with Openstack and Virtualbox and that allowed me to take in the main skills of the class.

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