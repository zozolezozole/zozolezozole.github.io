import React, { createContext, useReducer } from 'react';
import RoomReducer from '../reducers/RoomReducer';
import { getRequest } from '../../service/service';
import { PATHS } from '../../service/ServicePath';

const RoomContext = createContext();
const RoomConsumer = RoomContext.Consumer;

const initialState = {
    loaded: false,
    rooms: []
}

const RoomProvider = ({ children }) => {

    const [roomInfo, dispatch] = useReducer(RoomReducer, initialState);

    const setRooms = () => {
        getRequest(PATHS.api + PATHS.api_routes.rooms).then(res => {
            dispatch({ type: "SET_ROOM_INFO_SUCCESS", payload: res.data });
        }).catch(err => {
            dispatch({ type: "SET_ROOM_INFO_FAILED", payload: [] });
        })
    };

    const setRoomDetail = (id) => {
        getRequest(PATHS.api + PATHS.api_routes.room_detail + id).then(res => {
            dispatch({ type: "SET_ROOM_DETAIL_INFO_SUCCESS", payload: { id: id, data: res.data } });
        }).catch(err => {
            dispatch({ type: "SET_ROOM_DETAIL_INFO_FAILED", payload: { id: id, data: null } });
        })
    };

    return (
        <RoomContext.Provider value={{ roomInfo, setRooms, setRoomDetail }}>
            {children}
        </RoomContext.Provider>
    );

}

export { RoomContext, RoomProvider, RoomConsumer };