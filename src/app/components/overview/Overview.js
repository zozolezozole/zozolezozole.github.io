import React, { useContext, useEffect } from 'react';
import { RoomContext } from '../../context/actions/RoomContext';
import { CustomLoader } from '../common';
import OverviewCard from './OverviewCard';

const Overview = ({ ...props }) => {

    const { roomInfo } = useContext(RoomContext);

    console.log("sdaaa", roomInfo)

    return (
        <div className='nhs-overview-container row no-gutters'>
            <CustomLoader loading={!roomInfo.loaded} height={"100vh"} />
            <div className='row no-gutters nhs-overview'>
                {
                    roomInfo.loaded && roomInfo.rooms.length > 0 && roomInfo.rooms.map((r, i) => {
                        return i % 2 == 0 && (
                            <div className='row no-gutters nhs-overview-row'>
                                {
                                    i < roomInfo.rooms.length &&
                                    <div className={'col col-sm-12 col-md-6 col-lg-6 col-xl-6 nhs-overview-card-container'}>
                                        <OverviewCard room={roomInfo.rooms[i]} index={i} key={i} />
                                    </div>
                                }
                                {
                                    i + 1 < roomInfo.rooms.length &&
                                    <div className={'col col-sm-12 col-md-6 col-lg-6 col-xl-6 nhs-overview-card-container'}>
                                        <OverviewCard room={roomInfo.rooms[i + 1]} index={i + 1} key={i + 1} />
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            {/* <div className='nhs-room-container'>
                <div className='row no-gutters'>
                    {
                        homeInfo.loaded && homeInfo.rooms.length > 0 && homeInfo.rooms.map((r, i) => {
                            return (
                                <div className='col col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                    <RoomCard room={r} />
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}
            {/* <div className='nhs-overview-container row no-gutters'>
                {
                    homeInfo.loaded && homeInfo.rooms.length > 0 &&
                    homeInfo.rooms.map(r => {
                        return (
                            <div className='col col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                <div className='nhs-overview-card'>
                                    <div className='nhs-overview-card-over'>See more</div>
                                    <div className={'nhs-overview-card-rate ' + (r.humidity >= 28 ? "nhs-overview-card-rate-good" : (r.humidity < 28 && r.humidity >= 26) ? "nhs-overview-card-rate-unhealthy" : "nhs-overview-card-rate-very-unhealthy")}>
                                        <div>
                                            <div className='title'>OVERALL</div>
                                            <div className='star'>
                                                <div className='desc' style={{ fontSize: r.humidity >= 28 ? "40px" : (r.humidity < 28 && r.humidity >= 26) ? "30px" : "30px" }}>{r.humidity >= 28 ? "Good" : (r.humidity < 28 && r.humidity >= 26) ? "Unhealthy" : "Very Unhealthy"}</div>
                                                <FiveStar rate={r.humidity >= 28 ? 4.5 : (r.humidity < 28 && r.humidity >= 26) ? 2.5 : 1} color={COLORS.primary_dark} size={20} />
                                                <div className='rate'>{r.humidity >= 28 ? 4.5 : (r.humidity < 28 && r.humidity >= 26) ? 2.5 : 1} / 5</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='nhs-overview-card-info'>
                                        <div className='room-name'>{r.name}</div>
                                        <div style={{ marginBottom: '10px' }}>
                                            <div className='info-item'>
                                                <div className='name'>CO₂</div>
                                                <div className='value-container'>
                                                    <div className='value'>{r.co2 ? r.co2 : '-'}<span>ppm</span></div>
                                                    <div className='status-good'></div>
                                                </div>
                                            </div>
                                            <div className='info-item'>
                                                <div className='name'>Pressure</div>
                                                <div className='value-container'>
                                                    <div className='value'>{r.pressure ? r.pressure : '-'}<span>Pa</span></div>
                                                    <div className='status-bad'></div>
                                                </div>
                                            </div>
                                            <div className='info-item'>
                                                <div className='name'>IAQ</div>
                                                <div className='value-container'>
                                                    <div className='value'>{r.iaq ? r.iaq : '-'}<span></span></div>
                                                    <div className='status-medium'></div>
                                                </div>
                                            </div>
                                            <div className='info-item'>
                                                <div className='name'>LUX</div>
                                                <div className='value-container'>
                                                    <div className='value'>{r.lux ? r.lux : '-'}<span></span></div>
                                                    <div className='status-good'></div>
                                                </div>
                                            </div>
                                            <div className='info-item'>
                                                <div className='name'>Occupancy</div>
                                                <div className='value-container'>
                                                    <div className='value'>{r.occupancy ? r.occupancy : '-'}<span></span></div>
                                                    <div className='status-good'></div>
                                                </div>
                                            </div>
                                            <div className='info-item'>
                                                <div className='name'>PM2.5</div>
                                                <div className='value-container'>
                                                    <div className='value'>{r.pm2_5 ? r.pm2_5 : '-'}<span>µg/m3</span></div>
                                                    <div className='status-good'></div>
                                                </div>
                                            </div>
                                            <div className='info-item'>
                                                <div className='name'>PM10</div>
                                                <div className='value-container'>
                                                    <div className='value'>{r.pm10_0 ? r.pm10_0 : '-'}<span>µg/m3</span></div>
                                                    <div className='status-good'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='nhs-overview-card-temp'>
                                        <div className='temp'>
                                            <div>
                                                <div className='icon'><i className='fa-solid fa-temperature-half'></i></div>
                                                <div className='name'>Temperature</div>
                                                <div className='value'>{r.temperature}°C</div>
                                            </div>
                                        </div>
                                        <div className='humidity'>
                                            <div>
                                                <div className='icon'><i className='fa-solid fa-droplet'></i></div>
                                                <div className='name'>Humidity</div>
                                                <div className='value'>{r.humidity}%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div> */}
        </div>
        // <div className='nhs-overview-container row no-gutters'>
        //     {
        //         homeInfo.loaded && homeInfo.rooms.length > 0 &&
        //         homeInfo.rooms.map((r, i) => {
        //             return (
        //                 <div className={'new-overview-card col col-sm-12 col-md-6 col-lg-6 col-xl-6' + (i > 3 ? 'new-overview-card-last' : '')}>
        //                     <div className={'new-card'} style={{ marginRight: 10, marginBottom: 10, marginTop: i < 2 ? 10 : 0, marginLeft: i % 2 == 0 ? 10 : 0 }}>
        //                         <div className='new-rate' style={{ backgroundColor: (r.humidity >= 28 ? COLORS.success : (r.humidity < 28 && r.humidity >= 26) ? COLORS.warning : COLORS.error) }}>
        //                             <div className='title'>OVERALL</div>
        //                             <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        //                                 <div className='desc' style={{ fontSize: r.humidity >= 28 ? "25px" : (r.humidity < 28 && r.humidity >= 26) ? "20px" : "20px" }}>{r.humidity >= 28 ? "Good" : (r.humidity < 28 && r.humidity >= 26) ? "Unhealthy" : "Very Unhealthy"}</div>
        //                                 <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        //                                     <i style={{ fontSize: 20, color: 'white' }} class={"fa-solid fa-star"}></i>
        //                                     <div className='rate' style={{ paddingLeft: 5 }}>{r.humidity >= 28 ? 4.5 : (r.humidity < 28 && r.humidity >= 26) ? 2.5 : 1}/5</div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* <div className='nhs-overview-card'>
        //                         <div className='nhs-overview-card-over'>See more</div>
        //                         <div className={'nhs-overview-card-rate ' + (r.humidity >= 28 ? "nhs-overview-card-rate-good" : (r.humidity < 28 && r.humidity >= 26) ? "nhs-overview-card-rate-unhealthy" : "nhs-overview-card-rate-very-unhealthy")}>
        //                             <div>
        //                                 <div className='title'>OVERALL</div>
        //                                 <div className='star'>
        //                                     <div className='desc' style={{ fontSize: r.humidity >= 28 ? "40px" : (r.humidity < 28 && r.humidity >= 26) ? "30px" : "30px" }}>{r.humidity >= 28 ? "Good" : (r.humidity < 28 && r.humidity >= 26) ? "Unhealthy" : "Very Unhealthy"}</div>
        //                                     <FiveStar rate={r.humidity >= 28 ? 4.5 : (r.humidity < 28 && r.humidity >= 26) ? 2.5 : 1} color={COLORS.primary_dark} size={20} />
        //                                     <div className='rate'>{r.humidity >= 28 ? 4.5 : (r.humidity < 28 && r.humidity >= 26) ? 2.5 : 1} / 5</div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className='nhs-overview-card-info'>
        //                             <div className='room-name'>{r.name}</div>
        //                             <div style={{ marginBottom: '10px' }}>
        //                                 <div className='info-item'>
        //                                     <div className='name'>CO₂</div>
        //                                     <div className='value-container'>
        //                                         <div className='value'>{r.co2 ? r.co2 : '-'}<span>ppm</span></div>
        //                                         <div className='status-good'></div>
        //                                     </div>
        //                                 </div>
        //                                 <div className='info-item'>
        //                                     <div className='name'>Pressure</div>
        //                                     <div className='value-container'>
        //                                         <div className='value'>{r.pressure ? r.pressure : '-'}<span>Pa</span></div>
        //                                         <div className='status-bad'></div>
        //                                     </div>
        //                                 </div>
        //                                 <div className='info-item'>
        //                                     <div className='name'>IAQ</div>
        //                                     <div className='value-container'>
        //                                         <div className='value'>{r.iaq ? r.iaq : '-'}<span></span></div>
        //                                         <div className='status-medium'></div>
        //                                     </div>
        //                                 </div>
        //                                 <div className='info-item'>
        //                                     <div className='name'>LUX</div>
        //                                     <div className='value-container'>
        //                                         <div className='value'>{r.lux ? r.lux : '-'}<span></span></div>
        //                                         <div className='status-good'></div>
        //                                     </div>
        //                                 </div>
        //                                 <div className='info-item'>
        //                                     <div className='name'>Occupancy</div>
        //                                     <div className='value-container'>
        //                                         <div className='value'>{r.occupancy ? r.occupancy : '-'}<span></span></div>
        //                                         <div className='status-good'></div>
        //                                     </div>
        //                                 </div>
        //                                 <div className='info-item'>
        //                                     <div className='name'>PM2.5</div>
        //                                     <div className='value-container'>
        //                                         <div className='value'>{r.pm2_5 ? r.pm2_5 : '-'}<span>µg/m3</span></div>
        //                                         <div className='status-good'></div>
        //                                     </div>
        //                                 </div>
        //                                 <div className='info-item'>
        //                                     <div className='name'>PM10</div>
        //                                     <div className='value-container'>
        //                                         <div className='value'>{r.pm10_0 ? r.pm10_0 : '-'}<span>µg/m3</span></div>
        //                                         <div className='status-good'></div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className='nhs-overview-card-temp'>
        //                             <div className='temp'>
        //                                 <div>
        //                                     <div className='icon'><i className='fa-solid fa-temperature-half'></i></div>
        //                                     <div className='name'>Temperature</div>
        //                                     <div className='value'>{r.temperature}°C</div>
        //                                 </div>
        //                             </div>
        //                             <div className='humidity'>
        //                                 <div>
        //                                     <div className='icon'><i className='fa-solid fa-droplet'></i></div>
        //                                     <div className='name'>Humidity</div>
        //                                     <div className='value'>{r.humidity}%</div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div> */}
        //                 </div>
        //             )
        //         })

        //     }
        // </div>
    )
}

export default Overview;