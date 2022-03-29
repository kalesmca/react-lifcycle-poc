import{UPDATE_INVEST_CONST_DATA} from '../../constants/actions';
import {base_url, INVEST_CONST_DATA_URL} from '../../constants/urls';
import {get, putData} from '../services/apiService';


export const addStockData = (data) => async(dispatch) =>{
    const req ={
        url: base_url+INVEST_CONST_DATA_URL,
        data: data
    }

    await putData(req).then((stockRes)=>{
        dispatch({type:UPDATE_INVEST_CONST_DATA, payload: stockRes.data})
    })


}