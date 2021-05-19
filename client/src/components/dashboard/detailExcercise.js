import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import spiner from "../dashboard/spiner-1.gif";

import "./style.css";

const DetailExcercise = (props)=>{

    const [excerciseVideo, setExcerciseVideo] = useState("");
    const [title, setTitle] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        axios
            .get(`/api/excercise/${props.match.params.id}`)
            .then(res => (
                setExcerciseVideo(res.data.excerciseVideo),
                setTitle(res.data.title),            
                setIntroduction(res.data.introduction),
                setFileName(res.data.excerciseImage)
    ))
            .catch(error => console.log(error));
    }, [props])
return(
<Fragment>
<div>
    {!title || !excerciseVideo || !introduction ? (
        <img style={{width: "30px"}} src={spiner} alt="loading..." />
    ) : (
        <>
        <div className="TopBar TopG">
        <h2 className="Toptitle TitleW">{title}</h2>
        </div>

       <div className="DetailCon">
            <iframe src={`${excerciseVideo}`} title="YouTube video player"  className="YVedio"></iframe>
            <h3 className="DetailTextTile ">Introduction</h3>
            <p className="DetailTextTile fontDar">{introduction}</p>
            <img src="/uploads/muscle.svg" alt="..." className="detailImg" />
        </div>

        </>
    )}

</div>
</Fragment>

)


}

export default DetailExcercise;
