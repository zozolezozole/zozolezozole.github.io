import React from 'react';
import { COLORS } from '../../config/Theme';
import FiveStar from './FiveStar';

const OverallRate = ({ star, ...props }) => {
    return (
        <div className={'nhs-overall-rate ' + (star >= 3.5 ? "nhs-overall-rate-good" : (star < 3.5 && star >= 2) ? "nhs-overall-rate-medium" : "nhs-overall-rate-bad")}>
            <div className='title'>OVERALL</div>
            <div className='star'>
                <div className='desc'>{star >= 3.5 ? "Good" : (star < 3.5 && star >= 2) ? "Medium" : "Bad"}</div>
                <FiveStar rate={star} color={COLORS.primary_dark} size={20} />
                <div className='rate'>{star} / 5</div>
            </div>
        </div>
    )
}

export default OverallRate;