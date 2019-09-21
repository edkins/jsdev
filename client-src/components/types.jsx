import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addType,editTypeId} from '../thunks/types';

const AddType = ({id,dispatch}) =>
    <span>
        <button onClick={() => dispatch(addType(id))}>Add type</button>
        <input value={id} onChange={event => dispatch(editTypeId(event.target.value))}/>
    </span>

const mapStateToProps = ({types:{id}}) => ({id});

export default connect(mapStateToProps)(AddType);
