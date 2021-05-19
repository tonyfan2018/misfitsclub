import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row} from 'react-bootstrap';
import "./Landing.css"
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
      return (
        <Container style={{ height: "100vh" }} className="container valign-wrapper bgColor">

        <Row>
          <div className="bodyCon">
        <img src="/uploads/landing.jpg" alt="..." style={{width: "100vw"}} className="bgimg"/>
          <div className="col s12 center-align">
            <div className="TextCenter">
            <h4 className="contentWidth">
              <b className="fontGreenC" >WELCOME TO MISfits Club</b> 
            </h4>
            </div>
            <p className="flow-text t text-darken-1 fontWhiteC ContentfontSize">
              {/* If you didn't register before please do it know! */}
            </p>
            <br />

            <div className="col s6 topMa">
              <Link
                to="/register"
              >
                <Button 
                style={{
                  font:"12px",
                  color:"#10caa6",
                  borderColor:"aliceblue",
                  background: "aliceblue",
                  width: "140px",
                  height: "40px",
                  borderRadius: "6px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
               
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                Register
                </Button>
              </Link>
            </div>
            <div className="col s6 topMa">
              <Link
                to="/login"
              >
                <Button 
                style={{
                  font:"12px",
                  color:"#10caa6",
                  borderColor:"aliceblue",
                  background: "aliceblue",
                  width: "140px",
                  height: "40px",
                  borderRadius: "6px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
               
                className="btn btn-large waves-effect waves-light hoverable accent-3"
              >
                Log In
                </Button>
              </Link>
            </div>

          </div>
          </div>
        </Row>
      </Container>
      );
    }
  }

export default Landing;
