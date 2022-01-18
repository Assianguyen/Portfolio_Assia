import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio";
import { style } from "glamor";
import { link } from "glamor";
import { NavBar, Nav, NavItem, Button, Modal, Row, Col } from 'react-bootstrap';

import InnovationCourses from "../../components/skillMatrix/innovationCourses"
import SkillMatrixInnovation from "../../components/skillMatrix/skillMatrixInnovation"

// receive advice from a expert.

function Innovation(props) {
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
                                src={require(`../../assests/images/innovation.jpg`)}
                                alt=""
                                style={{ width: "35%" }}
                            />
                        </div>
                        <h1 className="course-header" style={{ color: theme.text }}>
                            Innovation and humanity
                        </h1>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Descriptive part
                        </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br /><br />
                            The Innovation and humanity course was divided in 6 classes that focused more on soft skills like management, creativity
                            and communication skills. Since I am in an apprenticeship this year, my Team management, social psychology, sports and professsional development class are going to take
                            place in April 2022. This is why I will only present and analyze the Creativity and Innovation and the interview simulation I did.

                            You can find a below a summary of the courses content:


                            <br /><br />
                        </h1>
                        <InnovationCourses />
                        <br /><br />
                        <h1 className="course-subtitle"> Innovation</h1>
                        <h5 className="course-text2">
                            <br />
                            The Innovation class started with a few theoretical lectures,
                            talking about the main concepts of innovation, project management and teamwork.
                            The real challenge started after these, when the class started to get really close with our main project.
                            What we had to do was to rethink our project development and strategy taking into accounts the elements we had seen.
                            When tasked with a project, most of us jump directly to a technical solution, without paying much attention to market,
                            user acceptability or ethics constraints. We were encouraged and took time to write reports about specific issues from the class,
                            and in the end, we had to present the taweaways from these with our project.

                            <br /><br />

                            {/* <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/1mj6QzKMF_Me-08sUTEua44W_u1xL_GDW/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>SDR report</a>
                                </button>
                            </div> */}


                            <h1 className="course-subtitle">Creativity methods</h1>
                            <br />


                            The TRIZ class consisted in tutorials where we learned the key concepts of the TRIZ creativity method, and then we applied them to an
                            object of our choice. However, it is a pretty complex method, that is not always absolute, so aplying it correctly was not an easy task.
                            We first had to choose a simple object to study: we chose a chair.
                            First, we conducted some precise analysis of the object, by following some precise techniques which would give us key indicators about our object.
                            Then, we would use the analysis we made as a reading key to use the TRIZ resolution matrix. It is the main element of the method. How it works is you identify a
                            contradiction in the object, and then you put that contradiction in the matrix.


                            Applying the method gave us solution leads that we could apply to find concrete idead on how to improve the chair. Our final solution was a levitating chair.
                            You can find the full report of our TRIZ case-study below:
                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/1YVhEFe33bUE7dwS18peabzzyTG2JK99I/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>TRIZ report</a>
                                </button>
                            </div>

                            <img
                                className="triz d-block mx-auto"
                                src={require(`../../assests/images/triz1.png`)}
                                alt=""
                                style={{ width: "50%" }}
                            />
                            <br />

                            <h1 className="course-subtitle">Individualized Professional Development</h1>
                            <br />

                            This class constited in a simulated interview with a professional. In my case it was an RH from a company called Celad.
                            The goal was to conduct a typical interview for a fake job and learn how to answer questions about salary expectations for example.

                        </h5>

                        {/* <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Technical part
                        </h1>
                        <br /><br />
                        <h1 className="course-subtitle">Service  Oriented architecture</h1>
                        <h5 className="course-text2">
                            <br />


                        </h5> */}

                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Analytic part
                        </h1>
                        <br />
                        <h1 className="course-subtitle"> Skills analysis </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br />

                            During the course of these classes, I extented my soft skillset, which are really important in any career.
                            Starting from the innovation class, I feel like I learned a new way to approach any project, which is analyzing its needs, objectives and risks.
                            The creativity course was well constructed and allowed me to assimilate a very useful tool.
                            Finally, I think I improved my ability to be interviewed and give the best impression possible to a recrutor. This skill is very valuable to me
                            and can only be better by experiences and trials. The advices the intervenor gave me were very helpful and I hope I can put hem into practice.

                            <br /><br />


                        </h1>
                        <SkillMatrixInnovation />
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
                            As we get closer to the work world, gathering tranversal skills is primordial. Knowing how to tackle any kind of project as well
                            as having good communicating skills is very important. 
                            This is why I think these kinds of modules play a big role in shaping us into complete engineers. I especially enjoy the fake interview since
                            I really wish to get better in that type of exercise. It is a great opportunity to have a feedback from a person in the industry world.
                            Finally, the fact that these classes were placed early in the semester was great since we did not have to rush our training.

                        </h1>
                        <Footer theme={props.theme} />
                    </Fade>
                </div>
                {/* <SkillSection theme={theme} /> */}
            </div>
        </div>
    );
}
export default Innovation;