import React, { useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Graphic from './common/Graphic';

const Charts = () => {

    const [alignment, setAlignment] = useState('Temperature');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div className='row no-gutters'>
            <div className='col col-12' style={{ justifyContent: 'center', display: 'flex', paddingTop: '20px' }}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    style={{ width: '90%' }}
                >
                    <ToggleButton value="Temperature" style={{ fontSize: '12px' }}>
                        <i className='fa-solid fa-temperature-half' style={{ fontSize: '18px', paddingRight: '5px' }}></i>Temperature
                    </ToggleButton>
                    <ToggleButton value="Humidity" style={{ fontSize: '12px' }}><i className='fa-solid fa-droplet' style={{ fontSize: '18px', paddingRight: '5px' }}></i>Humidity</ToggleButton>
                    <ToggleButton value="CO₂" style={{ fontSize: '12px' }}><i className='fa-solid fa-house' style={{ fontSize: '18px', paddingRight: '5px' }}></i>CO₂</ToggleButton>
                    <ToggleButton value="Pressure" style={{ fontSize: '12px' }}><i className='fa-solid fa-smog' style={{ fontSize: '18px', paddingRight: '5px' }}></i>Pressure</ToggleButton>
                    <ToggleButton value="IAQ" style={{ fontSize: '12px' }}><i className='fa-solid fa-smog' style={{ fontSize: '18px', paddingRight: '5px' }}></i>IAQ</ToggleButton>
                    <ToggleButton value="LUX" style={{ fontSize: '12px' }}><i className='fa-solid fa-smog' style={{ fontSize: '18px', paddingRight: '5px' }}></i>LUX</ToggleButton>
                    <ToggleButton value="Occupancy" style={{ fontSize: '12px' }}><i className='fa-solid fa-smog' style={{ fontSize: '18px', paddingRight: '5px' }}></i>Occupancy</ToggleButton>
                    <ToggleButton value="PM2.5" style={{ fontSize: '12px' }}><i className='fa-solid fa-smog' style={{ fontSize: '18px', paddingRight: '5px' }}></i>PM2.5</ToggleButton>
                    <ToggleButton value="PM10" style={{ fontSize: '12px' }}><i className='fa-solid fa-smog' style={{ fontSize: '18px', paddingRight: '5px' }}></i>PM10</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='col col-12' style={{ padding: '10px 30px' }}>
                <Graphic />
            </div>
        </div>
    )
}

export default Charts;