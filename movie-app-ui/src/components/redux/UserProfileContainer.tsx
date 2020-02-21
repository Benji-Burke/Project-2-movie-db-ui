import { connect } from "react-redux";
import { IState } from "../../reducers";
import { UserProfileComponent } from "../UserProfileComponent";


const mapStateToProps = (state:IState) => {
    return {
        
        user:state.searchState.searchUser
    }
}



export default connect(mapStateToProps)(UserProfileComponent)