import {GET_PROFILE, UPDATE_PROFILE} from '../../constants/actions';

const initState = {
    name:"sundari"
}

const profile = (state=initState, action) =>{

    switch(action.type){
        case GET_PROFILE: {
            return{...state, ...action.payload}
            break;
        }
        case UPDATE_PROFILE: {
            return{...state, ...action.payload}
        }
        default:{
            return{...state}
        }
    }

}

export default profile;