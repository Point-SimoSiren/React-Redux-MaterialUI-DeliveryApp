import usersService from '../services/users'

const userReducer = (state = [], action) => {
    let newState = [...state]
    switch (action.type) {

        case 'INIT':
            return action.payload
        default: return state

        case 'CREATE':
            return newState.concat(action.payload)
    }
}

//------------------ACTION-CREATOR-------------------

export const initUsersAction = () => {
    return async dispatch => {
        const users = await usersService.getAll()
        dispatch({
            type: 'INIT',
            payload: users
        })
    }
}

export const createAction = submitted => {
    return async dispatch => {
        const newUser = await usersService.create(submitted)
        dispatch({
            type: 'CREATE',
            payload: newUser
        })
    }
}

export default userReducer