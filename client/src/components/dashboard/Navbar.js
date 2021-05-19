import React, { Component } from "react";
import { Container, Col, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,NavLink,BrowserRouter as Router,Switch} from "react-router-dom";
import Me from "./Me";
import Excercise from "../dashboard/Excercise";

import Home from "../dashboard/Home";
import Upload from "../dashboard/Upload";
import DetailExcercise from "../dashboard/detailExcercise";
import Newarticle from "../dashboard/Newarticle";



class Navbar extends Component {
    render() {
      return (
   
      
        <Router>
             
          <Switch>
               
               <Route exact path="/dashboard/home" component={(props) => <Home  />} />
               <Route  path="/dashboard/me" component={(props) => <Me  />} />
               <Route path="/dashboard/upload" component={(props) => <Upload  />} />
               <Route path="/dashboard/excercise" component={(props) => <Excercise  />} />
               <Route path="/dashboard/article/:id" render={(props)=> <Newarticle {...props} />}/>  
               <Route path="/dashboard/:id" render={(props)=> <DetailExcercise {...props} />} />
 
             </Switch>
             <Container>
            <div className="NavBar">
             <Row>

           
              <Col>
                  <NavLink  to="/dashboard/home">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-door-fill iconCol" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                  </svg>
                  </NavLink>
              </Col>
                
              <Col>
                  <NavLink  to="/dashboard/excercise">
                  <svg t="1618281931163" className="icon iconCol" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5340" width="29" height="29"><path d="M256 213.333333v597.333334h128v-256h256v256h128V213.333333h-128v256H384V213.333333zM128 640a42.666667 42.666667 0 0 0 42.666667 42.666667h42.666666V341.333333H170.666667a42.666667 42.666667 0 0 0-42.666667 42.666667v85.333333H85.333333v85.333334h42.666667v85.333333z m768-256a42.666667 42.666667 0 0 0-42.666667-42.666667h-42.666666v341.333334h42.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-85.333333h42.666667v-85.333334h-42.666667V384z" p-id="5341" fill="#10caa6"></path></svg>
                  </NavLink>
              </Col>

              <Col> 
                  <NavLink to="/dashboard/me">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-square iconCol" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                  </svg>
                  </NavLink>
              </Col> 
                
      
              </Row>
              </div>
             </Container>
      </Router>
   
        
      );
    }
  }

export default Navbar;
