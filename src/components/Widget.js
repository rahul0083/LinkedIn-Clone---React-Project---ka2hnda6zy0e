import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
export default function Widget() {
  return (
    <div className='widget'>
      
     
      <div className='widget_body'>
      <div className='widget_top'>
          <div className="widget__header">
            <h4>LinkedIn News</h4>
            <InfoIcon />
          </div>
          <ul className="widget__options">
            <li>
                <h4>Startup brace for SVB impact</h4>
                <p>2d ago * 2535 readers</p>
            </li>
            <li>
                <h4>Startup brace for SVB impact</h4>
                <p>2d ago * 2535 readers</p>
            </li>
            <li>
                <h4>Startup brace for SVB impact</h4>
                <p>2d ago * 2535 readers</p>
            </li>
            <li>
                <h4>Startup brace for SVB impact</h4>
                <p>2d ago * 2535 readers</p>
            </li>
            <li>
                <h4>Startup brace for SVB impact</h4>
                <p>2d ago * 2535 readers</p>
            </li>
          </ul>
   </div>
   </div>
   <div className="widget_bottom">
    <div className="widget__header">
        <h4>Today top courses</h4>
        <InfoIcon />
    </div>
    <div className="widget__body">
        <ul className="widget__options">
        <li>
                <h4>Startup brace for SVB impact</h4>
                <p>2d ago * 2535 readers</p>
            </li>
            <li>
                <h4>Startup brace for SVB impact</h4>
                <p>2d ago * 2535 readers</p>
            </li>
        </ul>
    </div>
   </div>
   </div>
    
  )
}
