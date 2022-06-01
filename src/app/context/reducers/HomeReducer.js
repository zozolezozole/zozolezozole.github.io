const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ROOM_INFO_SUCCESS":
            return {
                ...state,
                loaded: true,
                rooms: [
                    { name: 'Main Hall', rate: '3.5', route: '/overview/main_hall' },
                    { name: 'Reception', rate: '3.5', route: '/overview/reception' },
                    { name: 'Main Stairway', rate: '3.5', route: '/overview/main_stairway' },
                    { name: 'Rear Stairway', rate: '5', route: '/overview/rear_stairway' },
                    { name: 'Front Office', rate: '4', route: '/overview/front_office' },
                    { name: 'Board Room', rate: '2.5', route: '/overview/board_room' },
                    { name: 'Conference Room', rate: '3.5', route: '/overview/conference_room' }
                ]
            };
        default:
            return state;
    }
};

export default reducer;
