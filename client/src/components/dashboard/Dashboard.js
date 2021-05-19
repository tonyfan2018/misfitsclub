import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./Dashboard.css";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    // const { user } = this.props.auth;
    return (
      <Container valign-wrapper="true">
        <div className="col s12 center-align">
          <div className="right-align">
            
          </div>
          {/* <Row 
              style={{
                margin:"50px"
              }}
            >
            <h4>
              <b>Are you ready {user.name.split(" ")[0]}? 👏</b> 
              </h4>
            </Row>   */}
          <Row>
            <Navbar />
          </Row>
        </div>
      </Container>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
