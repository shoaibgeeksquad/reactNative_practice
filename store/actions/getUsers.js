import { getUsers , deleteSingleRecord } from '../services/getUsers'


export const getUsersLists = (dispatch) => {
    getUsers().then(res => {
        dispatch({
            type:"SET_USERS_DATA",
            payload:res
        })
    })
}

export const DeleteUser = (dispatch,id) => {
    getUsers(id).then(res => {
        dispatch({
            type:"DELETE_SINGLE_USER",
            payload:id
        })
    })
}