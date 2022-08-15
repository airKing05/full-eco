import React from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import SHOP_DATA from './shopData';


export default class ShopPage extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
  render() {
    const {collections} = this.state;
    return (
      <div>
        {
                collections.map(({id, ...otherCollection}) => (
                    <CollectionPreview key={id} {...otherCollection}/>
                ))
        }
    </div>
    )
  }
}
