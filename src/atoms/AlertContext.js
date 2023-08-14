import React from "react"
import {createContext, useContext, useState} from "react";

const AlertContext = createContext()

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState(null);

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
}

export function UseAlert() {
    return useContext(AlertContext);
}