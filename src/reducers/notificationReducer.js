const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET':
            return action.payload.notification
        case 'EMPTY':
            return ''
        default:
            return state
    }
}
// ---------Action creator for notifications------

export const notificationAction = (message) => {

    return dispatch => {
        dispatch({
            type: 'SET',
            payload: {
                notification: message
            }
        })
    }
}
export const emptyAction = () => {

    return dispatch => {
        dispatch({
            type: 'EMPTY'
        })
    }
}


export default notificationReducer