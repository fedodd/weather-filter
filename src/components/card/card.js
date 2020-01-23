import React from 'react';
import { weatherbitIcons } from '../../helpers/icons';
import "./card.pcss";

function card(props) {

  return (
    <div className="card with__border">
      <span className="card-close" onClick={event=> props.onCardClose(props.data.city_name)}></span>
      <h3 className="card-title">
        {props.data.title}
      </h3>
      <div className="card-line">
        <div className="card-icon"><i className={`wi ${weatherbitIcons[props.data.icon]}`} />
        </div>
        <span >{props.data.temperature} &#176;C</span>
      </div>
      <p className="card-text">Ветер: {props.data.wind} м/с</p>
      <p className="card-text">Давление: {props.data.pressure} мм</p>
    </div>
  );
}

export default card;
