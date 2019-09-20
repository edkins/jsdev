import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

const LayerList = ({loading,listing,dispatch}) =>
	<div>
		<div>
			Layer Loading: {JSON.stringify(loading)}
		</div>
		<div>
			Layer Listing: {JSON.stringify(listing)}
		</div>
	</div>;

const mapStateToProps = ({layers:{loading,listing}}) => ({loading,listing});

export default connect(mapStateToProps)(LayerList);
