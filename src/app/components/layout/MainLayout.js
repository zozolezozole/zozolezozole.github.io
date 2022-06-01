import React from 'react';
import { useHistory } from 'react-router-dom';
import SideMenu from './SideMenu';

const MainLayout = ({ children, ...props }) => {

    const history = useHistory();

    return (
        <div>
            <div className='row no-gutters'>
                <div className='col col-sm-12 col-md-4 col-lg-3 col-xl-2'>
                    <SideMenu history={history} />
                </div>
                <div className='col col-sm-12 col-md-8 col-lg-9 col-xl-10'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout;