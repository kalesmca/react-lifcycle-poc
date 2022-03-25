import {GET_CUSTOMERS, ADD_CUSTOMER, UPDATE_CUSTOMER} from '../../constants/actions';

import {get} from '../services/apiService';


export const  getCustomerList = () => async(dispatch) => {
    await  get('http://localhost:3000/customers').then((res)=>{
        console.log('get Customer Response :', res);
        dispatch ({type: GET_CUSTOMERS, payload: res.data})
    })
    

}

