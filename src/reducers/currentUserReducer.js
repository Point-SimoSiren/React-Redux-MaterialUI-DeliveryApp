const currentUserReducer = (state = null, action) => {

    switch (action.type) {

        case 'SETCURRENT':
            return action.payload
        default: return state

        case 'CLEAR':
            return null
    }
}

//------------------ACTION-CREATORS-------------------

export const setCurrentUserAction = currentUser => {
    return async dispatch => {
        dispatch({
            type: 'SETCURRENT',
            payload: currentUser
        })
    }
}

export const logoutAction = () => {
    return async dispatch => {
        dispatch({
            type: 'CLEAR'
        })
    }
}

export default currentUserReducer