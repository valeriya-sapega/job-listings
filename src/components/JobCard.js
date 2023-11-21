import React from "react";
import "./JobCard.css";

const JobCard = (props) => {
  return (
    <div className={`card ${props.featured && "featured"}`}>
      <div className="job--section" key={props.myKey}>
        <div className="companyLogo">
          <img src={props.logo} alt="company logo" />
        </div>
        <div className="job--info">
          <p className="company--text">
            <span className="company--title">{props.company}</span>
            {props.new && <span className="tag new--tag">New!</span>}
            {props.featured && (
              <span className="tag featured--tag">Featured</span>
            )}
          </p>
          <h3 className="job--title">{props.position}</h3>
          <p className="job--addInfo">
            <span>{props.postedAt}</span> • <span>{props.contract}</span> •{" "}
            <span>{props.location}</span>
          </p>
        </div>
      </div>
      <div className="job--skills">
        {props.languages.length > 0 &&
          props.languages.map((language) => (
            <button
              className="btn"
              value={language}
              onClick={props.handleFilter}
            >
              {language}
            </button>
          ))}
        {props.tools.length > 0 &&
          props.tools.map((tool) => (
            <button className="btn" value={tool} onClick={props.handleFilter}>
              {tool}
            </button>
          ))}
      </div>
    </div>
  );
};

export default JobCard;

/* Photosnap New! Featured Senior Frontend Developer 1d ago Full Time USA only Frontend Senior HTML CSS JavaScript */
