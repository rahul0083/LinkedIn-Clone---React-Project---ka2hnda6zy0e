import React from 'react'
import '../styles/App.css';
import {Avatar} from '@material-ui/core';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__profile">
       
        <img src='https://healthyresumes.com/wp-content/uploads/2022/10/LinkedIn-Background-Photo-17-1.webp' />
       
        <div className="profile__details">
        <Avatar src=''/>
        <h4>Rahul Singh</h4>
        <p>Web Developer</p>

        </div>
        <div className="profile__stats">
          <span>Connections<br/><b>Grow your network</b></span>
          <span className="stat__number">
            10
          </span>
        </div>
      </div>
      <div className="sidebar__recent">
       <p>Recent</p>
       <p className="hash"><span>#</span> careers </p>
       <p className="hash"><span>#</span> india </p>
       <p className="hash"><span>#</span> web development </p>
       <div className="links">
       <a href="/">Groups</a><br />
       <div className='events'>
       <a href="/">Events</a>
       <a href="/" className='new_event'>+</a>
      </div>
      </div>
      <div className="followed__hashtags">
      <a href="/">Followed Hashtags</a><br />
      <p className="hash"><span>#</span> careers </p>
       <p className="hash"><span>#</span> india </p>
       <p className='seeall'>See all</p>
      </div>
      </div>
    
    </div>
  )
}
