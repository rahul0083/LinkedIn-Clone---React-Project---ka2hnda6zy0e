import { Avatar } from '@material-ui/core'
import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import LoopIcon from '@material-ui/icons/Loop';
import SendIcon from '@material-ui/icons/Send';

export default function Post({name,description,message,photoUrl}) {
  return (
    <div className='post'>
      <div className="post__header">
        <div className="post__header__Left">
           <Avatar src={photoUrl} />
           <div className="post_profile_detail">
            <h3>{name}</h3>
            <p>{description}</p>
           </div>
        </div>
        <div className="post__header__Right">
            <MoreHorizIcon/>
            </div>
           
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__footer">
        <div className="post__footer__option">
            <ThumbUpAltIcon />
            <span>Like</span>
        </div>
        <div className="post__footer__option">
            <CommentIcon />
            <span>Comment</span>
        </div>
        <div className="post__footer__option">
            <LoopIcon />
            <span>Repost</span>
        </div>
        <div className="post__footer__option">
            <SendIcon />
            <span>Share</span>
        </div>
      </div>
    </div>
  )
}
