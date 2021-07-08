import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.itemStore.length ? (
        <ol type="1">
          {props.itemStore.map(item => (
            <AdditionalFeature buyItem={props.buyItem} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemStore: state.storeItems
  }
}

export default connect(
  mapStateToProps,
  {  }
)(AdditionalFeatures)