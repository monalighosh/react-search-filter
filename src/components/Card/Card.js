import React from 'react';
import './Card.css';
import Image from '../../components/Image/Image';

const Card = (props) => (
  <div className="card">
    <Image 
      src={props.person.picture.medium} 
      alt={`${props.person.name.first}, ${props.person.name.last}`} />
    <h2 className="card__title">{`${props.person.name.first} ${props.person.name.last}`}</h2>
    <p className="card__email">{props.person.email}</p>
    <p className="card__country">{props.person.location.country}</p>
  </div>
);

export default Card;