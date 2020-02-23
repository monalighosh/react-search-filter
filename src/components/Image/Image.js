import React from 'react';
import './Image.css';

const Image = (props) =>  {
  return (
    <img className="card__avatar" src={props.src} alt={props.alt}/>
  );
};

export default Image;