import { connect } from "react-redux";
import { IState } from "../../reducers";
import { ManagerComponent } from "../ManagerComponent";
import { updateCurrentUser } from '../../action-mappers/login-actions'


const mapStateToProps = (state:IState) => {
    return {
        
        user:state.userState.currentUser
    }
}



export default connect(mapStateToProps)(ManagerComponent)