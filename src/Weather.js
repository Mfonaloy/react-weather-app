import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather() {
    const [ready, setReady] = useState(false);
const [temperature, setTemperature] = useState(null);
function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
   setReady(true);

}
 if(ready) {
    return (
    <div className="Weather">
    <form>
        <div className="row">
            <div className="col-9">
        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
        </div>
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-primary w-100" />
        </div>
        </div>
    </form>

    <h1>Abuja</h1>
    <ul>
        <li>Monday 3:51</li>
        <li>Mostly cloudy</li>
    </ul>
    <div className="row mt-3">
    <div className="col-6">
        <div className="clear-fix">
          
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
        alt="mostly-cloudy" className="float-left" />

      <div className="float-left">
       <span className="temperature">6</span>
       <span className="unit">°C</span>
       </div>
       </div>
    </div>
    <div className="col-6">
        <ul>
            <li>
                Precipitation: 12%
            </li>
            <li>
                Humidity: 54%
            </li>
            <li>
                Wind: 13Km/h
            </li>
        </ul>
    </div>
    </div>
    </div>
    );
} else {
    const  apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let city = "Abuja";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
}    


}
 

    