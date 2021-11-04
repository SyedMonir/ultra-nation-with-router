import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {
    const countryStyle = {
        border: '1px solid purple',
        // alignItem: 'center',
        textAlign: 'center',
        padding: '20px',
        margin: '20px',
        // width: '40%',
        // display: 'flex',
        // flexDirection: 'row',
        overflow: 'auto'
    };
    const name = props.country.name.common;
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`/name/${name}`)
    }
    return (
        <div style={countryStyle}>
            <div>
                <img src={props.country.flags.png} alt="" />
            </div>
            <div>
                <Link to={`/name/${name}`}> <h1>{name}</h1> </Link>
                <button onClick={() => handleClick(name)}>Click Here </button>
            </div>
        </div>
    );
};

export default Countries;