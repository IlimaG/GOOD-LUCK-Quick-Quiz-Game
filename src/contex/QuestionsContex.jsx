import { createContext, useState } from "react";

const QuestionsContex = createContext()

const QuestionsContexProvider = ({ children }) => {

    const [howToPlay, setHowToPlay] = useState('-2000px')
    const [competitivePopUp, setCompetitivePopUp] = useState('-2000px')
    const [trainingPopUp, setTrainingPopUp] = useState('-2000px')
    const [allAnswer, setAllAnswer] = useState([])

    return (
        <QuestionsContex.Provider 
        value={{
            howToPlay, setHowToPlay,
            competitivePopUp, setCompetitivePopUp,
            trainingPopUp, setTrainingPopUp,
            allAnswer, setAllAnswer
            }}>
                
            {children}
        </QuestionsContex.Provider>
    )
}

export {QuestionsContex, QuestionsContexProvider}