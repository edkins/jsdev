import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {listLayers} from '../thunks/layers';
import {listTypes} from '../thunks/types';
import {listModules} from '../thunks/modules';
import {listFiles} from '../thunks/files';
import {ModuleGrid} from './modules';
import {Panel} from './panel';
import AddType from './types';
import {FileList,FileEdit} from './files';

const App = ({typeName,dispatch}) =>
	<div className="main_panel">
            <div className="table_panel">
		<button onClick={() => dispatch(listLayers)}>List layers</button>
		<button onClick={() => dispatch(listTypes)}>List types</button>
		<button onClick={() => dispatch(listModules)}>List modules</button>
		<button onClick={() => dispatch(listFiles)}>List files</button>
                <AddType/>
		<ModuleGrid/>
                <FileList/>
            </div>
            <div className="code_panel">
		<Panel/>
            </div>
	</div>;

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(App);
