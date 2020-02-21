
import { apiSearchProfile } from "../remote/searchProfile/search-profile_client"

export const searchTypes = {
    SUCCESSFUL_SEARCH: 'SEARCH_SUCCESSFUL',
    UNSUCCESSFUL_SEARCH: 'SEARCH_UNSUCCESSFUL'
}

export const updateSearchUser = (username:string,role:String) => async (dispatch:any) => {
    let response:any = await apiSearchProfile(username, role)

    console.log("search action "+ response.body)
    if(response.body){
        dispatch({//this object is called an action
            type:searchTypes.SUCCESSFUL_SEARCH,
            payload:{
                searchUser:response.body
            }
        })
    }else {
        dispatch({
            type:searchTypes.UNSUCCESSFUL_SEARCH,
            payload: {
                searchMessage:response.searchMessage
            }
        })

    }


}