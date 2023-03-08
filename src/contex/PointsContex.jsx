import { createContext, useState } from "react";

const PointsContex = createContext()

const PointsContexProvider = ({ children }) => {

    const [points, setPoints] = useState(0)

    const [playerPoints1, setPlayerPoints1] = useState(0)
    const [playerPoints2, setPlayerPoints2] = useState(0)
    const [playerPoints3, setPlayerPoints3] = useState(0)
    const [playerPoints4, setPlayerPoints4] = useState(0)


    return (
        <PointsContex.Provider value={{
            points, setPoints,
            playerPoints1, setPlayerPoints1,
            playerPoints2, setPlayerPoints2,
            playerPoints3, setPlayerPoints3,
            playerPoints4, setPlayerPoints4
            }}>
            {children}
        </PointsContex.Provider>
    )
}

export {PointsContex, PointsContexProvider}