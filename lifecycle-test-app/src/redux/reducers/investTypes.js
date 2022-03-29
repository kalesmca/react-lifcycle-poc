import staticData from '../../data/application_data.json';
import {GET_INVEST_CONST_DATA, UPDATE_INVEST_CONST_DATA} from '../../constants/actions';

const initState = staticData.investmentConstData;

const investTypes = (state=initState, action) =>{
    switch(action.type){
        case UPDATE_INVEST_CONST_DATA: {
            return{...state, ...action.payload}
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

export default investTypes;