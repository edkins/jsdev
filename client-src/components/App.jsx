import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {listLayers} from '../thunks/layers';
import {listTypes} from '../thunks/types';
import {listModules} from '../thunks/modules';
import LayerList from './LayerList';
import ModuleGrid from './ModuleGrid';

const App = ({dispatch}) =>
	<div>
		<button onClick={() => dispatch(listLayers)}>List layers</button>
		<button onClick={() => dispatch(listTypes)}>List types</button>
		<button onClick={() => dispatch(listModules)}>List modules</button>
		<LayerList/>
		<ModuleGrid/>
	</div>;

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(App);
