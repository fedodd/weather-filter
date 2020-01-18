import React from 'react';
import "./dashboard.css";
import Card from "../card/card";

function dashboard(props) {

  let data = {
    city: "Москва",
    temperature: 3,
    wind: 5,
    pressure: 752,
    icon: ''
  }

    let data2 = {
    city: "Санкт-Петербург",
    temperature: -3,
    wind: 7,
    pressure: 732,
    icon: ''
  }

  return (
    <div className="dashboard">
      <Card data={data}/>
      <Card data={data2}/>
      <Card data={data}/>
    </div>
  );
}

export default dashboard;
