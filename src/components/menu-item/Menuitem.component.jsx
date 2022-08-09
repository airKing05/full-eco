import React from 'react';
import './menu-item.styles.scss';


export default function Menuitem({ title, imageUrl, size }) {
  return (
      <div 
      className={`${size} item-menu`}
        
      >
      {/* content ko wrap nahi kiya kyoki fir under wala content bhi bda ho jata hover se */}
          <div className='background-image' style={{ background: `url${imageUrl}` }}></div>
          <div className='content'>
              <h2 className='title'>{title}</h2>
              <span className='subtitle'>SHOP NOW</span>
          </div>
      </div>
  )
}
