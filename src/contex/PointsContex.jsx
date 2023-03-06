import { createContext, useState } from "react";

const PointsContex = createContext()

const PointsContexProvider = ({ children }) => {

    const [points, setPoints] = useState(0)

    return (
        <PointsContex.Provider value={{points, setPoints}}>
            {children}
        </PointsContex.Provider>
    )
}

export {PointsContex, PointsContexProvider}