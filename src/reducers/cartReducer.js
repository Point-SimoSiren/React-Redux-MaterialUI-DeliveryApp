import { notificationAction, emptyAction } from './notificationReducer'
import { positiveAction, negativeAction } from './positivityReducer'

const cartReducer = (state = [], action) => {
    //let newState = [...state]
    switch (action.type) {

        case 'INIT_CART':
            return action.payload

        case 'ADD_CART':
            return action.payload

        default: return state

        /*
        case 'REMOVE_ITEM':
            return action.payload.items.filter(i => i.item_id !== action.payload.id)
        */

        /*case 'UPDATE':
            const id = action.payload.id
            const found = newState.findIndex((item) => {
                return item.id === id
            })
            newState[found].likes = newState[found].likes + 1
            return newState
            */
    }
}

//------------------ACTION-CREATORS-------------------

export const initCartItemsAction = (cartItems) => {
  
    return async dispatch => {
        dispatch({
            type: 'INIT_CART',
            payload: cartItems
        })
    }
}


export const addCartAction = (object) => {
    
        var cartJSON = localStorage.getItem('cart')

        var cart = JSON.parse(cartJSON)
        if (cart) {
        var newCart = cart.concat(object)
        }
        const newCartJson = JSON.stringify(newCart)
        localStorage.setItem('cart', newCartJson)
        
        return async dispatch => {
        dispatch({
            type: 'CREATE_ITEM',
            payload: newCart
        })
    }
}

/*
export const removeAction = (token, id, items) => {
    return async dispatch => {
        const deleted = await itemService.remove(id)
        if (deleted == 204) {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: {
                id: id,
                items: items
            }
        })
        dispatch(positiveAction())
        dispatch(notificationAction(
        `Item removed successfully`
            ))
            setTimeout(() => {
                dispatch(emptyAction())
            }, 4000)
        }
        else {
            dispatch(negativeAction())
            dispatch(notificationAction(
                `Removal was not successfull`
            ))
            setTimeout(() => {
                dispatch(emptyAction())
            }, 4000)
        }
    }
    }


export const likeAction = (item) => {
    return dispatch => {
        itemService.update(item.id, item)
        dispatch({
            type: 'UPDATE',
            payload: {
                id: item.id,
                item: item
            }
        })
    }
}
*/

export default cartReducer