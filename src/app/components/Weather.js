import React, { useEffect, useState } from 'react';

import { getRequest } from '../service/service';
import { PATHS } from '../service/ServicePath';
import { CustomLoader } from './common';

const Weather = () => {

    const [state, setState] = useState({ loadedWeather: false, weather: null });

    useEffect(() => {
        if (!state.loadedWeather) {
            getRequest(PATHS.weather_api).then(res => {
                setState({ ...state, loadedWeather: true, weather: res.data });
            }).catch(err => {
                setState({ ...state, loadedWeather: true });
            })
        }
    }, [])

    return (
        !state.loadedWeather ? <CustomLoader loading={true} height={'200px'} />
            : state.weather &&
            <div className='nhs-external-weather'>
                <div className='nhs-external-weather-title'>EXTERNAL WEATHER</div>
                <div className='nhs-external-weather-body'>
                    <div className='temp-info'>
                        <div className='text-info'>
                            <div className='item'><span>Temperature:</span><strong>{state.weather.current.temp_c}°C</strong></div>
                            <div className='item'><span>Humidity:</span><strong>{state.weather.current.humidity}%</strong></div>
                            <div className='item'><span>Feels like:</span><strong>{state.weather.current.feelslike_c}°C</strong></div>
                        </div>
                        <div className='icon-info'>
                            <img src={state.weather.current.condition.icon} />
                            <span>{state.weather.current.condition.text}</span>
                        </div>
                    </div>
                    <div className='wind-info'>
                        <div className='item'><span>Wind direction:</span><strong>{state.weather.current.wind_dir}</strong></div>
                        <div className='item'><span>Wind speed:</span><strong>{state.weather.current.wind_mph} mph</strong></div>
                    </div>
                    <div className='visibility'><span>Visibility:</span><strong>NW</strong></div>
                </div>
                <div className='nhs-external-weather-footer'>
                    <div className='country'>
                        <i class="fa-solid fa-map-pin"></i>
                        <div className='text'>{state.weather.location.name}, </div>
                        <div className='text'>{state.weather.location.region}, </div>
                        <div className='text'>{state.weather.location.country}</div>
                    </div>
                    <div className='date'>
                        <div className='name'>Last updated: </div>
                        <div className='value'>{state.weather.current.last_updated}</div>
                    </div>
                </div>
            </div>
    )
}

export default Weather;