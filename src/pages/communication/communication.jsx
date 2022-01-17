import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio";
import { style } from "glamor";
import { link } from "glamor";
import { NavBar, Nav, NavItem, Button, Modal, Row, Col } from 'react-bootstrap';

import Commcourses from "../../components/skillMatrix/commCourses"
import SkillMatrixComm from "../../components/skillMatrix/skillMatrixComm"



function Communication(props) {
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
                                src={require(`../../assests/images/IOT.svg`)}
                                alt=""
                                style={{ width: "25%" }}
                            />
                        </div>
                        <h1 className="course-header" style={{ color: theme.text }}>
                            Communication
                        </h1>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Descriptive part
                        </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br /><br />
                            The Communication course is divided in five sub-courses that revolve around the Internet of Things field.
                            It is a really compact module involving many topics such as wireless communication protocol,
                            software-defined network, energy for connected objects, and even security. They all fall under the umbrella of
                            systems of communication working towards networks of the future. Here is a table summarizing the courses of this module and their
                            content.
                            I will describe, in the next subsection the most relevent experiences in these courses.

                            <br /><br />
                        </h1>
                        <Commcourses />
                        <br /><br />
                        <h1 className="course-subtitle">Protocols for connected objects </h1>
                        <h5 className="course-text2">
                            <br />

                            <Row>
                                <Col md={7}>
                                    During this class, we first learned about the essential notions behind adaptative networks, such as the beamforming
                                    algorithm. Then the whole class formed groups of 3 or 4 students to present to our peers different protocols used in the IoT field: namely BLE, Nb-IoT, Zigbee Sigfox and Lora.
                                    The goal was then to discuss and compare all the protocols and in what situation they were the most adapted.
                                    My group and I chose Narrow-band-IoT since its was a protocol that I never heard of and that I wanted to learn about.
                                </Col>
                                <Col md={5}>
                                    <img
                                        className="nbiot-pic"
                                        src={require(`../../assests/images/nb-iot.png`)}
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                </Col>
                            </Row>
                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/1KPd_GarhgD5oorqAJ9SrSw3Al0lAz81L/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>Nb-IoT presentation</a>
                                </button>
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/1tMNzi8DWLBae6ty2VFIPKpET-lVbBjRc/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>Nb-IoT report</a>
                                </button>
                            </div>

                            We were also given another assignment: write a report about the different MAC layer protocols that exist for Wireless Sensor Network.
                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/1BfjOMKrcdjPBqcza0aowGIa7jkDRlERP/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>MAC layer report</a>
                                </button>
                            </div>
                            <h1 className="course-subtitle">Software-Defined-Radio </h1>
                            <br />
                            In this module, we had three practical work session that focused on Software Defined Radios (SDR)
                            and used the main concepts of telecommunication.  Instead of using hardware components
                            for frequency shift, demodulation, and other operations to receive a FM signal,
                            we can use a single device that can decode the signal with software.
                            The first lab was focused on the theory behind the demodulation of a FM signal. The rest of the practical work
                            was done with Gnuradio which is a tool made for SDR that can manipulate radio signals.
                            We first demodulated a recorded radio sample and were able go from a station to another.
                            To do so, we used different treatment elements, like a frequency shifter, band-pass filters, or frequency demodulators.
                            After treating the signal, we were able to obtain an exploitable audio signal that we could listen to.
                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/1mj6QzKMF_Me-08sUTEua44W_u1xL_GDW/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>SDR report</a>
                                </button>
                            </div>


                            <h1 className="course-subtitle">Emerging networks </h1>
                            <br />
                            This class presented and explained how the concepts behind Software Defined Networks (SDN), like mobility
                            or network virtualization. The class also tackled about other network paradigms such as Delay Tolerant Networking (DTN), the virtualization of network functions (NFV)
                            or the notion of IP multihoming with the LISP protocol.
                            The first practical work focuses on the implementation of a SDN network with a SDN controller and a SDN switch, the implementation of the virtual network on a SDN infrastructure and the configuration of the switches on Openflow.
                            The second lab consisted in using a networking application for networking control that would dynamically
                            write rules in switches routing tables depending on the topology of the network, its current state and the traffic going through nodes.
                            The goal of this lab was to illustrate the possibilities offered by the SDN paradigm for the development of new services. <br />
                            <br />
                            <h1 className="course-subtitle"> Energy for connected objects </h1>

                            <br />
                            This courses was made of theoretical classes focusing on energy harvesting and the optimization of an embedded system's energy . We studied
                            batteries, their constraints and how to select the most adapted one for a specific system.
                            We also followed a practical lab on Electromagnetic energy harvesting and wireless power transfer.
                            The antennas used in this lab sadly malfunctionned and we could not conduct the tests on our own.
                            We are supposed to have two more practical work at the AIME lab. However, at this day we have not completed these classes.<br /><br />

                            <h1 className="course-subtitle"> Security for network of connected objects </h1>
                            <br />
                            This module aims to introduce to us the implementation of security rules to tackle different attacks. We
                            were taught to identify the information to protect in IoT systems, with regards to the secutiy properties.
                            We had to produce a security analysis on our innovative project. After summarizing our project, we had to
                            characterize the goals of the potential attackers, identify the attackers capacities, analyze
                            the communication interfaces to identify weaknesses and finally propose counter-measures.
                            At this day, we did not have the practical work for this course.
                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/1sUp0AjoewWfJGg_jHhyNr2F6D1bBwhjH/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>Security report</a>
                                </button>
                            </div>


                        </h5>

                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Technical part
                        </h1>
                        <br /><br />
                        <h1 className="course-subtitle">Protocols for connected objects</h1>
                        <h5 className="course-text2">
                            <br />
                            This class was quite challenging for me since I was not initially comfortable with the routing and MAC
                            layer notions. When working on the Nb-IoT report and presentation, I made a lot of ressearch online to assimilate
                            how it worked. There were thankfully a lot of resources. However, as we were one of the first group to present, we quickly
                            realized we did not have the expected information, in particular in the physical layer and MAC layer, we confused the modulation process with
                            multiplexing process. We also did not calculate the energy consumption properly and calculated the power consumption instead.
                            However, after being corrected, I made sure I did not make similar mistakes in my MAC layer report by double-checking each concept I mentionned.

                        </h5>
                        <br />
                        <h1 className="course-subtitle">Software-Defined-Radio</h1>
                        <h5 className="course-text2">
                            <br />
                            The main challenge I faced for this practical work was time management. I had to work outside of the hours
                            allocated for this class to progress. I was not able to complete the entirety of the lab.
                            However, this practical work allowed me to learn abot GNU-radio companion which is a very useful tool in
                            signal processing.

                            <br /><br />
                        </h5>

                        <h1 className="course-subtitle">Emerging networks </h1>
                        <h5 className="course-text2">
                            <br />
                            This course was challenging because it used very complex concepts in my opinion. Even though I did
                            network courses in my previous years, I did not feel as well equiped as I would have liked.
                            During the practical works, I was able to pair with student computer science, which was great for me since
                            they were familiar with that field, and were here help me when I had difficulties or questions.<br /><br />
                            <h1 className="course-subtitle">Security for network of connected objects</h1>
                            <br />
                            This is the course where I had the less experience in. However, I felt like the classes were actually accessible for
                            all students. For the innovative project assignment , I was more in a support role and I relied on the group members from the computer science
                            background, as they were more comfortable.

                        </h5>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Analytic part
                        </h1>
                        <br />
                        <h1 className="course-subtitle"> Skills analysis </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br />
                            In retrospect, this module is the one where I struggled the most, as I felt I sometimes lacked
                            some knowledge, notably in SDR and Security. I felt like it was more adapted to students with a computer science background. 
                            Still, I think I pushed through and was able to acquire most of the skills linked to these courses. 
                            I relied a lot on learning with peers, because I was surrounded by students with experience in these fields.
                            I felt the most comfortable in the course about Energy for connected objects, since the 4rth year in embedded systems provided the same training.
                            I was thus able to put to use the skills I had acquired last year.  
                            Regarding the Protocol for connected Objects course, we contributed with our presentation to building the course.
                            I think being directly confronted with my peers and professor really enabled me to pinpoint what i had not understood or 
                            assimilated. Even though the security course was hard to apprehend theoretically, the practical work
                            really put into practice what we learned in lectures in an interractive and easy-to-follow way.
                            In conclusion, I felt that in general I had to attend the practice labs to be able to grasp the notions and put them in context.
                            <br/><br/>

                            
                        </h1>
                        <SkillMatrixComm />
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
                            The Communication course was complex because it condensed a lot of new concepts and courses that seemed,
                            at first, to have little in common. However, by the end of the semester I realized they were more connected than 
                            I initially thought and were essential notions to take into account when designing an IoT system. 
                            I appreciated the effort to integrate the security course in the Innovative project.
                            Since a portion of this module was done at the end of the semester, like the security and energy labs, we were a bit
                            rushed and we were not in the best conditions to fully commit ourselves to this training. 
                            This knowledge and training will be extremely useful to me in the near future since my apprenticeship revolves 
                            around the devopment of wireless protocols, especially the Bluetooth Low-Energy protocol.
                            This is why I made sure to invest as much energy as I could during this module.
                        </h1>
                        <Footer theme={props.theme} />
                    </Fade>
                </div>
                {/* <SkillSection theme={theme} /> */}
            </div>
        </div>
    );
}
export default Communication;