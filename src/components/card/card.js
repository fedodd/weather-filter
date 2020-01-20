import React from 'react';
import "./card.pcss";

function card(props) {

  console.log('card', props);


  return (
    <div className="card with__border">
      <span className="card-close"></span>
      <h3 className="card-title">
        {props.data.title}
      </h3>
      <div className="card-line">
        <div className="card-icon">{props.data.icon}</div>
        <span >{props.data.temperature} &#176;C</span>
      </div>
      <p className="card-text">Ветер: {props.data.wind} м/с</p>
      <p className="card-text">Давление: {props.data.pressure} мм</p>
    </div>
  );
}

export default card;
