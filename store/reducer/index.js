import {combineReducers} from "redux";
import GetUsers from './getUsers'

const allReducers = combineReducers({
    usersRecord:GetUsers,
})

export default allReducers;