import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";


export interface IUserState {
    currentUser:any
    loginMessage:string
}

export interface IState {
    userState : IUserState
}
export const state = combineReducers<IState>({
    userState:loginReducer,
   
})

