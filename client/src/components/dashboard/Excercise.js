import React, {useState, useEffect,Fragment} from "react";

import { Route} from "react-router-dom";

import axios from 'axios';

import Excercises from "../dashboard/Excercises";

import "./style.css";



function Excercise() {
    let [upload, setUpload] = useState([]);

    useEffect(()=>{

        axios
            .get("/api/excercise")
            .then(response => setUpload(response.data));

    }, []);

    return (
        <Fragment>
        <div className="Excercise">
        <div className="TopBar">
            <h2 className="Toptitle">Choose Fitnees Mode</h2>
        </div>

        <div className="ExerciseBoxCon">
        <Route to="/" render={()=> <Excercises uploads={upload}/>}/>
        </div>

    
        </div>
        </Fragment>
      
    );
}

export default Excercise;
