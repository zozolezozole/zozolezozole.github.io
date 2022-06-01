import React from 'react';

const CustomLoader = ({ loading, height, ...props }) => {
    return (
        loading && <div className='nhs-loader-container' style={{ height: height }}><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    )
}

export default CustomLoader;