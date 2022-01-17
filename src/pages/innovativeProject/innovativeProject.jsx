import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio";
import { style } from "glamor";
import { link } from "glamor";
import { NavBar, Nav, NavItem, Button, Modal, Row, Col } from 'react-bootstrap';
import InnCourses from "../../components/skillMatrix/innCourses"
import SkillMatrixInn from "../../components/skillMatrix/skillMatrixInn"



function InnovativeProject(props) {
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
                                className="innovative-pic"
                                src={require(`../../assests/images/innovative-img.PNG`)}
                                alt=""
                                style={{ width: "28%" }}
                            />
                        </div>

                        <h1 className="course-header" style={{ color: theme.text }}>
                            Innovative Project
                        </h1>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Descriptive part
                        </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br /><br />
                            The Innovative project module is divided in 3 courses and combines the highest hourly volume of the whole
                            syllabus. Since it gathers the English course, the Innovative project and the portfolio, it can be considered as
                            the most important from all other modules.
                            The innovative project and english class are joined and both last for the entire semester.
                            The goal is to propose a solution to an issue raised by an instrustrial client by a INSA tutor.
                            This module is concluded by a final presentation in english with the demonstartion of the solution.
                            Finally, my portfolio is presented in this website.
                            You can find a summary of the courses content in the below table:
                            <br /><br />
                        </h1>
                        <InnCourses />
                        <br /><br />
                        <h1 className="course-subtitle">RTK, you are not lost </h1>
                        <br /><br />
                        <h4><b>Background</b></h4>
                        <h5 className="course-text2">
                            <Row>
                                <Col md={7}>

                                    Helium-filled weather balloons are used to retrieve meteorological data.
                                    To collect this data, we have to send them up to 30 km from their launch location.
                                    The problem comes when the balloons deflate and land on the ground in unpredictable places.
                                    Researchers need to be able to geolocate them with precision so they can retrieve the payloads attached to
                                    the balloons. If they fall in the middle of a forest, the precision of a few meters, obtained
                                    from the usual GPS technology, is not enough. <br />
                                    This is the issue raised by our tutor, Professor Guillaume Auriol. This project was developped in collaboration with
                                    a Paul Sabatier team led by professor Hassan Sabbah. They plan to send said balloon before the end of summer 2022.
                                    The solution proposed was a <b style={{ color: theme.secondaryText }}>Real-Time Kinetics (RTK)</b> solution that has an accuracy of a few centimeters.
                                    Our group gathered 3 students from AE and 2 from IR. Our project consisted of doing an in-depth study of this technology and then evaluating low-cost RTK module, the ArduSimple starter kit LR as well a
                                    retrieving the position of the moving station called <b style={{ color: theme.secondaryText }}>rover</b>.


                                </Col>
                                <Col md={5}>
                                    <img
                                        className="simpleRTKkit-pic d-block mx-auto"
                                        src={require(`../../assests/images/rtk2b.png`)}
                                        alt=""
                                        style={{ width: "65%" }}
                                    />
                                    <h6 className='text-center'><i>simpleRTK2B LR kit from ArduSimple</i></h6>
                                    <img
                                        className="payload-pic d-block mx-auto"
                                        src={require(`../../assests/images/rtk_payload.PNG`)}
                                        alt=""
                                        style={{ width: "70%" }}
                                    />
                                    <h6 className='d-flex text-center'><i>3D view of the expected payload sat attached to the balloon</i></h6>
                                </Col>
                            </Row>
                            <h4><b>Personnal contribution</b></h4>
                            For this project, we all started by ressearching the subject. We had to understand how a RTK system worked and what were the elements behind that technology.
                            Then, naturally, I stepped up to work on the configuration the SimpleRTKB kit composed of a base station and a rover station. I mostly contributed in
                            handling the hardware, coding the ESP32 to retrieve the position in a database and creating a html page to display the map. This is where all the projects I had done
                            using microcontrollers came in handy.<br /><br />

                            <Row>
                                <Col md={5}>
                                    <img
                                        className="rtksol d-block mx-auto"
                                        src={require(`../../assests/images/rtk-sol.png`)}
                                        alt=""
                                        style={{ width: "100%" }}
                                    />
                                    <h6 className='text-center'><i>Overview of our RTK solution</i></h6>
                                </Col>
                                <Col md={7}>
                                    <h4><b>Results</b></h4>
                                    At the end of our semester-long project, we were able to achive initial objectives, by obtaining a geolocalization accuracy of 2 cm with our RTK kit.
                                    We also were able to retrieve the rover's position in real-time on a database with firebase. We used these data to display it on a webapp based on Mapbox. On that same map
                                    we could enter the fixed position of the base station so to have both the base an rover position on the same map.
                                    We also wrote a compleye state-of-the-art to explain the distance measurement method used by RTK systems in comparison
                                    with other positionning methods (GPS and DGPS). <br/><br/>
                                </Col>
                            </Row>
                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://docs.google.com/document/d/1Y4JSgekA2UeC613lDVzHw0WAxAgTI9DbGCUSc14V840/edit?usp=sharing" target='Blank_' nonunderlinedhyperlink>Project report</a>
                                </button>
                            </div>
                            <br /><br />
                            <img
                                className="map d-block mx-auto"
                                src={require(`../../assests/images/map-rtk.png`)}
                                alt=""
                                style={{ width: "70%" }}
                            />
                            <h6 className='text-center'><i>Map interface to locate the base (blue) and the rover (red)</i></h6>
                        </h5>
                        <h1 className="course-subtitle"> Portfolio  </h1>
                        <br />
                        <h5 className="course-text2">
                            At the end of the semester of ISS, we had to create a portfolio gathering all the training and experiences of the 5th year.
                            You could either do a conventional document in electronic form or a website in any language. I figured it was a
                            great opportunity to do something that could be useful in my future and acquire new skills. I had
                            never done any web development, so I really started from scratch for this project.
                            <br /><br />
                        </h5>

                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Technical part
                        </h1>
                        <br />
                        <h1 className="course-subtitle">Innovative project</h1>
                        <h5 className="course-text2">
                            We encoured many technical challenges during this project. The first was confronting ourselves
                            with the theoretical concepts of Real-Time Kinematics. A RTK system is made of 2 entities: a base station, which is in a fixed position,
                            and a rover station, which is the beacon we need to locate. In our case, the rover is placed
                            in the payload of the helium balloon. They communicate through an Xbee module that has a range of 15 km. The rover station estimates its position with satellites and then sends
                            it to the base which applies a complex phase correction and then resends to the rover the corrected position. This
                            is how an accuracy of a few centimeters is attained. Understanding the archicture of RTK took us some time as most of the
                            documentation was ressearch articles that took long to apprehend.
                            We also had a major difficulty concerning the configuration of the RTK kit.
                            We followed the exact instructions from the manufacturer to configure the devices and yet it was clear they were not exchanging
                            corrections. They located themselves independently with no RTK corrections. I consulted forums, communicated with the Paul Sabbatier team and
                            watched demonstration videos to try to make it work. I tried to use a sniffer to decypher the frames going in and out of the devices but since we
                            only had 2 Xbee modules, we could not observe the two-way exchange. Moreover, the frames were not easy to interpret, event with device datasheet.
                            With the help of a student of another group, I finally identified the correct configuration that
                            enabled an RTK mode. Obtaining that mode was the mode difficult thing we had since we could not figure out what was wrong in our configuration. We had to both specify
                            the kind of frames going in and out of each device and be in an open-sky setting to achieve that. We also had to entered the exact GPS coordinates
                            of the base in the dedicated software called U-center.
                            I then used an ESP32 connected to the base to retrieve the corrected position of the rover in the NMEA format. I could then
                            parse the frames and send it via WiFi to a database. I then used the database and an API called Mapbox to display their position on the same map.
                            I had to learn how to proceed with peers and internet resources since I had never used firebase and mapbox. <br /><br />

                        </h5>
                        <br />
                        <h1 className="course-subtitle">Portfolio </h1>
                        <h5 className="course-text2">
                            The main challenges when doing the portfolio was coding in React, which is the framework I chose to create this website.
                            Since I had no idea how to proceed, I started by looking for ready-to-use templates. Most of the ones I found did not
                            match exactly the layout I had in mind, so I had to personnalize it. I took an open-source template on github but modified it to
                            correspond to my need. It was a very demanding exercise because I had to assimilate React in a small period of time, while having
                            to balance all my other courses and projects. Since I did not know the good pratices, I made many trials and errors before
                            I was comfortable. I managed to achieve almost all that I wanted, by relying on online documentation and forums as well
                            as exchange with other students that had already some experience creating websites. <br /><br />

                        </h5>

                        <h1 className="course-subtitle">English </h1>
                        <h5 className="course-text2">
                            My main challenge for the English course was bettering my speech fluidity, and my ability to draw in an audience.
                            These skills are hard to master for me, but with the several oral presentation and exercises we did, I think I improved my
                            skills in this field. I also chose to write my portfolio in english.<br /> <br /> <br />

                        </h5>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Analytic part
                        </h1>
                        <br /><br />
                        <h1 className="course-subtitle"> Skills analysis </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br />
                            We can note that the expected skills in this module are more oriented towards resolution and soft skills.
                            In retrospect, I gained many technical skills during these projects but I also acquired essentiel skills like project
                            management or report writing.
                            During the Innovative project, I assumed the role of coordinator, by reflecting on the different tasks to accomplish and
                            the middle-ground objectives and solutions. By doing so, I improved my communication skills as well a my work method.
                            We were able to produce a technical solution to obtain a precise geolocalization ready to use for the eventual
                            balloon launch scheduled this year. A fourth year team is expected to pick up our project and try to implement a
                            roaming functionnality with one rover connecting to several bases to expand the distance coverage.
                            I am really happy about how this project turned out, knowing how long we took making the kit enter the RTK mode.
                            The portfolio is also a big achievement for me, since I learned to code in React and  css. I am really satisfied with the result
                            and feel like I have been able to not only present in detail my training, but also take up a step back to evaluate my curriculum.
                            I tried to follow the document frame supplied on Moodle by defining 3 clear modes of demonstration: the descriptive part, the technical part and the
                            analytic part.
                            The skills matrix analyzing my acquired skills for this project can be found below: <br /><br />
                        </h1>
                        <SkillMatrixInn />
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
                            This module has been one of, if most the most impactful for me. It was the opportunity to gather all the skills gained this year
                            and put them at the service of 2 big projects: the innovative project and the portfolio.
                            This year has been so intense and packed in terms of deliverables for every module, that it was hard
                            finding the time and energy to give one hundred percent in this Innovative course.
                            However, this was actually a great way of learning how to organize one's schedule and stay on top of things, even under pressure.
                            During the innovative project, we utilized all the IoT oriented skills and we mixed different backgrounds in groups. This allowed us to
                            exchange and learn from peers in a autonomous way.
                            The ending of the Innovative Project was really intense since we had a lot of deliverables to produce.
                            I felt like there was a coherence in the ISS training: we could feel most of the courses were meant to be complementary.
                            The most challenging part of this module and of the Innovative Smart System curriculum in general, was the amount of deadlines
                            and deliverables. That required a high level of commitment but sometimes also meant we rushed through things and did not take the time to assimilate some notions.
                            Moreover, I feel like having to write a portfolio made us reflect a lot more on every experience we had during the semester.
                            It is a great resource to go back to if we want to know our skills.

                        </h1>
                        <Footer theme={props.theme} />
                    </Fade>
                </div>
                {/* <SkillSection theme={theme} /> */}
            </div>
        </div>
    );
}
export default InnovativeProject;