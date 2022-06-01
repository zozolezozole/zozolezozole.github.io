import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { COLORS } from '../../config/Theme';
import { RoomContext } from '../../context/actions/RoomContext';
import FiveStar from '../common/FiveStar';

const OverviewCard = ({ room, index, ...props }) => {

    const history = useHistory();
    const { roomInfo, setRoomDetail } = useContext(RoomContext);

    const onLink = () => {
        history.push('overview/' + room.id);
    }

    useEffect(() => {
        if (roomInfo.loaded && !room.detailLoaded) {
            setRoomDetail(room.id);
        }
    }, [])

    return (
        <div
            className={'nhs-overview-card'}
            style={{
                marginRight: index % 2 == 0 ? '7.5px' : '15px',
                marginLeft: index % 2 == 0 ? '15px' : '7.5px',
                marginTop: index < 2 ? '15px' : '7.5px',
                marginBottom: index < 4 ? '7.5px' : '15px',
                height: 'calc(100% - ' + (index == 2 || index == 3 ? '15px' : '22.5px') + ')'
            }}
            onClick={onLink}
        >
            <div className='nhs-overview-card-header'>
                <div className='name'>{room.name}</div>
                <div className='rate'>
                    <div className='rate-text'>Good</div>
                    <FiveStar color={COLORS.successDarken} rate={4} size={'small'} />
                </div>
            </div>
            {
                room.detailLoaded &&
                <div className='nhs-overview-card-body row no-gutters'>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-solid fa-temperature-half'></i>
                            <strong>{parseFloat(room.detail.temperature).toFixed(2)}</strong>
                            <span>°C</span>
                        </div>
                        <div className='name'>Temperature</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-solid fa-droplet'></i>
                            <strong>{parseFloat(room.detail.humidity).toFixed(2)} </strong>
                            <span>%</span>
                        </div>
                        <div className='name'>Humidity</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-solid fa-atom'></i>
                            <strong>{parseFloat(room.detail.co2).toFixed(2)}</strong>
                            <span>ppm</span>
                        </div>
                        <div className='name'>CO₂</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-solid fa-wind'></i>
                            <strong>{parseFloat(room.detail.occupancy).toFixed(2)}</strong>
                        </div>
                        <div className='name'>Occupancy</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-regular fa-circle-dot'></i>
                            <strong>{parseFloat(room.detail.pm1_0).toFixed(2)}</strong>
                            <span>µg/m3</span>
                        </div>
                        <div className='name'>PM1</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-regular fa-circle-dot'></i>
                            <strong>{parseFloat(room.detail.pm2_5).toFixed(2)}</strong>
                            <span>µg/m3</span>
                        </div>
                        <div className='name'>PM2.5</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-regular fa-circle-dot'></i>
                            <strong>{parseFloat(room.detail.pm4_0).toFixed(2)}</strong>
                            <span>µg/m3</span>
                        </div>
                        <div className='name'>PM4</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-regular fa-circle-dot'></i>
                            <strong>{parseFloat(room.detail.pm10_0).toFixed(2)}</strong>
                            <span>µg/m3</span>
                        </div>
                        <div className='name'>PM10</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-solid fa-fan'></i>
                            <strong>{parseFloat(room.detail.iaq).toFixed(2)}</strong>
                        </div>
                        <div className='name'>IAQ</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-solid fa-cloud-sun'></i>
                            <strong>{parseFloat(room.detail.lux).toFixed(2)}</strong>
                        </div>
                        <div className='name'>LUX</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='value'>
                            <i className='fa-solid fa-gauge'></i>
                            <strong>{parseFloat(room.detail.pressure).toFixed(2)}</strong>
                            <span>Pa</span>
                        </div>
                        <div className='name'>Pressure</div>
                    </div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'></div>

                    {/* <div className='col col-sm-6 col-md-3 col-lg-3 col-xl-3'></div>
                    <div className='nhs-overview-card-item col col-sm-6 col-md-3 col-lg-3 col-xl-3'>
                        <div className='nhs-overview-card-rate-container'>
                            <div className='nhs-overview-card-rate'>
                                <div className='nhs-overview-card-rate-border'>
                                    <div className='rate'>
                                        <div className='value'>Good</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            }
        </div>
    )
}

export default OverviewCard;