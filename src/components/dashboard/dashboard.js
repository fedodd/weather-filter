import React, { useState, useEffect } from 'react';
import "./dashboard.pcss";
import Card from "../card/card";

function dashboard(props) {



  let cards = <p>Добавьте город для отлеживания температуры</p>;
  console.log('dashboard i am render', props.cities);

  if (props.cities) {
    console.log(props.cities);

    cards = props.cities.map(city => {
      return <Card data={city} key={city.id}/>
    })
  }

  console.log(cards);


  return (
    <div className="dashboard">
      {cards}
    </div>
  );
}

export default dashboard;
