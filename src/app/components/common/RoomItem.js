import React from 'react';
import { useHistory } from 'react-router-dom';

const RoomItem = ({ name, rate, id, ...props }) => {
    
    const history = useHistory();
    const onLink = () => {
        history.push('/overview/' + id);
    }

    return (
        <div className={'nhs-room-item ' + (window.location.pathname === '/overview/' + id ? 'nhs-room-item-active' : '')} onClick={onLink}>
            <p>{name}</p>
            <div className='stars'>
                <i class={rate >= 1 ? "fa-solid fa-star" : rate == 0.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
                <i class={rate >= 2 ? "fa-solid fa-star" : rate == 1.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
                <i class={rate >= 3 ? "fa-solid fa-star" : rate == 2.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
                <i class={rate >= 4 ? "fa-solid fa-star" : rate == 3.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
                <i class={rate >= 5 ? "fa-solid fa-star" : rate == 4.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            </div>
        </div>
    )
}

export default RoomItem;