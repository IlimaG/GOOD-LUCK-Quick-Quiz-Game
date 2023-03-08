import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import ControlRounds from '../../components/ControlRounds/ControlRounds';
import ErrorCorrectAsk from '../../components/ErrorCorrectAsk/Error-CorrectAsk';
import Loader from '../../components/Loader/Loader';
import Logout from '../../components/Logout/Logout';
import OrderQuestions from '../../components/OrderQuestions/OrderQuestions';
import PointsCounterCompetitive from '../../components/PointsCounterCompetitive/PointsCounterCompetitive';
import Timer from '../../components/Timer/Timer';
import { CustomizeGameContex } from '../../contex/CustomizeGameContex';
import { QuestionsContex } from '../../contex/QuestionsContex';
import './CustomGameCompetitive.css';

const CustomGameCompetitive = () => {

    const { setAllAnswer,  countAnswer, clickAnswer } = useContext(QuestionsContex)

    const {
        numberQuestions, setNumberQuestions,
        categorie, difficulty,  type, 
        isLoadCompetitive, setIsLoadCompetitive,
        numberOsPlayers, 
         } = useContext(CustomizeGameContex)

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