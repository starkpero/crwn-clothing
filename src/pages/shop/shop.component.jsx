import React from 'react';
import { Route } from 'react-router';
//import SHOP_DATA from './2.3 shop.data';
//import PreviewCollection from '../../components/collection-preview/collection-preview.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
// import {connect} from 'react-redux';
// import { createStructuredSelector } from 'reselect';

const ShopPage = ({match})=>(
          <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>
          </div>
        );  
      



export default ShopPage;