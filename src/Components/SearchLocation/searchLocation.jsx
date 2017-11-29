import React from 'react';
import './searchLocation.css';
import './../../fonts/font-awesome.css';


export const SearchLocation = (props) => {

    let keyHandler = (e) => {
        if (e.key === 'Enter') submit();
    }

    let submit = () => {
        props.submit();
    }

    return (
        <div className='searchLocationWrapper'>
            <input
                type="text"
                name='city'
                placeholder='Search location'
                value={props.value}
                onChange={props.handleUserInput}
                onKeyPress={keyHandler}
            />
            <div className='btn'
                onClick={submit}
            />
        </div>
    )
}