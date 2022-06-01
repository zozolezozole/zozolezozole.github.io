import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CustomLoader } from '../common/index';
import RoomItem from '../common/RoomItem';
import NhsLogo from './../../../assets/images/nhs_logo.jpeg';
import Dummy from './../../../assets/images/Ninewell.jpeg';
import { RoomContext } from '../../context/actions/RoomContext';

const SideMenu = ({ ...props }) => {

    const { roomInfo, setRooms } = useContext(RoomContext);

    useEffect(() => {
        if (!roomInfo.loaded) {
            setRooms();
        }
    }, [])

    return (
        <div className='nhs-side-menu'>
            <div className='nhs-logo'>
                <img src={NhsLogo} />
            </div>
            <div className='nhs-overview-image'>
                <img src={Dummy} />
                <div className='desc'>Ninewell Hospital Dundee</div>
            </div>
            <div className='nhs-menu-items'>
                <Link className='item item-active' to={"/overview"}>
                    <i className='fa-solid fa-home'></i>
                    <p>Overview</p>
                </Link>
                <Link className='item' to={"/user_profile"}>
                    <i className='fa-solid fa-user'></i>
                    <p>User Profile</p>
                </Link>
                <Link className='item' to={"/preferences"}>
                    <i className='fa-solid fa-gear'></i>
                    <p>Preferences</p>
                </Link>
            </div>
            <div className='nhs-rooms'>
                <CustomLoader loading={!roomInfo.loaded} height={'400px'} />
                {
                    roomInfo.loaded && roomInfo.rooms.length > 0 && roomInfo.rooms.map((r, i) => {
                        return (<RoomItem name={r.name} rate={'4'} id={r.id} />)
                    })
                }
            </div>
            <div className='nhs-side-menu-footer'>
                <i className='fa-regular fa-copyright'></i>
                <span>2022 BRS Technology Ltd</span>
            </div>
        </div>
    )
}

export default SideMenu;