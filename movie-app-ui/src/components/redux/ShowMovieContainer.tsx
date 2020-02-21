import { connect } from "react-redux";
import { IState } from "../../reducers";
import { ShowMovieComponent } from "../ShowMovieComponent";


const mapStateToProps = (state:IState) => {
    return {
        
        user:state.userState.currentUser
    }
}



export default connect(mapStateToProps)(ShowMovieComponent)