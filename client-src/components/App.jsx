import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {listLayers} from '../thunks/api-layers';
import LayerList from './LayerList';

const App = ({dispatch}) =>
	<div>
		<button onClick={() => dispatch(listLayers)}>List layers</button>
		<LayerList/>
	</div>;

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(App);
