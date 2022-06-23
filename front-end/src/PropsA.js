import React, { useState, createContext } from 'react';
import PropsB from "./PropsB";
export const ColorContext = createContext();

function PropsA() {

    const [color, setColor] = useState("green");
    return (
        <ColorContext.Provider value={color}>
            <div>
                <h3>A Component Color is : Black </h3>
                <PropsB />
            </div>
        </ColorContext.Provider>
    )
}

export default PropsA;