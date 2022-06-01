import React from 'react';
import NotFoundImage from '../../../assets/images/404.png';

const NotFound = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <img src={NotFoundImage} style={{ objectFit: 'contain', height: '50%' }}/>
        </div>
    )
}

export default NotFound;