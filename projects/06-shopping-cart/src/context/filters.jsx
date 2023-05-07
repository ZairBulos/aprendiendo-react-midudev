import React, { useState, createContext } from "react";

// El que tenemos que consumir (Context)
export const FiltersContext = createContext();

// El que nos provee de acceso al context (Provider)
export function FiltersProviders({ children }) {
    const [ filters, setFilters ] = useState({
        category: "all",
        minPrice: 0
    });

    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            { children }
        </FiltersContext.Provider>
    );
}