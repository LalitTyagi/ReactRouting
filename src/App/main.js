import React, { Component } from 'react';
import {BrowserRouter,Route, Link, NavLink, Switch} from 'react-router-dom';

import Home from './components/home.js';
import Post from './components/post.js';
import Profile from './components/profile.js';
import PostItem from './components/postItem.js';

class Main extends Component {
  render(){
    return(
        <BrowserRouter>
          <div>
            <header>
              <NavLink to="/">Home</NavLink><br/>
              <NavLink to="/post"
                activeStyle={{color:"yellow"}}
                >Post</NavLink><br/>
              <NavLink to={{
                  pathname:'/profile'
                }}>Profile</NavLink><br/>
            </header>
            <hr/>
            <Switch>
                <Route path = "/post/:id/:username" component={PostItem} />
                <Route path = "/profile" component={Profile} />
                <Route path = "/post" exact component={Post} />
                <Route path = "/" exact component={Home} />
                <Route render = {()=><h3>Error 404</h3>}/>
          </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default Main;
