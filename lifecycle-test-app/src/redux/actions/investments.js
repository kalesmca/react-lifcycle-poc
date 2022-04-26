import {ADD_INVESTMENTS} from '../../constants/actions';
import {base_url, INVESTMENTS_URL} from '../../constants/urls';
import {get, putData} from '../services/apiService';

// It should be common investments
    export const addInvest = (data) => async(dispatch) =>{
        console.log('action data:', data)
        const req ={
            url: base_url+INVESTMENTS_URL,
            data: data
        }
    
        await putData(req).then((res)=>{
            dispatch({type:ADD_INVESTMENTS, payload: res.data})
        })
    
    
    }
