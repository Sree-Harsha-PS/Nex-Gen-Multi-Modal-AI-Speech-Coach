import React from 'react';
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import Header from '../Header/Header';
import { Link } from "react-scroll";


const Hero = () => {
  // Determine if the user is on a mobile device
  const mobile = window.innerWidth <= 768 ? true : false;

  // Animation transition settings
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>

      {/* Left Side */}
      <div className="left-h">
        <Header />
        {/* Hero tagline */}
        <div className="the-best">
          <motion.div
            initial={{ left: mobile ? "178px" : '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>YOUR BEST PERSONALIZED SPEECH COACH</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
          <div>
            <span className="transform-text">Transform </span>
          </div>
          <span className="stroke-text animate">Learners </span>
          <span className="stroke-text animate">Into</span>
        </div>
        <div>
          <span className="leaders-text">Leaders</span>
        </div>


          <div>
          <div>
            <span>Enhance your communication skills across platform with  </span>
            </div>
            <div>
            <span> personalized feedback and AI-driven analysis.</span>
            </div>
          </div>
        </div>

        {/* Experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </span>
            <span>AI-driven Coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={878} delay={4} preFix="+" />
            </span>
            <span>Learners Enrolled</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} delay={2} preFix="+" />
            </span>
            <span>Language Programs</span>
          </div>
        </div>

        {/* Hero buttons */}
        <div className="hero-btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-h">
        <Link className="btn"
          to="contact"
          spy={true}
          smooth={true}
        >
          Join now
        </Link>

        {/* Heart rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Speech Clarity</span>
          <span>High Precision</span>
        </motion.div>

        {/* Hero images */}
        <img className="hero-img" src={hero_image} alt="" />
        <motion.img
          initial={{ right: mobile ? "11rem" : '11rem' }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className="hero-back"
          src={hero_back}
          alt=""
        />

        {/* Speech Emotion */}
        <motion.div
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Speech Emotion Recognition</span>
            <span>Advanced AI-Based Analysis</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;