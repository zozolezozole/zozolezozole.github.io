import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { RoomContext } from '../../context/actions/RoomContext';
import NotFound from './../common/NotFound';
import Charts from './../Charts';
import Weather from './../Weather';
import { CustomLoader } from './../common';
import OverallInfo from './OverallInfo';
import Alert from './Alert';
import LastReading from './LastReading';
import RoomChart from './RoomChart';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0, paddingBottom: '10px' }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const RoomDetail = ({ ...props }) => {

    const { roomInfo, setRoomDetail } = useContext(RoomContext);
    const { room } = useParams();
    const [tab, setTab] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getRoomData();
        setLoaded(false);
        setInterval(() => {
            setLoaded(true);
        }, 1000)
    }, [room])

    useEffect(() => {
        getRoomData();
    }, [roomInfo])
    
    const getRoomData = () => {
        if (roomInfo.rooms.find(r => r.id == room) && !roomInfo.rooms.find(r => r.id == room).detailLoaded) {
            setRoomDetail(room)
        }
    }

    const handleChangeTab = (event, newValue) => {
        setTab(newValue);
    };

    return (
        !roomInfo.loaded || !loaded
            ? <CustomLoader loading={true} height={'100vh'} />
            : roomInfo.loaded && roomInfo.rooms.length > 0 && roomInfo.rooms.find(r => r.id == room)
                ?
                <div style={{ backgroundColor: 'white', margin: 10 }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={tab} onChange={handleChangeTab} aria-label="basic tabs example" centered>
                                <Tab label="Main Info" {...a11yProps(0)} />
                                <Tab label="Charts" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={tab} index={0}>
                            <div className='nhs-room-detail'>
                                <div className='row no-gutters'>
                                    <div className='col col-sm-12 col-md-8 col-lg-8 col-xl-8'>
                                        {
                                            <OverallInfo room={roomInfo.rooms.find(r => r.id == room)} />
                                        }
                                    </div>
                                    <div className='col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                                        <Weather />
                                    </div>
                                </div>
                                <div className='row no-gutters'>
                                    <div className='col col-sm-12 col-md-8 col-lg-8 col-xl-8' >
                                        <LastReading room={roomInfo.rooms.find(r => r.id == room)} />
                                        <RoomChart room={room} />
                                    </div>
                                    <div className='col col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                                        <Alert />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={tab} index={1}>
                            <Charts />
                        </TabPanel>
                    </Box>
                </div>
                : <NotFound />
    )
}

export default RoomDetail;