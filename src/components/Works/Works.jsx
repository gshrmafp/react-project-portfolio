import React, { useContext } from "react";
import "./Works.css";
import Reactjs from "../../img/React-js-removebg-preview.png";
import Spring from "../../img/Spring_Boot-removebg-preview.png";
import Airtel from "../../img/Airtel-logo.png";
import Js from "../../img/js-logo-removebg-preview.png";
import Node from "../../img/node-js-removebg-preview.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works with All These
          </span>
          <span>Skills and Technology</span>
          <spane>
          Skills:
            <br />
            Mean Stack · MongoDB · Systems Design · Core Java · Java 
            <br />
            JavaScript · Spring Boot · React.js
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Reactjs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Spring} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Airtel} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Js} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
