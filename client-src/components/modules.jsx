import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ReactTable from 'react-table';
import {getModule,newModule,editModule,putModule,deleteModule,changeModuleType} from '../thunks/modules';

const find_module = (modules,layer,type) => {
	for (const m of modules) {
		if (m.layer === layer && m.type === type) {
			return {id:m.id, layer, type, real:true};
		}
	}
	return {id:`${layer}--${type}`, layer, type, real:false};
};

const ModuleGrid2 = ({layers,types,modules,dispatch}) => {
	const data = types.map(({id}) => ({
		id
	}));

	const columns = layers.map(({id}) => ({
		id,
		accessor: type => find_module(modules,id,type.id),
		Cell: props =>
                     <button onClick={() => dispatch(props.value.real ? getModule(props.value.id) : newModule(props.value.id))}>
                         {props.value.real ? props.value.type : '--'}
                     </button>,
		Header: id,
	}));
	columns.splice(0,0,{
		id: 'id',
		Header: '',
		accessor: 'id'
	});

	return <ReactTable
		data={data}
		columns={columns}
		minRows={1}
		showPagination={false}
		sortable={false}/>;
};

const mapStateToPropsGrid = ({layers,types,modules}) => ({layers: layers.listing, types: types.listing, modules: modules.listing});

const ModuleGrid = connect(mapStateToPropsGrid)(ModuleGrid2);


const ModuleEdit2 = ({id,data,fileType,dispatch}) =>
	<div>
		<div>
			{id}
		</div>
                <div>
		    <button onClick={() => dispatch(putModule(id,data,fileType))}>Save</button>
                    <input
                        value={fileType}
                        onChange={event => dispatch(changeModuleType(event.target.value))}
                    />
                </div>
                <div>
	 	    <textarea
			value={data}
			onChange={event => dispatch(editModule(event.target.value))}
			cols={100}
			rows={30}
		    />
                </div>
                <div>
		    <button onClick={() => dispatch(deleteModule(id))}>Delete</button>
                </div>
	</div>;

const mapStateToPropsEdit = ({modules:{id,data,fileType}}) => ({id,data,fileType});

const ModuleEdit = connect(mapStateToPropsEdit)(ModuleEdit2);

export {ModuleGrid,ModuleEdit};
