import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Countries : {countries.length}</h3>
            {
                countries.map(ct => <Countries country={ct} key={ct.cca3}></Countries>)
            }
        </div>
    );
};

export default Home;

