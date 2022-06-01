const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ROOM_INFO_SUCCESS":
            return {
                ...state,
                loaded: true,
                rooms: action.payload.map(p => {
                    return {
                        ...p,
                        detailLoaded: false,
                        detail: null,
                        updated_date: new Date()
                    }
                })
            };
        case "SET_ROOM_INFO_FAILED":
            return {
                ...state,
                loaded: true,
                rooms: []
            };
        case "SET_ROOM_DETAIL_INFO_SUCCESS":
            let room = state.rooms;
            room.map(r => {
                if (r.id == action.payload.id) {
                   r.detailLoaded = true;
                   r.detail = action.payload.data; 
                   r.updated_date = new Date(); 
                }
            })
            return {
                ...state,
                loaded: true,
                rooms: room
            };
        case "SET_ROOM_DETAIL_INFO_FAILED":
            let roomFailed = state.rooms;
            roomFailed.map(r => {
                if (r.id == action.payload.id) {
                   r.detailLoaded = true;
                   r.detail = action.payload.data; 
                }
            })
            return {
                ...state,
                loaded: true,
                rooms: roomFailed
            };
        default:
            return state;
    }
};

export default reducer;
