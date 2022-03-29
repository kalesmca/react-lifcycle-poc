import customerReducer from "./customers";
import categoryReducer from "./category";
import taskReducer from "./task";
import investTypes from "./investTypes";
import profile from "./profile";
import investments from './investments';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    customers:customerReducer,
    taskInfo: taskReducer,
    categoryInfo: categoryReducer, 
    profile,
    investConstData: investTypes,
    investments
    
})

export default rootReducer;