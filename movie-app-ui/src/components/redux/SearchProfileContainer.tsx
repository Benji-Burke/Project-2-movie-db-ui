import { connect } from "react-redux";
import { IState } from "../../reducers";
import { SearchProfileComponent } from "../SearchProfileComponent";
import { updateSearchUser } from '../../action-mappers/search-actions'


const mapStateToProps = (state:IState) => {
    return {

        searchUser:state.searchState.searchUser,
        searchMessage: state.searchState.searchMessage,
        user:state.userState.currentUser
    }
}

const mapDispatchToProps = {
    //contains functions that will return actions
    //that we want the login component to be able to call
    //this is where the action mappers get passed in to the component
    updateSearchUser
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchProfileComponent)