import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControlRounds from '../../components/ControlRounds/ControlRounds';
import ErrorCorrectAsk from '../../components/ErrorCorrectAsk/Error-CorrectAsk';
import Loader from '../../components/Loader/Loader';
import Logout from '../../components/Logout/Logout';
import OrderQuestions from '../../components/OrderQuestions/OrderQuestions';
import PointsCounter from '../../components/PointsCounter/PointsCounter';
import PointsCounterCompetitive from '../../components/PointsCounterCompetitive/PointsCounterCompetitive';
import Timer from '../../components/Timer/Timer';
import { CustomizeGameContex } from '../../contex/CustomizeGameContex';
import { QuestionsContex } from '../../contex/QuestionsContex';
import './CustomGameCompetitive.css';

const CustomGameCompetitive = () => {

    const { setAllAnswer, allAnswer, countAnswer, clickAnswer } = useContext(QuestionsContex)

    const {
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
        isLoadCompetitive, setIsLoadCompetitive,
        numberOsPlayers, setNumberOfPlayers,
        nextRound, setNextRound } = useContext(CustomizeGameContex)

    const [loadQuestion1, setLoadQuestion1] = useState(false)
    const [loadQuestion2, setLoadQuestion2] = useState(false)
    const [loadQuestion3, setLoadQuestion3] = useState(false)
    const [loadQuestion4, setLoadQuestion4] = useState(false)
    const [loadQuestion5, setLoadQuestion5] = useState(false)



    useEffect(() => { // Easy multiple x 2

        const totalQuestions = numberOsPlayers * numberQuestions
        const baseUrl1 = `https://opentdb.com/api.php?amount=${totalQuestions}&${categorie}=24&difficulty=${difficulty}&type=${type}`

        axios
            .get(baseUrl1)
            .then(response => {
                const answers = response.data.results
                console.log(answers);
                let all = []
                let formattedAsk = {}

                const easyMultiple = answers.forEach((e) => {
                    formattedAsk = {
                        question: e.question,
                        category: e.category,
                        type: e.type,
                        difficulty: e.difficulty,
                        answer: [e.correct_answer, ...e.incorrect_answers],
                        correct_answer: e.correct_answer
                    }
                    all.push(formattedAsk)
                })

                setAllAnswer(all)
                setIsLoadCompetitive(true)
                setNumberQuestions(totalQuestions)

            })

    }, [])

    if (isLoadCompetitive) {
        return (
            <div id='ClassicGame'>
                <ControlRounds />

                <Logout />

                <div className='infoGame'>
                    <PointsCounterCompetitive />

                    <Timer
                        time={30}
                        correctOrError={countAnswer}
                    />

                </div>

                <ErrorCorrectAsk
                    correctOrError={clickAnswer}
                    countRound={countAnswer}
                />

                <OrderQuestions />

            </div>

        )
    } else {
        return (
            <Loader />
        )
    }
}

export default CustomGameCompetitive