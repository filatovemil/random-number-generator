import { useState, useCallback } from "react";
const useRandomNumber = (min, max) => {
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = useCallback(() => {
        const number = Math.floor(Math.random()*(max-min+1))+min;
        setRandomNumber(number);
    }, [min, max]);
    return [randomNumber, generateRandomNumber];
};

export default useRandomNumber;