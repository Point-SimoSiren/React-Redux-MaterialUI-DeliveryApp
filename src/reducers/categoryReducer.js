import categoryService from '../services/categories'
import { notificationAction, emptyAction } from '../reducers/notificationReducer'
import { positiveAction, negativeAction } from '../reducers/positivityReducer'

const categoryReducer = (state = [], action) => {
    let newState = [...state]
    switch (action.type) {

        case 'INIT_CATEGORIES':
            return action.payload
        
        case 'CREATE_CATEGORY':
            return newState.concat(action.payload)

        case 'REMOVE_CATEGORY':
            return action.payload.categories.filter(c => c.category_id !== action.payload.id)
        
        default: return state
            /** return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      }; */
        
        
        /*case 'UPDATE':
            const id = action.payload.id
            const found = newState.findIndex((category) => {
                return category.id === id
            })
            newState[found].likes = newState[found].likes + 1
            return newState*/
    }
}

//------------------ACTION-CREATORS-------------------

export const createAction = (token, object) => {
    return async dispatch => {
        const status = await categoryService.create(object)
        alert(status)
        if (status == 200) {
        dispatch({
            type: 'CREATE_CATEGORY',
            payload: object
        })
        dispatch(positiveAction())
        dispatch(notificationAction(
        `Category "${object.name}" added`
            ))
            setTimeout(() => {
                dispatch(emptyAction())
            }, 4000)
        }
        else {
            dispatch(negativeAction())
            dispatch(notificationAction(
                `Adding category was not successfull`
            ))
            setTimeout(() => {
                dispatch(emptyAction())
            }, 4000)
        }
    }
}


export const removeAction = (token, id, categories) => {
    return async dispatch => {
        const deleted = await categoryService.remove(id)
        if (deleted == 204) {
        dispatch({
            type: 'REMOVE_CATEGORY',
            payload: {
                id: id,
                categories: categories
            }
        })
        dispatch(positiveAction())
        dispatch(notificationAction(
        `Category removed successfully`
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

export const initCategoriesAction = () => {
    return async dispatch => {
        const categories = await categoryService.getAll()
        dispatch({
            type: 'INIT_CATEGORIES',
            payload: categories
        })
    }
}
/*
export const likeAction = (category) => {
    return dispatch => {
        categoryService.update(category.id, category)
        dispatch({
            type: 'UPDATE',
            payload: {
                id: category.id,
                category: category
            }
        })
    }
}
*/

export default categoryReducer
