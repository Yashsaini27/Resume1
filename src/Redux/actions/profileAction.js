import { SET_PROFILE } from "./actions";
import { UPDATE_PROFILE } from "./actions";

export const setprofile=(profile)=>{
    return{
        type:SET_PROFILE,
        payload: profile
    }
}

export const updateprofile = (profile)=>{
    return{
        type:UPDATE_PROFILE,
        payload: profile
    }
}