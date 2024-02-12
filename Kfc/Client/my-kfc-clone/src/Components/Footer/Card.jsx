import React from 'react';
// import './Card.css';

const Card = ({ img, title, desc, link1, link2, buttonText }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="links">
          <a href={link1.url}>{link1.text}</a>
          <a href={link2.url}>{link2.text}</a>
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
