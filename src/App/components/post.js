import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Post extends Component {
  render(){
    return(
      <div>
        <Link to="/post/1">Post 1</Link><br/>
        <Link to="/post/2">Post 2</Link><br/>
        <Link to="/post/3">Post 3</Link>
      </div>
    );
  }
}

export default Post;
