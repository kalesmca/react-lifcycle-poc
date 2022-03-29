import {ADD_STOCK_INVESTMENTS} from '../../constants/actions';
import {base_url, INVESTMENTS_URL} from '../../constants/urls';
import {get, putData} from '../services/apiService';


    export const addStockInvest = (data) => async(dispatch) =>{
        console.log('action data:', data)
        const req ={
            url: base_url+INVESTMENTS_URL,
            data: data
        }
    
        await putData(req).then((stockRes)=>{
            dispatch({type:ADD_STOCK_INVESTMENTS, payload: stockRes.data})
        })
    
    
    }
