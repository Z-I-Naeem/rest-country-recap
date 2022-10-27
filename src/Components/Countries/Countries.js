import React from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = (props) => {
    // console.log(props.country);
    const countryLoop = props.country 

    return (
        <div>
            <div className="countries">
                {
                    countryLoop.map( countrySpec => <Country data = {countrySpec}></Country>)
                }

            </div>
            
        </div>
    );
};

export default Countries;