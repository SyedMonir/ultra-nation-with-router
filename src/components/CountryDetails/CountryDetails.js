import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";

const CountryDetails = () => {

    const { countryName } = useParams();
    const [countryDetails, setCountryDetails] = useState([]);
    // const { population } = countryDetails;
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(res => res.json())
            .then(data => setCountryDetails(data))
    }, []);
    console.log(countryDetails);
    const countryStyle = {
        border: '1px solid purple',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        margin: '20px',
        overflow: 'auto'
    };
    return (
        <div>
            {
                countryDetails.map(x =>
                    <div style={countryStyle}>
                        <div>
                            <img src={x.flags.png} alt="" />
                        </div>
                        <div>
                            <h1>{x.name.common}</h1>
                            <h3>Capital: {x.capital}</h3>
                            <h3>Region: {x.region}</h3>
                            <p>Population: {x.population}</p>
                        </div>
                        <div>
                            <img src={x.coatOfArms.svg} alt="" />
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default CountryDetails;