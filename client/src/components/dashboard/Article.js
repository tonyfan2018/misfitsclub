import React, {useState, useEffect, Fragment} from "react";

import { Route} from "react-router-dom";

import axios from 'axios';

import Articles from "../dashboard/Articles";

import "./style.css";

function Article() {
    let [posts, setPosts] = useState([]);

    useEffect(()=>{

        axios
            .get("/api/articles")
            .then(response => setPosts(response.data));

    }, []);

    return (
        <Fragment>
        <div className="Article">
     
        <Route to="/" render={()=> <Articles posts={posts}/>}/>
    
        </div>
      </Fragment>
    );
}

export default Article;
