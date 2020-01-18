import React from 'react';

function card(props) {

  console.log(props);


  return (
    <div className="card">
      <div className="card-close">X</div>
      <h3 className="card-title">
        {props.data.city}
      </h3>
      <div className="card-line">
        <div>{props.data.icon}</div>
        <span >{props.data.temperature} &#176;C</span>
      </div>
      <p>Ветер: {props.data.wind} м/с</p>
      <p>Давление: {props.data.pressure} мм</p>
    </div>
  );
}

export default card;
