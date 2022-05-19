import React, {useContext, useEffect, useState} from "react"
import { UserContext } from "../UserContext"



const PostCreator = (props) => {

    const [btn, showBtn] = useState(false);
    const {user, setUser} = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target.postText.value;

        fetch(`http://localhost:8000/createPost?name=${user.name}&profPicture=${user.pic}&text=${text}`, {method: "POST"})
        .then(response => response.json())
        .then(data => {
          if(data.status){
            props.updatePage(text);
          }
          else{
            console.log("ERROR POSTING")
          }
        });
    }

    const changeBtn = (text) => {
        showBtn(text.length > 2 && text.length < 201);
    }

    return (
        <div className="postCreator">
            <form className="postCreatorForm" onSubmit={handleSubmit}>
                <label className="postLabel">
                    <input className="postInput" name="postText" type="text" placeholder="Write a post..." onChange={event => changeBtn(event.target.value)}/>
                </label>
                {
                    btn && 
                    <input className="postButton" type="submit" value="Post"/>
                }
            </form>
        </div>
      );
};

export default PostCreator;