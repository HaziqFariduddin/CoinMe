import React, {useContext, useEffect, useState} from 'react';
import {createContext} from 'react'
const Crypto =createContext();

const CryptoContext = ({children}) => {

    const [currency,SetCurrency] = useState("MYR");
    const [symbol, setSymbol] = useState("RM");

    useEffect(() => {
    if (currency === "MYR") setSymbol("RM");
     else if (currency === "USD") setSymbol("$");

    }, [currency]);

    return (
        <Crypto.Provider value={{ currency, SetCurrency, symbol }}>
            {children}
        </Crypto.Provider>
    );
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
}