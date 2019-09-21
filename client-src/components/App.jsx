import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {listLayers} from '../thunks/layers';
import {listTypes} from '../thunks/types';
import {listModules} from '../thunks/modules';
import LayerList from './LayerList';
import ModuleGrid from './ModuleGrid';
import ModuleEdit from './ModuleEdit';
import AddType from './types';

const App = ({typeName,dispatch}) =>
	<div className="main_panel">
            <div className="table_panel">
		<button onClick={() => dispatch(listLayers)}>List layers</button>
		<button onClick={() => dispatch(listTypes)}>List types</button>
		<button onClick={() => dispatch(listModules)}>List modules</button>
                <AddType/>
		<ModuleGrid/>
            </div>
            <div className="code_panel">
		<ModuleEdit/>
            </div>
	</div>;

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(App);
