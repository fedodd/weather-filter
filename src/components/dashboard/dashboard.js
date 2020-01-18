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
  return (
    <div className="dashboard">
      <div className="box" >
        <Card data={data}/>
      </div>
      <div className="box" >
        <Card data={data}/>
      </div>
      <div className="box" >
        <Card data={data}/>
      </div>
    </div>
  );
}

export default dashboard;
