import React from 'react';
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className='stroke-text'>Discover Our </span>
        <span>Communication</span>
        <span className='stroke-text'>Programs</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
