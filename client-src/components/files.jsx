import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {listFiles,getFile,editFile,putFile,deleteFile} from '../thunks/files';

const FileList2 = ({listing,dispatch}) =>
    <div>
        {listing.map(({id}) =>
            <div key={id}>
                <button onClick={() => dispatch(getFile(id))}>
                    {id}
                </button>
            </div>)}
    </div>;

const mapStateToPropsList = ({files:{listing}}) => ({listing});

const FileList = connect(mapStateToPropsList)(FileList2);

const FileEdit2 = ({id,data,dispatch}) =>
	<div>
		<div>
			{id}
		</div>
                <div>
		    <button onClick={() => dispatch(putFile(id,data))}>Save</button>
                </div>
                <div>
	 	    <textarea
			value={data}
			onChange={event => dispatch(editFile(event.target.value))}
			cols={100}
			rows={30}
		    />
                </div>
                <div>
		    <button onClick={() => dispatch(deleteFile(id))}>Delete</button>
                </div>
	</div>;

const mapStateToPropsEdit = ({files:{id,data}}) => ({id,data});

const FileEdit = connect(mapStateToPropsEdit)(FileEdit2);

export {FileList,FileEdit};
