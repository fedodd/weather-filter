import React, { useState, useEffect } from 'react';
import "./dashboard.pcss";
import Card from "../card/card";

function dashboard(props) {

  let cards = <p>Добавьте город для отлеживания температуры</p>;

  if (props.cities) {
    cards = props.cities.map(city => {
      return <Card
        data={city}
        key={city.id}
        onCardClose={props.onCardClose}/>
    })
  }

  return (
    <div className="dashboard">
      {cards}
    </div>
  );
}

export default dashboard;
