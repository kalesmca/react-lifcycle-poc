import {GET_PROFILE, UPDATE_PROFILE} from '../../constants/actions';
import {base_url, PROFILE_URL} from '../../constants/urls';

import {get, putData} from '../services/apiService';

export const getProfile = () => async(dispatch) =>{
    await get(base_url+PROFILE_URL).then((res)=>{
        if(res.data){
            dispatch({type: GET_PROFILE, payload: res.data})
        }
    })

}

export const updateProfile = (data) => async(dispatch) =>{
    const req ={
        url: base_url+PROFILE_URL,
        data: data
    }
    await putData(req).then((res)=>{
        if(res.data){
            dispatch({type: UPDATE_PROFILE, payload: res.data})
        }
    })

}