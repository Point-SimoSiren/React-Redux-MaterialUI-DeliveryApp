const positivityReducer = (state = 'positive', action) => {
    switch (action.type) {
        case 'POSITIVE':
            return 'positive'
        case 'NEGATIVE':
            return 'negative'
        default:
            return state
    }
}
// ---------Action creator for type of notification (error or success)------

export const positiveAction = () => {

    return dispatch => {
        dispatch({
            type: 'POSITIVE'
        })
    }
}
export const negativeAction = () => {

    return dispatch => {
        dispatch({
            type: 'NEGATIVE'
        })
    }
}

export default positivityReducer