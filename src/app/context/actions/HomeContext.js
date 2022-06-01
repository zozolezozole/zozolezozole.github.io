import React, { createContext, useReducer } from 'react';
import HomeReducer from '../reducers/HomeReducer';

const HomeContext = createContext();
const HomeConsumer = HomeContext.Consumer;

let json = require('../../../assets/demo/data.json');
console.log(json, 'the json obj');

// var objectWithGroupByName = {};
// for (var key in json) {
//     var name = json[key].name;
//     if (!objectWithGroupByName[name]) {
//         objectWithGroupByName[name] = [];
//     }
//     objectWithGroupByName[name].push(json[key]);
// }

// console.log(objectWithGroupByName, 'the json group');
// console.log(objectWithGroupByName['Echo physiology room'], "zoloo")

const initialState = {
    loaded: true,
    rooms: json
    // [
    //     { name: 'Main Hall', rate: '3.5', route: '/overview/main_hall' },
    //     { name: 'Reception', rate: '1.5', route: '/overview/reception' },
    //     { name: 'Main Stairway', rate: '3.5', route: '/overview/main_stairway' },
    //     { name: 'Rear Stairway', rate: '5', route: '/overview/rear_stairway' },
    //     { name: 'Front Office', rate: '4', route: '/overview/front_office' },
    //     { name: 'Board Room', rate: '2.5', route: '/overview/board_room' },
    //     { name: 'Conference Room', rate: '3.5', route: '/overview/conference_room' }
    // ]
}

const HomeProvider = ({ children }) => {

    const [homeInfo, dispatch] = useReducer(HomeReducer, initialState);

    const setRooms = () => {
        dispatch({ type: "SET_ROOM_INFO_SUCCESS", payload: [] });
    };

    return (
        <HomeContext.Provider value={{ homeInfo, setRooms }}>
            {children}
        </HomeContext.Provider>
    );

}

export { HomeContext, HomeProvider, HomeConsumer };