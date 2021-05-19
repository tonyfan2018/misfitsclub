

import React, {useState, useEffect,Fragment} from "react";
import axios from "axios";
import spiner from "../dashboard/spiner-1.gif";
import "./style.css";


const Newarticle = (props)=>{
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorName] = useState("");
    const [articleImage, setArticleImage] = useState("");

    useEffect(() => {
        axios
            .get(`/api/articles/${props.match.params.id}`)
            .then(res => (
                setTitle(res.data.title),
                setArticle(res.data.article),
                setAuthorName(res.data.authorname),
                setArticleImage(res.data.articleImage)
            ))
            .catch(error => console.log(error));
    }, [props])
return(
<Fragment>
<div>
    {!title || !article || !authorname ? (
        <img style={{width: "30px"}} src={spiner} alt="loading..." />
    ) : (
        <>

        <div className="TopBar TopG">
            <h2 className="Toptitle TitleW">MISFits Article</h2>
        </div>

        <div className="ArticleCon">
            <img src={`/uploads/${articleImage}`} alt="..." className="homeBanner MarginArtImg"/>
        
        
            <h2 className="ArticleTextTile">{title}</h2>
            <p className="ArticleTextAuthor">By {authorname}</p>
            <p className="ArtFontS">{article}</p>

        </div>
        </>
    )}

</div>
</Fragment>

)


}

export default Newarticle;
