import React from 'react'

export default function FormInput({handleChange, label, ...otherProps}) {
    let firstChar = label.charAt(0).toUpperCase();
    let remainingStr = label.slice(1);
    let capitalizedLabel = firstChar + remainingStr;
   
  return (
      <div className='class="mb-3 row"'>
          <label for={`input${label}`} class="col-4 col-form-label fs-5 fw-normal text-info">{capitalizedLabel}</label>
          <input class="col-8 form-control-plaintext border" id={`input${label}`} onChange={handleChange}  {...otherProps}/>
    </div>
  )
}
