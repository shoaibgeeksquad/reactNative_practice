const initialState = {
    users: [],
}


const GetUsers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS_DATA':
            return {
                ...state,
                users: action.payload
            }
        case 'DELETE_SINGLE_USER':
        return {
                ...state,
                users: state.users.filter(single=> single.id !== action.payload)
            }
        default:
            return state;
    }
}

export default GetUsers;