import React from 'react';
import './searchLocation.css';
//import './../../fonts/font-awesome.css';


export const SearchLocation = (props) => {

    let keyHandler = (e) => {
        if (e.key === 'Enter') submit();
    }

    let submit = () => {
        props.submit();        
    }

    return (
        <span className='searchLocationContainer'>
            <input
                type="text"
                name='city'
                placeholder='Search location'
                value={props.value}
                onChange={props.handleUserInput}
                onKeyPress={keyHandler}            
            />
            <span className='btn'
                onClick={submit}
            />
        </span>
    )
}