import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ReactTable from 'react-table';
import {getModule,newModule} from '../thunks/modules';

const find_module = (modules,layer,type) => {
	for (const m of modules) {
		if (m.layer === layer && m.type === type) {
			return {id:m.id, layer, type, real:true};
		}
	}
	return {id:`${layer}--${type}`, layer, type, real:false};
};

const ModuleGrid = ({layers,types,modules,dispatch}) => {
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

const mapStateToProps = ({layers,types,modules}) => ({layers: layers.listing, types: types.listing, modules: modules.listing});

export default connect(mapStateToProps)(ModuleGrid);
