import React from 'react';
import './mapHeader.css';
import './../../fonts/font-awesome.css';

export const MapHeader = (props) => {
    let {mobView, expand, expander} = props
    return (
        <div
            onClick={expander}
            className='mapHeaderContainer'>
            Search location from map :
            {(mobView && !expand) ?
                <i className="fa fa-caret-square-o-down" aria-hidden="true" /> : null}
            {(mobView && expand) ?
                <i className="fa fa-caret-square-o-up" aria-hidden="true" /> : null}

        </div>)
}