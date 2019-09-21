import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {listLayers} from '../thunks/layers';
import {listTypes,addType} from '../thunks/types';
import {listModules} from '../thunks/modules';
import LayerList from './LayerList';
import ModuleGrid from './ModuleGrid';
import ModuleEdit from './ModuleEdit';

const App = ({typeName,dispatch}) =>
	<div>
		<button onClick={() => dispatch(listLayers)}>List layers</button>
		<button onClick={() => dispatch(listTypes)}>List types</button>
		<button onClick={() => dispatch(listModules)}>List modules</button>
                <button onClick={() => dispatch(addType(typeName))}>Add type</button>
		<ModuleGrid/>
		<ModuleEdit/>
	</div>;

const mapStateToProps = ({modules}) => ({typeName:modules.data});

export default connect(mapStateToProps)(App);
