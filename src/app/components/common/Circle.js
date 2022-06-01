import React from 'react';

const Circle = ({ color, percent, value, ...props }) => {
    return (
        <div class="container__progressbars">
            <div class="progressbar" percent="45">
                <svg class="progressbar__svg">
                    <circle style={{ stroke: color }} cx="80" cy="80" r="70" class={"progressbar__svg-circle circle-custom shadow-custom"}> </circle>
                </svg>
                <span class="progressbar__text shadow-custom">{value}</span>
            </div>
        </div>
        // <div role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': percent, '--fg': color, '--real_value': value }}></div>
    )
}

export default Circle;