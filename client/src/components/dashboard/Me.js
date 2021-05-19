import React,{Fragment} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button } from "react-bootstrap";
import "./style.css";

class Me extends React.Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <Fragment>
    <div>
        <div className="TopBarME TopG">
          <h3 className="Toptitle TitleW">Me</h3>
        </div>

      <div className="PerCon">

      {!user.name ? <h1>user avatar true</h1> :  <img src="/uploads/avatar.png" alt="..."  className="PerAvater" />}
      
            <span>
              <b><h4 className="userName">{user.name.split(" ")[0]}</h4></b> 
              </span>
         
              <Button
              style={{
                font: "12px",
                color: "#10caa6",
                borderColor: "white",
                background: "white",
                width: "140px",
                height: "40px",
                borderRadius: "6px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable accent-3 Logout"
            >
              Logout
            </Button>
            
            {/* upload function only for developer use, so comment out temporally */}

            {/* <Button
              style={{
                font: "10px",
                color: "white",
                borderColor: "#10caa6",
                background: "#10caa6",
                width: "100px",
                height: "30px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
            >
                  <NavLink to="/dashboard/upload">
                  Upload
                  </NavLink>
                  </Button> */}
             
        </div>
      </div>
     </Fragment>
    );
  }
}
Me.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Me);
