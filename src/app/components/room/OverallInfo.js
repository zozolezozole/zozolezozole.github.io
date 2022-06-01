import React from 'react';
import { COLORS } from '../../config/Theme';
import FiveStar from '../common/FiveStar';
import OverallRate from '../common/OverallRate';

const OverallInfo = ({ room, ...props }) => {
    
    return (
        <div className='nhs-overall'>
            <div>
                <OverallRate star={"4"} />
            </div>
            {
                room.detail &&
                <div className='nhs-overall-info'>
                    <div className='nhs-overall-info-header'>AVERAGE</div>
                    <div className='nhs-overall-info-body row no-gutters'>
                        <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                            <div className='icon'><i className='fa-solid fa-temperature-half'></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.temperature).toFixed(2)} <span>°C</span></div>
                                <div className='title'>Temperature</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div>
                        <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                            <div className='icon'><i className='fa-solid fa-droplet'></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.humidity).toFixed(2)} <span>%</span></div>
                                <div className='title'>Humidity</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div>
                        <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                            <div className='icon'><i className='fa-solid fa-atom'></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.co2).toFixed(2)} <span>ppm</span></div>
                                <div className='title'>CO2</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div>
                        <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                            <div className='icon'><i class="fa-solid fa-fan"></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.iaq).toFixed(2)}</div>
                                <div className='title'>IAQ</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div>
                        {/* <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                            <div className='icon'><i className='fa-solid fa-cloud-sun'></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.lux).toFixed(2)}</div>
                                <div className='title'>LUX</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div> */}
                        <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                            <div className='icon'><i className='fa-solid fa-wind'></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.occupancy).toFixed(2)}</div>
                                <div className='title'>Occupancy</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div>
                        <div className='nhs-overall-info-item col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                            <div className='icon'><i class="fa-solid fa-gauge"></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.pressure).toFixed(2)} <span>Pa</span></div>
                                <div className='title'>Pressure</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div>
                        <div className='nhs-overall-info-item-pm col col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                            <div className='icon'><i className='fa-solid fa-circle-dot'></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.pm1_0).toFixed(2)} <span>ug/m3</span></div>
                                <div className='title'>PM1</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div>
                        <div className='nhs-overall-info-item-pm col col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                            <div className='icon'><i className='fa-solid fa-circle-dot'></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.pm2_5).toFixed(2)} <span>ug/m3</span></div>
                                <div className='title'>PM2.5</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div>
                        <div className='nhs-overall-info-item-pm col col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                            <div className='icon'><i className='fa-solid fa-circle-dot'></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.pm4_0).toFixed(2)} <span>ug/m3</span></div>
                                <div className='title'>PM4</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div>
                        <div className='nhs-overall-info-item-pm col col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                            <div className='icon'><i className='fa-solid fa-circle-dot'></i></div>
                            <div className='desc'>
                                <div className='count'>{parseFloat(room.detail.pm10_0).toFixed(2)} <span>ug/m3</span></div>
                                <div className='title'>PM10</div>
                                <FiveStar rate={3.5} color={COLORS.font_color} size={8} />
                            </div>
                        </div>
                        <div className='col col-12'>
                            <div className='nhs-overall-info-updated-date'>
                                <div className='name'>Last updated: </div>
                                <div className='value'>{room.updated_date.toLocaleString().replaceAll('/', '-')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default OverallInfo;