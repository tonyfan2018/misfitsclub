import React, {useState} from "react";

import axios from 'axios';


const Upload = ()=>{
    const [excerciseVideo, setExcerciseVideo] = useState("");
    const [title, setTitle] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [fileName, setFileName] = useState("");

    const onChangeFile = e => {

        setFileName(e.target.files[0]);
    }

    const changeOnClick = e => {
        e.preventDefault();

       const formData = new FormData();
       
       formData.append("excerciseVideo", excerciseVideo);
       formData.append("title", title);
       formData.append("introduction", introduction);
       formData.append("excerciseImage", fileName);


        setTitle("");
        setExcerciseVideo("");
        setIntroduction("");
    axios
    .post("/api/excercise/add", formData)
    .then(res => console.log(res.data))
    .catch(err =>{
        console.log(err);
    })
    }

return(



<div className="row">
    <form className="col s12" onSubmit={changeOnClick} encType="multipart/form-data">
      
      <div className="row">
        <div className="input-field col 12">
          <input onChange={e => setExcerciseVideo(e.target.value)} value={excerciseVideo} id="video" type="text" className="validate" />
          <label htmlFor="video">Ecercise Video (URL)</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col 12">
          <input   onChange={e => setTitle(e.target.value)} value={title}id="title" type="text" className="validate" />
          <label htmlFor="title">Excercise Title</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <textarea  onChange={e => setIntroduction(e.target.value)} value={introduction} id="introduction" className="materialize-textarea"></textarea>
          <label htmlFor="introduction">Introduction Area</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input type="file" filename="excerciseImage" id="goodimage"  onChange={onChangeFile} className="validate"/>
          <label htmlFor="goodimage">Image</label>
        </div>
      </div>

      <button className="btn waves-effect waves-light" type="submit" >Upload
        </button>
   
    </form>
  </div>


)


}

export default Upload;