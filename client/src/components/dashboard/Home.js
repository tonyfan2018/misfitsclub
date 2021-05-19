import React,{Fragment} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Article from "../dashboard/Article";

import "./style.css";

class Home extends React.Component {
 
  render() {
    const { user } = this.props.auth;
    return (
      <Fragment>
      <div className="AllCon">
            <div className="TopBar">
              <span>
                <b><p>Hello, {user.name.split(" ")[0]} Are you ready?</p></b>
              </span>
             </div>

        <div className="ExerciseBoxCon">

          <div className="bannerCon">
            <img src="/uploads/plank.png" alt="..." style={{width: "300px"}} className="homeBanner" />
            <p className="bannerTitle" >MISFits Help You Fitness at Home</p>
          </div>

            <h3 className="hTitle">Popular Workouts</h3>
            <Article />
        </div>
      </div>
      </Fragment>
    );
  }
}
Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Home);
