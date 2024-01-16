import React from 'react';
import './JobCard.css';

const JobCard = ({
  job: {
    logo,
    company,
    isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleFilter,
}) => {
  return (
    <div className={`card ${featured && 'featured'}`}>
      <div className="job--section">
        <div className="companyLogo">
          <img src={logo} alt="company logo" />
        </div>
        <div className="job--info">
          <p className="company--text">
            <span className="company--title">{company}</span>
            {isNew && <span className="tag new--tag">New!</span>}
            {featured && <span className="tag featured--tag">Featured</span>}
          </p>
          <h3 className="job--title">{position}</h3>
          <p className="job--addInfo">
            <span>{postedAt}</span> • <span>{contract}</span> •{' '}
            <span>{location}</span>
          </p>
        </div>
      </div>
      <div className="job--skills">
        {languages.length > 0 &&
          languages.map((language) => (
            <button className="btn" value={language} onClick={handleFilter}>
              {language}
            </button>
          ))}
        {tools.length > 0 &&
          props.tools.map((tool) => (
            <button className="btn" value={tool} onClick={handleFilter}>
              {tool}
            </button>
          ))}
      </div>
    </div>
  );
};

export default JobCard;
