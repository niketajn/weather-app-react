import { useEffect } from "react";
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import { useState } from 'react';

const CardItem = ({item}) =>{

    const [weatherIcon, setWeatherIcon] = useState(cloud_icon);
    const [weatherDesc, setWeatherDesc] = useState(item.weather[0].description);
    var weatherIconData = item.weather[0].icon;

    useEffect(()=>{
        
    if(weatherIconData === "01d" || weatherIconData === "01n"){
        setWeatherIcon(clear_icon);
    }else if(weatherIconData === "02d" || weatherIconData === "02n"){
        setWeatherIcon(cloud_icon);
    }else if(weatherIconData === "10d" || weatherIconData === "10n" || weatherIconData === "09d" || weatherIconData === "09n"){
        setWeatherIcon(rain_icon);
    }else if(weatherIconData === "13d" || weatherIconData === "13n"){
        setWeatherIcon(snow_icon)
    }else if(weatherIconData === "03d" || weatherIconData === "03n" || weatherIconData === "04d" || weatherIconData === "04n"){
        setWeatherIcon(drizzle_icon)
    }else{
        setWeatherIcon(clear_icon);
    }
    },[])

return(
        <div className="card" style={{width:"100px",height:"100px",boxShadow: '0px 0px 11px -7px #000',padding: '17px',borderRadius: '5px'}}>
            <img className="card-img-top" src={weatherIcon}  style={{height:'60px'}} alt="Card image"/>
            <div className="card-body">{weatherDesc}</div>
        </div>
)
}

export default CardItem;