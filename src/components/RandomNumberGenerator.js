import React, { useState } from "react";
import useRandomNumber from '../hooks/useRandomNumber';
import '../styles/RandomNumberGenerator.css';

const RandomNumberGenerator = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [randomNumber, generateRandomNumber] = useRandomNumber(min, max);

    const handleMinChange = (e) => setMin(Number(e.target.value));
    const handleMaxChange = (e) => setMax(Number(e.target.value));

    return (
        <div className="random-number-generator">
            <div className="input-group">
                <label htmlFor="min">Min:</label>
                <input type="number" id="min" value={min} onChange={handleMinChange} />
            </div>
            <div>
                <label htmlFor="max">Max:</label>
                <input type="number" id="max" value={max} onChange={handleMaxChange} />
            </div>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
            <div className="result">
                {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
            </div>
        </div>
    );
};

export default RandomNumberGenerator;