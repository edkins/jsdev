import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ReactTable from 'react-table';

const ModuleGrid = ({layers,types,dispatch}) => {
	const data = types.map(({id}) => ({
		id
	}));

	const columns = layers.map(({id}) => ({
		id,
		accessor: d => '',
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
		minRows={0}
		showPagination={false}
		sortable={false}/>;
};

const mapStateToProps = ({layers,types}) => ({layers: layers.listing, types: types.listing});

export default connect(mapStateToProps)(ModuleGrid);
