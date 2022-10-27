import React from 'react';
import './country.css'

const Country = (props) => {
    console.log(props.data);

    const {name:{common}, flags:{png}, area} = props.data
    // console.log(name );
    return (
        <div className='countryData'>
            <img src={png} alt="" />
            <h1> {common} </h1>
            <p> {area} </p>
            
            
        </div>
    );
};

export default Country;