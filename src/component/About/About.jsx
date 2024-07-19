import "./About.css";

import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>
          What makes Harvard special are our people. Through continued efforts
          in inclusion and belonging,
        </p>
        <p>
          Harvard has built a community comprising many backgrounds, cultures,
          races, identities, life experiences, perspectives, beliefs, and
          values.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

export default About;
