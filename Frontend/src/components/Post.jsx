import React, {useContext, useState, useEffect} from "react"
import '../index.css'


const Post = (props) => {

    const imgHref = 'http://localhost:8000/images/'

    return (
        <div className="post">
            <div className="postDetails">
                <img src={imgHref + props.profile} />
                <div className="postNames">
                    <p className="posterDetails">{props.username}</p>
                    <p className="postDate">{props.date}</p>
                </div>
            </div>
            <div className="postContentContainer">
                <p className="postContent">{props.text}</p>
            </div>
        </div>
    );
};



export default Post;