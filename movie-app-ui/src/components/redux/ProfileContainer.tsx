import { connect } from "react-redux";
import { IState } from "../../reducers";
import { ProfileComponent } from "../ProfileComponent";
import { updateCurrentUser } from '../../action-mappers/login-actions'


const mapStateToProps = (state:IState) => {
    return {
        
        user:state.userState.currentUser



        
    }
}



export default connect(mapStateToProps)(ProfileComponent)