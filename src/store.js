import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import positivityReducer from './reducers/positivityReducer'
import showCartReducer from './reducers/showCartReducer'
import categoryReducer from './reducers/categoryReducer'
import itemReducer from './reducers/itemReducer'
import cartReducer from './reducers/cartReducer'
import userReducer from './reducers/userReducer'
import currentUserReducer from './reducers/currentUserReducer'

const reducer = combineReducers({
    notification: notificationReducer,
    positivity: positivityReducer,
    categories: categoryReducer,
    items: itemReducer,
    currentUser: currentUserReducer,
    users: userReducer,
    cartItems: cartReducer,
    showCart: showCartReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    
    )
    
)
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store