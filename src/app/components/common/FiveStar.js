import React from 'react';

const FiveStar = ({ color, rate, size, ...props }) => {
    return (
        <div className='nhs-stars' >
            <i style={{ fontSize: size, color: color }} class={rate >= 1 ? "fa-solid fa-star" : rate == 0.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            <i style={{ fontSize: size, color: color }} class={rate >= 2 ? "fa-solid fa-star" : rate == 1.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            <i style={{ fontSize: size, color: color }} class={rate >= 3 ? "fa-solid fa-star" : rate == 2.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            <i style={{ fontSize: size, color: color }} class={rate >= 4 ? "fa-solid fa-star" : rate == 3.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            <i style={{ fontSize: size, color: color }} class={rate >= 5 ? "fa-solid fa-star" : rate == 4.5 ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
        </div>
    )
}

export default FiveStar;