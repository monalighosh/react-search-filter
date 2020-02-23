import React from 'react';
import './CardList.css';
import Card from '../../components/Card/Card';


const CardList = (props) => (
  <div className="card-list">
    {props.people.map((person, index) => (
    <Card key={index} person={person} />
    ))}
  </div>
);


export default CardList;