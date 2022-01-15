import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio";
import { style } from "glamor";
import "./smartdevices.css"
import { link } from "glamor";
import { NavBar, Nav, NavItem } from 'react-bootstrap';

import TableHackathon from "../../components/tableAnalysis/tableHackathon";
import KetiSlider from "../../components/KetiSlider/ketiSlider";
import HackathonSlider from "../../components/hackathonSlide/hackathonSlider";



function Smartdevices(props) {
    const theme = props.theme;
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

                        <KetiSlider />
                        <h1 className="course-text" style={{ color: theme.text }}>
                            <br />
                            <h1 className="course-subtitle">Context and background</h1>


                            The Smart Devices course or module gathers five classes that go over the different steps to produce a smart sensor, in our case a gas detector.
                            First, we had theoretical classes about sensors in general and optical sensors, as an introduction or reminder to the concepts of real-life physical values measurement. Then, we tackled the actual sensor creation at the AIME lab, and all the post treatment of the measurement produced.

                            You can find a quick summary of the courses content in the adjacent table. The next subsection will focus on the most relevent experiences in more detail: the nano-particle deposition to create the sensor, and the MOSH mini-project.



                        </h1>

                        {/* <div className="om2m-img-div">
                            <img
                                className="om2m-logo"
                                src={require(`../../assests/images/om2m.png`)}
                                alt=""
                                style={{ width: "20%" }}
                            />
                        </div>

                        <div className="om2m-img-div">
                            <img
                                className="etsi-logo"
                                src={require(`../../assests/images/etsi-logo.svg`)}
                                alt=""
                                style={{ width: "20%" }}
                            />
                        </div>

                        <div className="keti-img-div">
                            <img
                                className="keti-logo"
                                src={require(`../../assests/images/keti_logo.png`)}
                                alt=""
                                style={{ width: "15%", marginLeft: "44%", marginTop: "-14%", position: "fixed" }}
                            />
                        </div> */}
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
                            We presented the setup and all the features of our IoT solution in the following video:
                            <br /><br /><br />
                        </h1>
                        <HackathonSlider />
                        <br /><br />
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Technical part
                        </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
                            First of all, here is a quick summary of our project: <br /> Sensors were wired to an ESP38266 board on the Application Dedicated Node side. This node had to connect and send data via WiFi to the Middle Node or Gateway, which in our case, was a Raspberry Pi.
                            After having collected the data, the RaspPi had to send the gathered information to the OM2M platform. The node-red flow deployed on the Infrastructure Node could then send http GET requests to retrieve the sensors data and display it on the dashboard.
                            <br /> Since the user could control the system on the interface, the node-red had to be able to send POST requests to the ESP8266 via the OM2M platform to control the water actuator.<br /><br /><br />

                            This project was very challenging technically for me since I had to assimilate a new concept, middleware, and more precisely, OneM2M.
                            Since we had practical work in the Middleware & Services course, I was able
                            to assimilate the main notions of that technology. A lot of documentation and code examples
                            were available on the internet, which made the coding easier.<br />

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


                            Too much reesponsability, too little time
                            Had I been
                        </h1>
                        <br /><br />
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Analytic part
                        </h1>
                        <h1 className="course-text2" style={{ color: theme.text }}>
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
                            be confronted with projects and tasks with little time to complete them. Though experience like this one, I can get used to these constraints and better prepare and manage projects without letting the stress get to me.

                        </h1>
                        <TableHackathon />
                    </Fade>
                </div>
                {/* <SkillSection theme={theme} /> */}
            </div>
        </div>
    );
}
export default Smartdevices;