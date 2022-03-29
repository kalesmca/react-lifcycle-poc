import staticData from '../../data/application_data.json';
import {GET_INVEST_CONST_DATA, ADD_STOCK_INVESTMENTS} from '../../constants/actions';

const initState = staticData.investments;

const investments = (state=initState, action) =>{
    switch(action.type){
        case ADD_STOCK_INVESTMENTS: {
            return{...state,  ...action.payload}
            break;
        }
        case GET_INVEST_CONST_DATA:{
            return { ...state};
            break;
        }
        default:{
            return{...state}
        }

    }
}

export default investments;