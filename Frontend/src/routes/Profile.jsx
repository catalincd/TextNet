import React, {useContext, useEffect, useState} from "react"
import { UserContext } from "../UserContext"


const Profile = (props) =>{

    const {user, setUser} = useContext(UserContext);
    const thisPic = (user.pic == null || user.pic == "default.jpg")? "http://localhost:8000/images/default.jpg":"http://localhost:8000/images/"+user.pic;
    const [image, setImage] = useState(thisPic);
    console.log(image); 

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setImage(URL.createObjectURL(img));
        }
      };

    return (
        <div className="profileWrapper">
            <div>
                <h1>Select Image</h1>
                <label for="inputImg" className="imgLabel">
                        <img src={image} className="profileImg" />
                        <p className="uploadP">Upload</p>
                        <input id="inputImg" className="inputImg" type="file"  name="inputImg" onChange={onImageChange} accept=".jpg,.png"/>
                </label>
                
          </div>
        </div>
    );
}

export default Profile