const showCartReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_CART':
            return true
        case 'HIDE_CART':
            return false
        default:
            return state
    }
}
// ---------Action creators------

export const showCartAction = () => {

    return dispatch => {
        dispatch({
            type: 'SHOW_CART'
        })
    }
}

export const hideCartAction = () => {

    return dispatch => {
        dispatch({
            type: 'HIDE_CART'
        })
    }
}

export default showCartReducer