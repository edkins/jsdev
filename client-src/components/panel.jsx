import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {ModuleEdit} from './modules';
import {FileEdit} from './files';

const Panel2 = ({active,dispatch}) => {
    if (active === 'module') {
        return <ModuleEdit/>;
    } else {
        return <FileEdit/>;
    }
};

const mapStateToProps = ({panel:{active}}) => ({active});

const Panel = connect(mapStateToProps)(Panel2);

export {Panel};
