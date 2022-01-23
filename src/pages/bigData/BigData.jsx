import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio";
import { style } from "glamor";
import { link } from "glamor";
import { NavBar, Nav, NavItem, Button, Modal, Row, Col } from 'react-bootstrap';


import AimeSlider from "../../components/aimeslider/aimeslider";
import PCBSlider from "../../components/aimeslider/pcbSlider";
import SkillMatrixData from "../../components/skillMatrix/skillMatrixData";
import DataCourses from "../../components/skillMatrix/dataCourses";



function BigData(props) {
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
                                className="data-pic"
                                src={require(`../../assests/images/cluster.jpeg`)}
                                alt=""
                                style={{ width: "35%" }}
                            />
                        </div>

                        <h1 className="course-header" style={{ color: theme.text }}>
                            Analysis and data processing
                        </h1>
                        <br />
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Descriptive part
                        </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br />
                            The Analysis & Data processing module gathers three classes.
                            The first one was Big data and the second was focused on semantic web for IoT.
                            The third one is a more general course about Software Engineering
                            practice. You can find a quick summary of the courses content in the below table.

                            <br /><br />
                        </h1>
                        <DataCourses />
                        <br /><br />
                        <h1 className="course-subtitle"> Semantic data </h1>
                        <h5 className="course-text2">
                            <br />
                            This course was composed of a few lectures and 2 practical works. The goal of these labs was to introduce us to semantic web.
                            We implemented an ontology on the Protege software with a reasoner and then exploited the ontology with
                            a java application. We started from a simple model where the Uniform Resource Identifier (URI°) was implicit and
                            then upped the difficulty by using an API that manipulated URIs explicitly.
                            You can find the report made by my group in the link below:
                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/16CibvhtxEOAs-58usuQoPde_Ze_UufJl/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>Semantic data report</a>
                                </button>
                            </div>
                        </h5>
                        <h1 className="course-subtitle">Big data  </h1>
                        <br />
                        <h5 className="course-text2">
                            <div className="portfolio-hackster-btn-div">
                                <button
                                    {...styles}
                                    className="button-datasheet d-block mx-auto"
                                >

                                    <a className='a-hack' href="https://drive.google.com/file/d/1qbDU66KHls6ueennLAafUO2D1vYr02TK/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>Big data report</a>
                                </button>
                            </div>
                        </h5>

                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Technical part
                        </h1>
                        <br /><br />
                        <h5 className="course-text2">
                            Since this module was quite short and did not include major projects, I will summarize my technical challenges in one section.
                            I did not encounter specific problems during the semantic data course because, like I said before, we were
                            very guided and well supervised, so any question or interrogation was quickly answered by the intervenors.
                            As for big data, it was a bit more challenging for me, because I took time assimilating all the clustering-detection methods.
                            Thankfully my partner was a quick learner and helped me when I had difficulties.
                            Finally, on the software engineering side, the only challenge we faced was for the continous integration. When using Jenkins, the dedicated software,we were not able to deploy it. We frankly
                            set it aside and tried using GitAction instead to automate our tests.
                        </h5>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Analytic part
                        </h1>
                        <br />
                        <h1 className="course-subtitle"> Skills analysis </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            <br />

                            This module was more oriented towards computer science, so it was a way for me to be introduced to
                            a totally different skillset from mine.
                            For the Processing Semantic Data, I managed to tackle the tasks of the lab without much difficulty
                            thanks to the well guided practical work material. I was able create an ontology with Protegé and a Knowledge-base.
                            This lab was a great and accessible way to apply the notions seen during lectures.
                            Because of time constraints, we did not have time to use semantic metadata to enrich a dataset which is a shame because I would have an interesting application.
                            During the Data Processing and Analysis: Big Data course, I learnt how to explore a dataset,
                            and exploit it using several methods. The practical work was well built, allowing us to first discover the basic methods to analyze
                            clusters, to then use them on real datasets.

                            Regarding the Software Engineering course, I was familiar with the Agile method but I had never used a proper tool like Jira to apply it. Since I was in charge of managing the Jira dashboard, I think I have assimilated
                            how to manage a project using the Agile method.
                            At the end of the entire module, I felt like I had acquired all the necessary skills to understand the basics of data processing.

                            The skills matrix analyzing my acquired skills for this project can be found below: <br /><br />
                        </h1>
                        <SkillMatrixData />
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

                            In general, this module served as a good introduction to the field of data processing.
                            The big data project required some extra-work since we had many datasets to analyze, but I think the practical works were well
                            contructed, but needed maybe 1 or 2 more sessions.
                            The semantic data labs were really accessible, which was great for students like me who had experience in semantic web applications.
                            Finally, regarding software engineering, it was meant to be linked with the Service architecture course. I just wish it was applied on a longer project like the Innovative Project, since a one-month project is not really adapted to this kind of management method.
                            I understand that it was put there for learning purposes but I think it would have been more efficient on a semester-long project.
                            In conclusion, I found the classes interesting and suitable to most students.


                        </h1>
                        <Footer theme={props.theme} />
                    </Fade>
                </div>
                {/* <SkillSection theme={theme} /> */}
            </div>
        </div>
    );
}
export default BigData;