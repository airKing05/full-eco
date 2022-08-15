import React from 'react'
import Menuitem from '../menu-item/Menuitem.component';
import './directory.styles.scss'

export default class Directory extends React.Component {
    constructor(){
        super();
        this.state ={
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats',
                    width: 300,
                    height: 250,
                    linkUrl: 'hats'

                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    width: 300,
                    height: 250,
                    linkUrl: 'shop/jackets',
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    width: 300,
                    height: 250,
                    linkUrl: 'shop/sneakers',
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    width: 500,
                    height: 300,
                    id: 4,
                    linkUrl: 'shop/womens',
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    width: 500,
                    height: 300,
                    id: 5,
                    linkUrl: 'shop/mens',
                    linkUrl: ''
                }
            ]
        }
    }
  render() {
    return (
        <div className='directory-menu border d-flex justify-content-around row p-3 rounded' >
            {
                this.state.sections.map(({ id, ...otherProps }) => 
                    <Menuitem key={id} {...otherProps} />
                )
            }
        </div>
    )
  }
}
