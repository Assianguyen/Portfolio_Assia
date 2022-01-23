import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience ,exp } from "../../portfolio";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import { style } from "glamor";

function Experience(props) {
  const theme = props.theme;
  console.log(props.setTheme);
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              {/* <ExperienceImg theme={theme} /> */}
              <img
                className="intern d-block mx-auto"
                src={require(`../../assests/images/internship.svg`)}
                alt=""
                style={{ width: "90%" }}
              />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      
        <div className="portfolio-hackster-btn-div">
          <button
            {...styles}
            className="button-datasheet d-block mx-auto"
          >

            <a className='a-hack' href="https://drive.google.com/file/d/1xV0TO79cfj8xWf8bBZrSrq31IAraYoSd/view?usp=sharing" target='Blank_' nonunderlinedhyperlink>Internship poster</a>
          </button>
        </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Experience;
