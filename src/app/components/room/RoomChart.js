import React, { useEffect, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Graphic from '../common/Graphic';
import { getRequest } from '../../service/service';
import { PATHS } from '../../service/ServicePath';
import NoData from '../../../assets/images/no_data.png';

const RoomChart = ({ room, ...props }) => {

    const [loaded, setLoaded] = useState(false);
    const [allData, setAllData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [toggle, setToggle] = useState('temperature');

    useEffect(() => {
        getData()
    }, [room])

    const getData = () => {
        getRequest(PATHS.api + PATHS.api_routes.room_hourly_data + room).then(res => {
            setLoaded(true);
            setAllData(res.data);
            let data = res.data.map(d => {
                return {
                    date: new Date(d.hour),
                    name: 'zoloo',
                    value: parseFloat(d.temperature).toFixed(2)
                }
            })
            setChartData(data);
        }).catch(err => {
            setLoaded(true);
        })
    }

    const handleChangeToggle = (event, newToggle) => {
        setToggle(newToggle);
        let data = allData.map(d => {
            return {
                date: new Date(d.hour),
                name: 'zoloo',
                value: parseFloat(d[newToggle]).toFixed(2)
            }
        })
        setChartData(data);
    };

    return (
        <div className='nhs-room-detail-chart'>
            <div>
                <ToggleButtonGroup
                    color="primary"
                    value={toggle}
                    exclusive
                    onChange={handleChangeToggle}
                    style={{ width: '98%', marginLeft: '1%' }}
                >
                    <ToggleButton value="temperature" style={{ fontSize: '12px' }}>Temperature</ToggleButton>
                    <ToggleButton value="humidity" style={{ fontSize: '12px' }}>Humidity</ToggleButton>
                    <ToggleButton value="co2" style={{ fontSize: '12px' }}>CO₂</ToggleButton>
                    <ToggleButton value="pressure" style={{ fontSize: '12px' }}>Pressure</ToggleButton>
                    <ToggleButton value="iaq" style={{ fontSize: '12px' }}>IAQ</ToggleButton>
                    <ToggleButton value="lux" style={{ fontSize: '12px' }}>LUX</ToggleButton>
                    <ToggleButton value="occupancy" style={{ fontSize: '12px' }}>Occupancy</ToggleButton>
                    <ToggleButton value="pm2_5" style={{ fontSize: '12px' }}>PM2.5</ToggleButton>
                    <ToggleButton value="pm10_0" style={{ fontSize: '12px' }}>PM10</ToggleButton>
                </ToggleButtonGroup>
            </div>
            {
                loaded && chartData.length > 0
                    ? <Graphic chartData={chartData} />
                    :
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '400px' }}>
                        <img style={{ width: '300px' }} src={NoData} />
                    </div>
            }
            <div className='between-date'>
                <div className='name'>Date between: </div>
                <div className='value'>{allData.length > 0 ? new Date(allData[0].hour).toDateString() + ' - ' + new Date(allData[allData.length - 1].hour).toDateString() : '| - |'}</div>
            </div>
        </div>
    )
}

export default RoomChart;