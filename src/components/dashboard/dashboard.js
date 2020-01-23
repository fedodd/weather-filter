import React from 'react';
import "./dashboard.pcss";
import Card from "../card/card";

function dashboard(props) {

  let cards = <p>Добавьте город для отcлеживания температуры</p>;

  if (props.cities) {
    cards = props.cities.map(city => {
      return <Card
        data={city}
        key={city.place_id}
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
