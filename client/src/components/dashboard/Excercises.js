import React, {Fragment,useState} from "react";
import spinner from "../dashboard/spiner.gif"
import { Link} from "react-router-dom";
import axios from 'axios';
import "./style.css";
import { Button } from "react-bootstrap";



const Excercises = ({uploads})=>{
 const [excercise, setExcercise] = useState([]);


 const deleteExcercise = id => {
    axios.delete(`/api/excercise/${id}`).then(res => alert(res.data));
    setExcercise(excercise.filter(elem => elem._id !==id));
  

 }

return(
<Fragment>
<div className="ListCon">
    {!uploads.length ? <img style={{width: "30px"}} src={spinner} alt="loading..." />:
    
    uploads.map((upload,key )=> (
        
        <div className="cardBox" key={key}>
       
        <Link to={{pathname: `/dashboard/${upload._id}`}}>
        <img src={`/uploads/${upload.excerciseImage}`} alt="..." className="PicCard waves-effect waves-light hoverable accent-3" />
        </Link>
        <h4 className="exeTitle" >{upload.title}</h4>
        
        {/* delete function only for developer use, so comment out temporally */}

        {/* <button onClick={()=> deleteExcercise(upload._id)}>
        <h3>Delete Article</h3></button> */}

        </div>
       
            
            ))}
</div>
</Fragment>

)


}

export default Excercises;
