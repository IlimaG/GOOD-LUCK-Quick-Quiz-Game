import { createContext, useState } from "react";
import imgplayer1 from '../assets/img/imgplayer1.png'

const CustomizeGameContex = createContext()

const CustomizeGameContexProvider = ({ children }) => {

    const [numberQuestions, setNumberQuestions] = useState(10)
    const [categorie, setCategorie] = useState('')
    const [type, setType] = useState('')
    const [difficulty, setDifficulty] = useState('')

    const [isLoadCompetitive, setIsLoadCompetitive] = useState(false)

    const [isPlayer1, setIsPlayer1] = useState(true)
    const [isPlayer2, setIsPlayer2] = useState(false)
    const [isPlayer3, setIsPlayer3] = useState(false)
    const [isPlayer4, setIsPlayer4] = useState(false)
    
    const [namePlayer1, setNamePlayer1] = useState('')
    const [namePlayer2, setNamePlayer2] = useState('')
    const [namePlayer3, setNamePlayer3] = useState('')
    const [namePlayer4, setNamePlayer4] = useState('')

    const [colorPlayer1, setColorPlayer1] = useState('#009bde')
    const [colorPlayer2, setColorPlayer2] = useState('#fceb00')
    const [colorPlayer3, setColorPlayer3] = useState('#5aae39')
    const [colorPlayer4, setColorPlayer4] = useState('#FD3084')

    const [imgPlayer1, setImgPlayer1] = useState(imgplayer1)
    const [imgPlayer2, setImgPlayer2] = useState('')
    const [imgPlayer3, setImgPlayer3] = useState('')
    const [imgPlayer4, setImgPlayer4] = useState('')

    const [numberOsPlayers, setNumberOfPlayers] = useState(0)

    const [nextRound, setNextRound] = useState(true)
    const [roundOf, setRoundOf] = useState('')


    return (
        <CustomizeGameContex.Provider value={{
            numberQuestions, setNumberQuestions,
            categorie, setCategorie,
            difficulty, setDifficulty,
            type, setType,
            namePlayer1, setNamePlayer1,
            namePlayer2, setNamePlayer2,
            namePlayer3, setNamePlayer3,
            namePlayer4, setNamePlayer4,
            colorPlayer1, setColorPlayer1,
            colorPlayer2, setColorPlayer2,
            colorPlayer3, setColorPlayer3,
            colorPlayer4, setColorPlayer4,
            imgPlayer1, setImgPlayer1,
            imgPlayer2, setImgPlayer2,
            imgPlayer3, setImgPlayer3,
            imgPlayer4, setImgPlayer4,
            numberOsPlayers, setNumberOfPlayers,
            isLoadCompetitive, setIsLoadCompetitive,
            nextRound, setNextRound,
            roundOf, setRoundOf,
            isPlayer1, setIsPlayer1,
            isPlayer2, setIsPlayer2,
            isPlayer3, setIsPlayer3,
            isPlayer4, setIsPlayer4
            
        }}>

            {children}
        </CustomizeGameContex.Provider>
    )
}

export { CustomizeGameContex, CustomizeGameContexProvider }