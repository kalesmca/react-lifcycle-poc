import customerReducer from "./customers";
import categoryReducer from "./category";
import taskReducer from "./task";
import profile from "./profile";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    customers:customerReducer,
    taskInfo: taskReducer,
    categoryInfo: categoryReducer, 
    profile
})

export default rootReducer;