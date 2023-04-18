import React from 'react'
import '../styles/App.css';
import HeaderOptions from './HeaderOptions';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core';
export default function Header() {
  return (
    <div className='header'>
       <div className="header__left">
       <div className="header__logo">
            <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' />
        </div>
        <div className="header__search">
           <SearchIcon />
           <input type="text" placeholder='Search' />
       </div>
       </div>
        
       <div className="header__right">
           <HeaderOptions Icon={HomeIcon} title="Home"/>
           <HeaderOptions Icon={PeopleIcon} title="MyNetwork"/>
           <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
           <HeaderOptions Icon={MessageIcon} title="Messaging"/>
           <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
           <HeaderOptions avatar={Avatar} title="Rahul Singh"/>
       </div>
    </div>
  )
}
