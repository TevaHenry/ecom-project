import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/Shop/shopSelectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { CollectionsOverviewContainer } from './CollectionsOverviewStyles';

export const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
  {
    collections.map(({ id , ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))
  }
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);