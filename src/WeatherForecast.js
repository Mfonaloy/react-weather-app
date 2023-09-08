import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
let [loaded, setloaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
    setForecast(response.data.daily);
    setloaded(true);
}

  if (loaded) {
  return (
        <div className="WeatherForecast">
         <div className="row">
             <div className="col">
             <WeatherForecastDay data={forecast[0]}/>
             </div>
             
         </div>
       </div>
     );


  } else {
    let apiKey = `7ed26a6948c661d05fafe7355b41b2ec`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}