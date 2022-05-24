import React, {useContext, useEffect, useState} from "react"
import { UserContext } from "../UserContext"
import Post from '../components/Post'

const Profile = (props) =>{

    const {user, setUser} = useContext(UserContext);
    const thisPic = (user.pic == null || user.pic == "default.jpg")? "http://localhost:8000/images/default.jpg":"http://localhost:8000/images/"+user.pic;
    const [image, setImage] = useState(thisPic);
    const [posts, setPosts] = useState([]);
    console.log(image); 


    useEffect(() => {
      fetch(`http://localhost:8000/getUserPosts?name=${user.name}`, {method: "GET"})
          .then(response => response.json())
          .then(data => {
            console.log(data);
            if(data.status){
              setPosts(data.posts);
              console.log(posts);
            }
            else{
              console.log("Error loading posts");
            }
          });
    }, []);


    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage(URL.createObjectURL(img));
        }
      };

    return (
        <div className="profileWrapper">
            <div>
                <label for="inputImg" className="imgLabel">
                        <img src={image} className="profileImg" />
                        <p className="uploadP">Upload</p>
                        <input id="inputImg" className="inputImg" type="file"  name="inputImg" onChange={onImageChange} accept=".jpg"/>
                </label>
                <h1>{user.name}</h1>
          </div>
          <div className="postsContainer">
          {
            [...posts].reverse().map((post) => <Post key={post._id} username={post.username} profile={post.profilePicture} text={post.text} date={post.createdAt}/>)
          }
        </div>
        </div>
    );
}

export default Profile