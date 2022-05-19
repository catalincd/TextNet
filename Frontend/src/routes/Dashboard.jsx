import React, {useContext, useState, useEffect} from "react"
import { UserContext } from "../UserContext"
import { useHistory } from "react-router-dom";
import Title from 'reactjs-title'
import '../index.css'
import Post from '../components/Post'
import PostCreator from '../components/PostCreator'

var CNT = 0;

const Dashboard = (props) => {
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();
  const [addPost, addNewPost] = useState('');

  const update = (post) => {
    addNewPost(post)
  } 

  if(user == null || user === null){
    history.push("/");
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/getPosts`, {method: "GET"})
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
  }, [addPost]);

  return (
    <div>
      <h1>TextNet</h1>
      <div className="postsContainer">
        <PostCreator updatePage={update} />
        {
          [...posts].reverse().map((post) => <Post key={post._id} username={post.username} profile={post.profilePicture} text={post.text} date={post.createdAt}/>)
        }
      </div>
      
    </div>
  );
}


export default Dashboard;