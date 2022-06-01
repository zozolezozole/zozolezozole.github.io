import React from 'react';

const LastReading = ({ room, ...props }) => {
    return (
        <div style={{ border: '1px solid lightgray', borderRadius: '10px', margin: '5px' }}>
            <div style={{ borderBottom: '1px solid lightgray', textTransform: 'uppercase', fontSize: '1rem', padding: '20px 20px 10px 20px', textAlign: 'center' }}>LAST READING</div>
            {
                room.detailLoaded &&
                <div className='nhs-last-reading'>
                    <div style={{ position: 'absolute', justifyContent: 'flex-start', display: 'flex' }}>
                        <div class="set-size charts-container">
                            <div class="pie-wrapper progress-30 style-2">
                                <div className="name">Temperature</div>
                                <span class="label">{parseFloat(room.detail.temperature).toFixed(0)}<span class="smaller">°C</span></span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                        <div class="set-size charts-container">
                            <div class="pie-wrapper progress-60 style-2">
                                <div className="name">Humidity</div>
                                <span class="label">{parseFloat(room.detail.humidity).toFixed(0)}<span class="smaller">%</span></span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                        <div class="set-size charts-container">
                            <div class="pie-wrapper progress-95 style-2">
                                <div className="name">CO₂</div>
                                <span class="label">{parseFloat(room.detail.co2).toFixed(0)}<span class="smaller">ppm</span></span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                        <div class="set-size charts-container">
                            <div class="pie-wrapper progress-90 style-2">
                                <div className="name">LUX</div>
                                <span class="label">{parseFloat(room.detail.lux).toFixed(0)}<span class="smaller"></span></span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                        <div class="set-size charts-container">
                            <div class="pie-wrapper progress-45 style-2">
                                <div className="name">Occupied</div>
                                <span class="label">{parseFloat(room.detail.occupancy) > 0 ? 'Yes' : 'No'}<span class="smaller"></span></span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                        <div class="set-size charts-container">
                            <div class="pie-wrapper progress-85 style-2">
                                <div className="name">Pressure</div>
                                <span class="label">{parseFloat(room.detail.pressure).toFixed(0)}<span class="smaller">Pa</span></span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                        <div class="set-size charts-container">
                            <div class="pie-wrapper progress-35 style-2">
                                <div className="name">IAQ</div>
                                <span class="label">{parseFloat(room.detail.iaq).toFixed(0)}<span class="smaller"></span></span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                        <div class="set-size charts-container">
                            <div class="pie-wrapper progress-75 style-2">
                                <div className="name">PM2.5</div>
                                <span class="label">{parseFloat(room.detail.pm2_5).toFixed(0)}<span class="smaller">ug/m3</span></span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                        <div class="set-size charts-container">
                            <div class="pie-wrapper progress-75 style-2">
                                <div className="name">PM10</div>
                                <span class="label">{parseFloat(room.detail.pm10_0).toFixed(0)}<span class="smaller">ug/m3</span></span>
                                <div class="pie">
                                    <div class="left-side half-circle"></div>
                                    <div class="right-side half-circle"></div>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='nhs-overall-info-updated-date' style={{ paddingBottom: 10, paddingTop: 10, paddingRight: 50 }}>
                <div className='name'>Last updated: </div>
                <div className='value'>{room.updated_date.toLocaleString().replaceAll('/', '-')}</div>
            </div>
        </div>
    )
}

export default LastReading;