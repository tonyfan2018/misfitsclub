import React, {Fragment, useState} from "react";
import spinner from "../dashboard/spiner.gif"
import { Link} from "react-router-dom";
import axios from 'axios';

import "./style.css";


const Articles = ({posts})=>{
 const [article, setArticle] = useState([]);

 //DELETE Article BY ID
 const deleteArticle = id => {
    axios.delete(`/api/articles/${id}`).then(res => alert(res.data));
    setArticle(article.filter(elem => elem._id !==id));
   

 }

return(
    <Fragment>
<div>
    {!posts.length ? <img style={{width: "30px"}} src={spinner} alt="loading..." />:
    
    posts.map((post,key )=> (
      
        <div className="container" key={key}>
        
        <div className="bannerCon">
        <Link to={{pathname: `/dashboard/article/${post._id}`}}>
        <img src={`/uploads/${post.articleImage}`} alt="..." className="homeBanner" />
        </Link>
        <p className="bannerTitle">{post.title}</p> 
        </div>
       


    {/* delete function only for developer use, so comment out temporally */}
        {/* <button onClick={()=> deleteArticle(post._id)} style={{
                width: "80px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "2rem",
                float:"right"
              }} className="btn btn-small waves-effect waves-light  red accent-3">Delete Article</button>
 */}

        </div>//container
       
            
            ))}
</div>
 </Fragment>

)


}

export default Articles;
