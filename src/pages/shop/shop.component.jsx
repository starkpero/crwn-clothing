import React from 'react';
import SHOP_DATA from './2.3 shop.data';
import PreviewCollection from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super();

        this.state = {
            collections : SHOP_DATA
        }
    }


    render() {
        const { collections } = this.state;
        return (
          <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
              <PreviewCollection key={id} {...otherCollectionProps} />
            ))}
          </div>
        );
      }
}


export default ShopPage;