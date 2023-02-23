import { createContext, useState } from "react";

const PointsContex = createContext()

const PointsContexProvider = ({ children }) => {


    return (
        <PointsContex.Provider value={{}}>
            {children}
        </PointsContex.Provider>
    )
}

export {PointsContex, PointsContexProvider}