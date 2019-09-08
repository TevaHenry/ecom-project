import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/Shop/ShopActions';

import Spinner from '../../components/Spinner/Spinner';
import ShopPageContainer from './ShopPageStyles';

const CollectionsOverviewContainer = lazy(() => import('../../components/CollectionsOverview/CollectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../CollectionPage/CollectionPageContainer'));

export const ShopPage = ({ match, fetchCollectionsStart }) => {

  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer}
        />
      </Suspense>
    </ShopPageContainer>
  )
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null, 
  mapDispatchToProps
  )(ShopPage);