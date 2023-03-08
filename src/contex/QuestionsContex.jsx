import { createContext, useState } from "react";

const QuestionsContex = createContext()

const QuestionsContexProvider = ({ children }) => {

    const [howToPlay, setHowToPlay] = useState('-20000px')
    const [competitivePopUp, setCompetitivePopUp] = useState('-20000px')
    const [trainingPopUp, setTrainingPopUp] = useState('-20000px')

    const [isWinner, setIsWinner] = useState(null)
    const [isTime, setIsTime] = useState(true)
    const [countDown, setCountDown] = useState(30)

    const [allAnswer, setAllAnswer] = useState(false)
    const [countAnswer, setCountAnswer] = useState(0)
    const [rounds, setRounds] = useState(10)
    const [question, setQuestion] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [correctAnswer, setcorrectAnswer] = useState('')
    const [type, setType] = useState('')

    const [clickAnswer, setClickAnswer] = useState(0)


    return (
        <QuestionsContex.Provider
            value={{
                howToPlay, setHowToPlay,
                competitivePopUp, setCompetitivePopUp,
                trainingPopUp, setTrainingPopUp,
                allAnswer, setAllAnswer,
                isWinner, setIsWinner,
                isTime, setIsTime,
                countDown, setCountDown,
                countAnswer, setCountAnswer,
                question, setQuestion,
                answer1, setAnswer1,
                answer2, setAnswer2,
                answer3, setAnswer3,
                answer4, setAnswer4,
                correctAnswer, setcorrectAnswer,
                type, setType,
                clickAnswer, setClickAnswer,
                rounds, setRounds
            }}>

            {children}
        </QuestionsContex.Provider>
    )
}

export { QuestionsContex, QuestionsContexProvider }