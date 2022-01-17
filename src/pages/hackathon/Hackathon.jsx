import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio";
import { style } from "glamor";
import { useHistory } from "react-router-dom";
import "./Hackathon.css"
import { link } from "glamor";
import { NavBar, Nav, NavItem, Button, Modal, Row, Col } from 'react-bootstrap';
import { Player } from 'video-react';
import video from '../../assests/video/demo_hackathon_team_haka.mp4';
import "video-react/dist/video-react.css";

import SkillMatrixHack from "../../components/skillMatrix/skillMatrixHack";
import KetiSlider from "../../components/KetiSlider/ketiSlider";
import HackathonSlider from "../../components/hackathonSlide/hackathonSlider";


function Hackathon(props) {
    const theme = props.theme;

    const history = useHistory();

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
                                className="om2m-pic"
                                src={require(`../../assests/images/growing-plant.png`)}
                                alt=""
                                style={{ width: "40%" }}
                            />
                        </div>

                        <h1 className="course-header" style={{ color: theme.text }}>
                            Hackathon
                        </h1>
                        <h1 id='D-hack' className="course-title" style={{ color: theme.accentColor }}>
                            Descriptive part
                        </h1>
                        <Row>
                            <Col md={7}>
                                <h5 className="course-text2" style={{ color: theme.text }}>
                                    <br />
                                    <h2 className="course-subtitle">Context and background</h2>
                                    The Hackathon is part of the Analysis and data processing, business applications module even though it had more to do with the Middleware & Service module.<br />
                                    The 2021 Hackathon took place from 30/09/2021 to 15/11/2021 and was organized and managed by <b>KETI</b> (Korea Eletronics Technology Institute) and <b>ETSI</b> (European Telecommunication Standards Institute).
                                    This international competition aimed to promote the OM2M standard. Divided in group of 4 or 5 students from different backgrounds, our goal was to develop an IoT solution to help citizen by solving social and/or environmental issues.
                                    The solution had to be build with any of the oneM2M platforms.<br />
                                    Our group was composed of 2 students from the Electronic department,
                                    1 from the Physics department and 1 from Computer Science.
                                    The idea came to us when we thought of a solution that could help reduce the waste of natural ressources. From that, we thought naturally about the water used in agriculture and gardens.
                                    Our vision was to design a system that would reduce water consumption and manage the growth of plants or even crops in the long run. <br />
                                    That is how we settled on the following solution: an automated watering system that would allow to monitor the surroundings and the state of a plant to predict and activate its watering.<br />
                                    To do so, we used several sensors and one actuator to switch on the watering automatically or on command.
                                </h5>
                            </Col>
                            <Col className="d-flex-column align-items-center" md={5}>
                                <KetiSlider className='mb-5 mt-5' />
                                <div className="mt-5">
                                    <img
                                        className="d-block mx-auto"
                                        src={require(`../../assests/images/om2m.png`)}
                                        alt=""
                                        style={{ width: "50%" }}
                                    />
                                    <div className="">
                                        <img
                                            className="d-block mx-auto"
                                            src={require(`../../assests/images/etsi-logo.svg`)}
                                            alt=""
                                            style={{ width: "50%" }}
                                        />
                                    </div>
                                    <div className="">
                                        <img
                                            className="d-block mx-auto"
                                            src={require(`../../assests/images/keti-logo.png`)}
                                            alt=""
                                            style={{ width: "45%" }}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br />
                            <h1 className="course-subtitle">Personal contribution </h1>
                            Our goal was to divide efficiently the different tasks according to the members' background. <br />
                            Time management was essential since we only had about one month to complete not only the project but deliver a hackster.io project describing step by step how to build the IoT solution as well as a demonstration video.<br></br>
                            Since I come from the Embedded Systems curriculum, I was in charge of the Hardware part, writing and implementing the Application Dedicated Node that aimed to retrieve and send data via OM2M.
                            <br />I ended up also contributing to the Middle Node by modifying the monitor java script code that was deployed on the Raspberry Pi. With Agathe Lievre, another member of the team coming from an Electronics background, we made the node-red flow
                            to create the interface of our system. We also deployed and tested the entire setup of the system to make sure the system worked correctly. We were also in charge of filming and editing the demonstration video of our solution.
                            After that, I wrote the Readme and the hackster.io to explain the setup, the wiring and the use of this system.
                            <br />
                            <br />
                        </h1>
                        <h1 className="course-subtitle">Results</h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            At the end of this competition, we managed to implement and deploy the main functionalities we aimed for. <br />
                            Our system was able to retrieve data such as temperature, humidity, light to analyze if the plant studied had to be watered.
                            The user could open or close the solenoid valve that controlled the water inlet from the node-red interface.
                            The system could also operate in autonomy: if the humidity was too low, the watering was automatically turned on. <br />
                            We also monitored with an ultrasound sensor the distance variation with the plant to determine if it was growing healthy and send on the user interface a warning otherwise. <br />
                            We were able to display on graphs the real-time data of every sensor as well as data such as the weather forecasting, which could help the user anticipate when of if the plants need watering.
                            The setup and all the features of our IoT solution in the following video as well as the presentation we did for the Hackathon jury:
                            <br />
                        </h1>
                        <Row>
                            <Col className='' md={6}>
                                <div className="portfolio-hackster-btn-div">
                                    <button
                                        {...styles}
                                        className="button-hackster"
                                    >

                                        <a className='a-hack' href="https://www.hackster.io/haka/keti-hackathon-smart-crop-monitoring-and-growth-management-877d14" target='Blank_' nonunderlinedhyperlink>Hackster.io</a>
                                    </button>
                                </div>
                                <HackathonSlider />
                            </Col>
                            <Col className='d-flex align-items-end' md={6}>
                                <Player className='vid '>
                                    <source src={video} />
                                </Player>
                            </Col>
                        </Row>
                        <br /><br />
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Technical part
                        </h1>
                        <br/><br/>
                        <Row>
                            <Col md={7}>
                                <h1 className="course-text2" style={{ color: theme.text }}>
                                    First of all, here is a quick summary of our project: <br /> Sensors were wired to an ESP38266 board on the Application Dedicated Node side. This node had to connect and send data via WiFi to the Middle Node or Gateway, which in our case, was a Raspberry Pi.
                                    After having collected the data, the RaspPi had to send the gathered information to the OM2M platform. The node-red flow deployed on the Infrastructure Node could then send http GET requests to retrieve the sensors data and display it on the dashboard.
                                    <br /> Since the user could control the system on the interface, the node-red had to be able to send POST requests to the ESP8266 via the OM2M platform to control the water actuator.<br/><br/>
                                </h1>
                            </Col>
                            <Col md={5}>
                                <img
                                    className="setup-pic"
                                    src={require(`../../assests/images/setup_hackathon.jpeg`)}
                                    alt="Setup of our system"
                                    style={{ width: "100%" }}
                                />
                                <h6 className="text-center !important"> <i>Setup of our IoT system</i></h6>
                            </Col>
                        </Row>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            This project was very challenging technically for me since I had to assimilate a new concept, middleware, and more precisely, OneM2M.
                            Since we had practical work in the Middleware & Services course, I was able
                            to assimilate the main notions of that technology. A lot of documentation and code examples
                            were available on the internet, which made the coding easier.

                            Since I had been assigned the Arduino code and the handling of the hardware, I was confronted to some difficulties with a few electronic components, in particular the solenoid valve, the water flow sensor and the analog multiplexer.
                            Thankfully, I had experience from previous projects handling the ESP8266 which was the microcontroller we used in this project. <br /> The multiplexer needed soldering, and I was able to do it without major difficulties since I had done extensive soldering during my 2021 summer internship.
                            I took a long time making the solenoid valve work as I did not understand that it needed a lot of water pressure to work properly. I disassembled the module to understand how it operated and I lost a lot of time experimenting with the voltage generator before
                            coming the conclusion that i needed to connect it to a hose for the water to go through with enough pressure. <br />Concerning the water flow, I was sadly not able to make it work during our project and we had no time to reorder one in time. I also had some difficulty working with the relay that controlled the valve since I was not
                            sure about the circuit.<br /><br />

                            When making the node red, I had a hard time parsing the response from the http requests made the the OM2M platform. Indeed, the monitor java script loaded in the Raspberry Pi was not sending the data correctly, in other words in an object that would be easily parsed in a function. Agathe and I had to modify
                            the Java script to send coherent messages. We first tried parsing the messages as they were sent but we quickly realized it was easier to change the monitorjs directly. Understanding the JSON format took us some time and a member of another group kindly stepped up to explain to us how to proceed since he had experience with that format.
                            The next problem rose when we had to process the ultrasound data which aimed to measure whether or not the plant had grown over a period of time. Since the ESP8266 only returned a raw value, the node-red had to interpret the data. Coming up with a way process the height data took a lot of reflection. Indeed, the node-red did not provide
                            node to do an esay comparison. To solve this problem, we had to apply a filter node that would block any transmission of messages unless the value read changed. We also had to add a delay to let the system the time to receive the data. Even though this solution was not optimal and could have been maybe solved in a more "cleanly" manner, it was sufficient for our application<br />

                            The hardest part was deploying the entire system with the circuit, the Raspberry Pi and the node-red because each time an error would occur, it was really hard to pinpoint the cause.<br />
                            To give an example, the last day of the competition, I had the whole system working perfectly and after relaunching the ESP8266 with the same code, the soleinoid valve would not open anymore to let the water go through. <br />
                            Even though I reckoned the problem came from the hardware, I had to isolate every sub-system to check for short cicuits or wrong wiring. Turns out that it was the relay that had blown. Thankfully, I had another relay at my disposal and I was thus able to replace it<br />

                            Throughout the course of this project, the most critical aspect was the lack of time. That led us to make concessions and only focus on the essential features.
                            The strategy was to assign an order of priority to each task or functionality so that we did not lose too much time on functions that were not indispensable. For example, when the water flow sensor did not respond
                            to testing, I quickly decided to remove it from the project and only go back to it if I had extra time after finishing my other tasks.<br /><br /><br />
                            In conclusion, I was confronted to many problems at every step of the integration of our solution. Overcoming them
                            sometimes proved to be time-consuming. However, it allowed me to be challenged and solve problems on my own since this project was done in full autonomy.

                        </h1>
                        <br /><br />
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Analytic part
                        </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br/><br/>
                            The hackathon, was one of the most demanding projects of the Innovative Smart Systems syllabus. Not only it mobilised new skills and knowledge but the deadline and schedule were extremely tight. <br />
                            First, finding an innovative idea never been done before proved to be difficult. After having chosen our subject, we realized that
                            smart watering systems had been achieved and were even common. We had to add functionalities to our project to increase the added value of our solution.
                            However, we had so little time that we could not implement some of those functionalities, such as the prediction of water consumption for a given species of plant. <br />We also
                            initially wanted to compare the growth of several representative of one plant species in different locations to be able to communicate what that specific species needed to grow healthy.
                            In my opinion, it is a shame we were not able to invest more time to have a more complete project and tackle more features. <br />
                            Nevertheless, it was for me also one of the most formative experience this year. <br />
                            In terms of technical application, it touched upon important notions that we used in many other projects is the ISS curriculum. We notably learned to implement
                            easily a dashboard via node-red to display data and control real actuators. This skill was later used in courses like Smart Devices and Service-Oriented Architecture, and the experience from this Hackathon was useful.
                            I aquired knowledge in the oneM2M standard as well as learned how to use the OM2M platform through Arduino and Postman. I thing that knowing
                            this standard could be useful in my future career. <br />
                            Since I have worked on every aspect of the system: the hardware, the gateway, the interface, the redaction of report and more, I have acquired a lot of skills and I have understood the system in its
                            entirety.

                            <br /><br />
                            Like I mentionned before, the amount of work to accomplish while still simultaneously following other courses really trained me work under pressure.
                            The main lesson I take from this experience is how time management is important. If I could redo this project from the start, I would try to divide the time allocated to each task more efficiently.
                            I would also have taken less time to really begin the project. I think we took too much time discussing our ideas for features instead of trying to deploy the hardware right away. <br />
                            Even though the technical skills I acquired are valuable, I think the management strategy is even more important. In any engineering job, I will probably
                            be confronted with projects and tasks with little time to complete them. Though experience like this one, I can get used to these constraints and better prepare and manage projects without letting the stress get to me.<br /><br />
                            You can find below the skills matrix analyzing my acquired training for this project. <br /><br />

                        </h1>
                        <SkillMatrixHack />
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

                        <Footer theme={props.theme} />
                    </Fade>
                </div>
                {/* <SkillSection theme={theme} /> */}
            </div>
        </div>
    );
}
export default Hackathon;