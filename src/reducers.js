import {combineReducers} from 'redux'

import authReducer from './Auth/reducer'
import userReducer  from './Components/Containers/Users/reducer'

let {reducer: formReducer} = require('redux-form');



export default combineReducers({
    //store --state 
    auth   : authReducer,
    users  : userReducer,
    
    //form reducer --- react redux form
    form: formReducer
})
