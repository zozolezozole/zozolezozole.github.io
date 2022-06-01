import React from 'react';
import { useHistory } from 'react-router-dom';

import { COLORS } from '../../config/Theme';
import FiveStar from './FiveStar';
import OverallRate from './OverallRate';

const RoomCard = ({ room, ...props }) => {

    const history = useHistory();
    const onLink = () => {
        history.push(room.route);
    }

    return (
        <div className='nhs-room-card' onClick={onLink}>
            <div className='nhs-room-card-hover-over'>
                <OverallRate star={room.rate} />
            </div>
            <div className='nhs-overall-info'>
                <div className='nhs-overall-info-header'>{room.name}</div>
                <div className='nhs-overall-info-body row no-gutters'>
                    <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <div className='icon'><i className='fa-solid fa-temperature-half'></i></div>
                        <div className='desc'>
                            <div className='count'>17.3 C</div>
                            <div className='title'>Temperature</div>
                        </div>
                    </div>
                    <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <div className='icon'><i className='fa-solid fa-droplet'></i></div>
                        <div className='desc'>
                            <div className='count'>47 %</div>
                            <div className='title'>Humidity</div>
                        </div>
                    </div>
                    <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <div className='icon'><i className='fa-solid fa-house'></i></div>
                        <div className='desc'>
                            <div className='count'>1361 ppm</div>
                            <div className='title'>CO2</div>
                        </div>
                    </div>
                    <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <div className='icon'><i className='fa-solid fa-cloud-sun'></i></div>
                        <div className='desc'>
                            <div className='count'>3.56</div>
                            <div className='title'>Light</div>
                        </div>
                    </div>
                    <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <div className='icon'><i className='fa-solid fa-smog'></i></div>
                        <div className='desc'>
                            <div className='count'>38ug/m3</div>
                            <div className='title'>PM2.5</div>
                        </div>
                    </div>
                    <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                        <div className='icon'><i class="fa-regular fa-bubble"></i></div>
                        <div className='desc'>
                            <div className='count'>0.041mg/m3</div>
                            <div className='title'>VOC</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomCard;