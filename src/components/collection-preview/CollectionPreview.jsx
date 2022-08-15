import React from 'react';
import CollectionItem from '../collection-item/CollectionItem.component';

function CollectionPreview({title, items}) {
  return (
    <div className='container mt-5'>
        <h3 className='fs-3 fw-bold'>{title}</h3>
        <div className='row mt-3'>
            {
                items
                .filter((item, index) => index < 4)
                .map(({id, ...otherItems}) => (
                    <CollectionItem key={id} {...otherItems}/>
                ) )
            }
        </div>
    </div>
  )
}

export default CollectionPreview;