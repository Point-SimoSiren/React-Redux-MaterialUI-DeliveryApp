import itemService from '../services/items'
import { notificationAction, emptyAction } from '../reducers/notificationReducer'
import { positiveAction, negativeAction } from '../reducers/positivityReducer'

const itemReducer = (state = [], action) => {
    let newState = [...state]
    switch (action.type) {

        case 'INIT_ITEMS':
            return action.payload
        default: return state

        case 'CREATE_ITEM':
            return newState.concat(action.payload)

        case 'REMOVE_ITEM':
            return action.payload.items.filter(i => i.item_id !== action.payload.id)


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


export const createAction = (token, object) => {
    return async dispatch => {
        const status = await itemService.create(object)
        alert(status)
        dispatch({
            type: 'CREATE_ITEM',
            payload: object
        })
    }
}

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


export const initItemsAction = () => {
    return async dispatch => {
        const items = await itemService.getAll()
        dispatch({
            type: 'INIT_ITEMS',
            payload: items
        })
    }
}

/*
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

export default itemReducer