import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) =>{
    return(
      <div>
        <Link to={{
            pathname:`${props.match.url}/post`
          }}>take me to /profile/post</Link>
      </div>
    );
  }

export default Profile;
