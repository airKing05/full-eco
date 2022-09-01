import React from 'react';
import './custom-btn.style.css';

export default function CustomBtn({children, ...otherProps}) {
  return (
      <button className='custom-btn btn btn-lg btn-dark mt-3' {...otherProps}>{children}</button>
  )
}
