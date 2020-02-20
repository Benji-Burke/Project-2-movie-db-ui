import { ISearchState } from ".";
import { loginTypes } from "../action-mappers/login-actions";
import { searchTypes } from "../action-mappers/search-actions";

// first, we define the initial state of this piece of the store
const initialState:ISearchState = {
    searchUser: null,
    searchMessage:''
    
}


//we have a function that recieves actions, and returns the new state after that action
export const searchReducer = (state = initialState, action:any) => {
    //all of the different ways for the reducer to update state
    //based on the type of the action it recieves
    switch (action.type) {
        case searchTypes.SUCCESSFUL_SEARCH:{
            return {//we always return the new state, which means, spread the old state
                ...state,
                searchUser:action.payload.searchUser,
                searchMessage: 'found it'
                
                
            }
        }
        case searchTypes.UNSUCCESSFUL_SEARCH: {
            return {
                ...state,
                searchMessage:action.payload.searchMessage
            }
        } 
    
        default:
            return state;
    }
}