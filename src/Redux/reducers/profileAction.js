import initialState from './initialState.json'
import { SET_PROFILE,UPDATE_PROFILE } from '../actions/actions'

const profileReducer=(state=initialState.profile,action)=>{
    switch(action.type){
        case SET_PROFILE :
            return {...action.payload}
            case UPDATE_PROFILE :
                return {...state,...action.payload}
                default : 
                return state
    }
}

export default profileReducer;