import { createContext, useState } from "react";

const QuestionsContex = createContext()

const QuestionsContexProvider = ({ children }) => {

    const [howToPlay, setHowToPlay] = useState('-20000px')
    const [competitivePopUp, setCompetitivePopUp] = useState('-20000px')
    const [trainingPopUp, setTrainingPopUp] = useState('-20000px')
    const [allAnswer, setAllAnswer] = useState([])
    const [isWinner, setIsWinner] = useState(null)
    const [isTime, setIsTime] = useState(true)

    const [countDown, setCountDown] = useState(30)

    return (
        <QuestionsContex.Provider 
        value={{
            howToPlay, setHowToPlay,
            competitivePopUp, setCompetitivePopUp,
            trainingPopUp, setTrainingPopUp,
            allAnswer, setAllAnswer,
            isWinner, setIsWinner,
            isTime, setIsTime,
            countDown, setCountDown
            }}>
                
            {children}
        </QuestionsContex.Provider>
    )
}

export {QuestionsContex, QuestionsContexProvider}