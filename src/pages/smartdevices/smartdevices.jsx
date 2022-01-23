import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio";
import { style } from "glamor";
import { link } from "glamor";
import { NavBar, Nav, NavItem, Button, Modal, Row, Col } from 'react-bootstrap';

import SDcourses from "../../components/skillMatrix/sdCourses";
import AimeSlider from "../../components/aimeslider/aimeslider";
import PCBSlider from "../../components/aimeslider/pcbSlider";
import SkillMatrixSD from "../../components/skillMatrix/skillMatrixSD"



function Smartdevices(props) {
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
                                className="smartdevice-pic"
                                src={require(`../../assests/images/SD.JPG`)}
                                alt=""
                                style={{ width: "20%" }}
                            />
                        </div>

                        <h1 className="course-header" style={{ color: theme.text }}>
                            Smart Devices
                        </h1>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Descriptive part
                        </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br /><br />
                            The Smart Devices course is divided in 5 sub-courses that revolve around the conception and use of a smart sensor, in our case a nano-based gas detector.
                            This module started from the fabrication of the gaz sensor in the AIME lab, and finished by harnessing of the data measured post-treatment.
                            That included designing the electronic circuit to retrieve the data as well as implementing the arduino code and interface associated.
                            You can find a summary of the courses content in the below table.
                            The next subsection will focus on the most relevent experiences in more detail:
                            the nano-particle deposition to create the sensor, and the MOSH project.
                            <br /><br />
                        </h1>
                        <SDcourses />
                        <br /><br />
                        <h1 className="course-subtitle">Creating a gas sensor </h1>
                        <h5 className="course-text2">
                            <br />
                            Gas sensors are used in many fields like medecine or the automotive industry. Even though analyzers (analytical instruments) can detect gases, there
                            is another type of sensor named chemical sensors that are less expensive, less cumbersome and have a lower power consumption than the former devices.
                            They are however very selective in the type of gases they can each detect. This project focuses
                            on semiconductor-type metal oxyde sensors, since they integrate well into electronics circuits.
                            <br />
                            This module started with a two-days experience in the AIME lab that culminated in the creation of a chemical nano gas sensor based on WO3 nanoparticles.
                            We were able to assimilate and apply the different processes involved in the making of this device, starting with
                            the deposition of tungstene nanoparticles on a silicum board, whose resistance vary when detecting ammonica and ethanol. We then characterized
                            the sensor electronically under controlled atmosphere. The final part of this course was the design
                            of a PCB to use our sensor.
                            <br /><br />
                            The process of producing this gas sensor is divided into 3 major steps:
                            <br /><br />
                            <Row>
                                <Col md={7}>
                                    <li>The <b style={{ color: theme.secondaryText }}>fabrication</b> of the microelectronic devices:</li>
                                    This process gathers steps such as photolithographies that are used to fabricate the buried-heater,
                                    the contact opening and the electrodes. Photolithography is used to carve patterns on
                                    the bulk of a substrate or a silicium wafer using a mask. This allowed us to obtain the component on the ajacent image.
                                    This device is composed of a n-doped silicium which is a buried-heater, an Aluminium resistor that can
                                    be used as a surface heater and 2 interdigitated electrodes where we will put the layer of nanoparticles.
                                    These electrodes will later be used as sensors that react to the gaseous environment. We finally assembled the chip to a TO5 socket
                                    with epoxy glue and wire-bonded the contact pas as shown on the second image<br />
                                    <li>The <b style={{ color: theme.secondaryText }}>Synthesis and integration</b> of the WO3 nanoparticles:</li>
                                    The following process was the synthesis of the WO3 nano-particles and the deposition on the
                                    wafer. We first prepared and measured precisely the solution.
                                    Once we obtained the particles by leaving them in an oven for an hour or so, we used Dielectrophoresis
                                    to deposit them on the chip. To do so, we put a drop of our solution with the nano-particles on
                                    the entire sensor circuit, and then submitted the the intergititated combs to an electrical field.
                                    The particles were thus only fixed to this sensor area when we rinced the device in water.<br />
                                    <li>The <b style={{ color: theme.secondaryText }}>Electrical characterization</b> of the sensor under controlled atmosphere:</li>
                                    We finally evaluated our sensors by checking the variation of their resistance when in contact
                                    with ammonia and ethanol. We generated I/V curves to construct the datasheet of the sensor.


                                </Col>
                                <Col md={5}>
                                    <img
                                        className="aimesimple-pic"
                                        src={require(`../../assests/images/AIME.PNG`)}
                                        alt=""
                                        style={{ width: "80%" }}
                                    />
                                    <h6><i>Schematic of the gas sensor</i></h6>
                                    <img
                                        className="aimesimple-pic mt-5"
                                        src={require(`../../assests/images/AIME_wired.PNG`)}
                                        alt=""
                                        style={{ width: "80%" }}
                                    />
                                    <h6><i>Wired gas sensor with the corresponding pins</i></h6>
                                </Col>
                            </Row>
                            Below are some pictures taken during the project:
                            <br /><br />
                            <AimeSlider></AimeSlider>
                            <br /><br />
                            Once the AIME experience was over, we gathered the data from all the sensors created to produce a datasheet.
                            You can find the datasheet made by my group in the link below:
                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/14PTsQ2EgSFYrGZLPyuVCkLQNiqoY_aQL/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>Datasheet sensor</a>
                                </button>
                            </div>
                        </h5>
                        <h1 className="course-subtitle">MOSH mini-project  </h1>
                        <br />
                        <h5 className="course-text2">
                            After the AIME internship, we started the MOSH Mini-Project that focused on interfacing and using the gas sensor.
                            We could select a difficulty level for this course. We could either follow directed labs or carry out the full project in autonomy.
                            Since my team was composed of two AE students, we quickly opted for the second option.<br />
                        </h5>
                        <br />
                        <h1 className="course-subtitle-sd"> Making a smart sensor </h1>
                        <br />
                        <Row>
                            <Col md={7}>
                                <h5 className="course-text2">

                                    Our first step was making a small circuit using a LoRa module (RN2483) and an ESP32 to send to a Network server called
                                    The Things Network (TTN). We connected an industrial gas sensor (Grove) to the ESP32 board and proceeded
                                    sending the data to TTN via the antenna on the roof of the GEI.<br />
                                    We then wrote the full code meant to retrieve the different values provided by the sensor on the Arduino IDE. Since we did not have the real AIME gas sensor,
                                    we adaptated it to both the Grove sensor and the nano-sensor. We added a PID controller connected
                                    a PWM signal connected to the sensor pin through a transistor to maintain the the silicium resistor (buried-heater) to a temperature of 200°C.
                                    Once we successfully sent the sensor value, we created a dashboard with Node-red to visualize the data and warn the user
                                    if the gas level exceeds a threshold level defined in the Arduino code.

                                </h5>
                            </Col>
                            <Col md={5}>
                                <img
                                    className="lora-pic mt-5"
                                    src={require(`../../assests/images/lora.jpg`)}
                                    alt=""
                                    style={{ width: "80%" }}
                                />
                                <h6><i> RN2483 LoRa chip connected to the Grove sensor</i></h6>
                            </Col>
                        </Row>
                        <br />
                        <h1 className="course-subtitle-sd"> Circuit arrangement and PCB </h1>
                        <h5 className="course-text2">
                            <br />
                            We then had to focus on designing the analog signal processing portion to retrieve the data coming from
                            our gas sensor. This part was done during the Analog Electronic Labs and was conducted on LT-Spice, a simulation software made for analog circuits.
                            We had to adapt the input impedance of the microcontroller, since it is significantly lower than the sensor's output impedance.
                            As stated before, the sensor's output is a resistance variation expressed as a current variation.
                            Its order of magnitude is about 100nA, so it is impossible to measure it.
                            To address this problem, we designed an adaptation circuit that posesses filters and converts the input current in output voltage.
                            We can thus obtain a voltage that belongs to the ADC range of the ESP32. <br />
                            After designing that circuit, we had to integrate it in a Printed Board Circuit (PCB) gathering all the
                            components. We included a buzzer that turns on when gas level is too high and a transistor to control the temperature of buried silicum heater mentionned in the previous part.
                            We also added a connector to connect the sensor grove on the PCB.
                            We used the open-source software Kicad to design the PCB. <br /> <br />
                            Find below the PCB we produced:
                            <PCBSlider />
                            You can find the readme, the Kicad files, the code and the Node-red flow in the link below:
                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet"
                                >

                                    <a className='a-hack' href="https://github.com/MOSH-Insa-Toulouse/2021_2022_LIEVRE_NGUYEN" target='Blank_' nonunderlinedhyperlink>Project Github</a>
                                </button>
                            </div>
                        </h5>

                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Technical part
                        </h1>
                        <br /><br />
                        <h1 className="course-subtitle">CAD, manufacturing and integration of nano-technology sensors (AIME) </h1>
                        <h5 className="course-text2">
                            During all the processes of this internship, we were fully guided and supervised by teacher, so we did not encounter
                            major problems. However, at the end of the deposit of nano-particles, when we observed the interdigitated electrodes, we did not obtain
                            the expected results. The nano-particles were supposed to arrange themselves into long sticks between the combs but we had very few particles.
                            It was probably because the process was a bit modified this year. The concentration in tungstene of the solution was decreased compared to the last years.
                            We also let the devices rest in the oven only 1 hour instead of 2 after the deposit. That may have shortened the reaction of the nano-particles too much.
                            We learned that, in chemical processes, changing the parameters, even by a small margin, can have big consequences.<br /><br />

                            The second part of this module was designing and routing the Printed Circuit Board to exploit our sensors.
                            Since my 2021 summer internship was hardware oriented, I had already produced PCBs and designed analog circuits. That experience was really helpful for this part.
                            We had to create footprints for some components like the AIME sensor, which took a lot of time. Since we added extra
                            components on the shield, routing was made a little harder, but we managed to accomplish it nevertheless.

                        </h5>
                        <br />
                        <h1 className="course-subtitle">Microcontrollers and Open-Source Hardware, Embedded IA (Ms&OSH) </h1>
                        <h5 className="course-text2">
                            During this course, we worked in almost full autonomy. We had some difficulties using the RN2483 modules since they had been welded by students,
                            some were not working properly. We also took some time to understand what pins we had to use and the different AT commands
                            to send to the module but thankfully, we found the datasheet of the device. Since I come from an Embedded System
                            background, I had used the ESP32 a number of times as well as the Arduine IDE. That greatly accelerated
                            the process of coding. I took upon myself to code the data acquisition system.
                            I had some problems implementing the PID controller since I had never done it, but there were resources available online
                            and another student helped me understanding it. However, since we could not test it on the real sensor,
                            I could not fully validate this code. <br /><br />
                        </h5>

                        <h1 className="course-subtitle">Introduction to sensors </h1>
                        <h5 className="course-text2">
                            This was for me the hardest part of this course because even though I had read many datasheets during these last 5 years, I had never made one.
                            To do so, we first selected the best results out of the 3 groups that worked in the same slot in AIME. We worked together to construct the datasheet by
                            taking inspiration from the datasheet made last year.<br /><br />

                        </h5>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Analytic part
                        </h1>          
                        <br />              
                        <h1 className="course-subtitle"> Skills analysis </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br />

                            The Smart devices course required a lot of skills, from physics knowledge to electronics skills and software skills.
                            I felt as I, and other students coming from my curriculum, were advantaged in this module since we mainly focused on designing
                            analog circuits and programming microcontrollers. This is why, this module was one of the most enjoyable for me.
                            It allowed me to strengthen and reapply skills aquired not only in my speciality but also in during my internship.
                            The datasheet redaction was the hardest part for me and working in a group and exchanging ideas really helped me.
                            I feel like the part where I was the most invested was the microcontroller project because I really enjoy low-level application.
                            As for the implementation of the interface using Node-red, I felt comfortable since we have used it in many projects and modules.
                            I had to choose, I would say the most challenging task was making the datasheet since it was very theoretical and tedious.
                            We also did not have the time to analyze the power consumption of our device. It is the only missing aspect in our project.<br />
                            The skills matrix analyzing my acquired skills for this project can be found below: <br /><br />
                        </h1>
                        <SkillMatrixSD />
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
                            I can conclude by saying this course was one of the most interesting projects of the ISS curriculum.
                            It really embodied the IoT field since we followed the entire process of fabricating a sensor with nano-particles,
                            to designing the circuit to retrieve its data, to finally sending it via LoRaWAN to a server and
                            displaying it on a dashboard. This is during this module that I fully realized the extent and variety
                            of the skills I gained during my 5 years at INSA. The fact that we could choose the level of difficulty
                            was in my opinion a great idea because the project could be adapted to every background.
                            We were able to produce a state-of-the-art gas sensor, which was extremely impressive to me and
                            I feel like all the skills I gained from this experience will be useful in my career.
                            Another aspect of this module that I really appreciated was the coherence in its different courses.
                            They were all complementary and served a common objective. We even had an external speaker come teach us how to use Kicad and Git.
                            Since these software are widely used in the professional world, learning the good practices can come in handy.
                            However, it was a really packed module, and the schedule was tight, so much that we did not have the time to tackle the energy consumption aspect of our system which
                            is really critical when designing any IoT system. I was also a little disappointed that we could not neither test an AIME sensor, nor really manufacture the PCB because of time constraints.
                            That means we had to use an already existing sensor and could not confirm our choices and circuit.
                            In retrospect, the Smart Devices class was a very formative and valuable experience where I could challenge my skills to practice and acquire new ones.


                        </h1>
                        <Footer theme={props.theme} />
                    </Fade>
                </div>
                {/* <SkillSection theme={theme} /> */}
            </div>
        </div>
    );
}
export default Smartdevices;