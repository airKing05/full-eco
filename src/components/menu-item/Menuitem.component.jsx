import React from 'react';
import {Link} from "react-router-dom";
//import './menu-item.styles.scss';


export default function Menuitem({ title, imageUrl, width, height, linkUrl }) {
   
  return (
      <Link to={`${linkUrl}`}
      className=" my-4 d-flex justify-content-center rounded position-relative" style={{maxWidth: '400px'}}>
        
     
          <div className='rounded' style={{ backgroundImage: `url('${imageUrl}')`, backgroundPosition: 'center' }}>
              <img className='img-fluid rounded' style={{ width: `${width}px`, height: `${height}px` }}  src={imageUrl}  alt="photu"/>
          </div>
          <div className=' position-absolute bg-white p-3 rounded opacity-50 btn ' style={{top: '35%', left: '35%'}}>
              <h2 className='title'>{title}</h2>
              <span className='subtitle'>SHOP NOW</span>
          </div>
      </Link>
  )
}
