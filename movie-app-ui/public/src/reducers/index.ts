import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { searchReducer } from "./search-reducer";


export interface IUserState {
    currentUser:any
    loginMessage:string
}
export interface ISearchState {
    searchUser:any
    searchMessage:string
}

export interface IState {
    userState : IUserState
    searchState: ISearchState
}
export const state = combineReducers<IState>({
    userState:loginReducer,
    searchState:searchReducer
   
})

