import React from 'react';

function CollectionItem({ name, imageUrl, price }) {
  return (
    <div className='col-md-3 m-3 pb-3' style={{width: '22%', height: '350px'}}>
        <img src={imageUrl} className='img-fluid' alt="photu"  style={{width: '100%', height: '95%'}}/>
        <div className='position-relative d-flex justify-content-between'>
            <span className='fs-5'>{name}</span>
            <span className='fs-4'>${price}</span>
        </div>
    </div>
  )
}

export default CollectionItem;