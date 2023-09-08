import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


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
                 <div className="WeatherForecast-day">Thu</div>
                 <WeatherIcon code="01d" size={36} />
                 <div className="WeatherForecast-temperatures">
                 <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}°</span>
                 <span className="WeatherForecast-temperature-min">{forecast[0].temp.min}°</span>
                 </div>
             </div>
             
         </div>
       </div>
     );


  } else {
    let apiKey = "913c3de1a8b304f8eb1cec32eb0eeb51";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);

    return null;
    }
}