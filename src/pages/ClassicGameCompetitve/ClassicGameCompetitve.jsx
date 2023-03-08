
import ErrorCorrectAsk from '../../components/ErrorCorrectAsk/Error-CorrectAsk';
import Timer from '../../components/Timer/Timer';
import PointsCounterCompetitive from '../../components/PointsCounterCompetitive/PointsCounterCompetitive';
import OrderQuestions from '../../components/OrderQuestions/OrderQuestions';
import Logout from '../../components/Logout/Logout';

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { QuestionsContex } from '../../contex/QuestionsContex';
import { CustomizeGameContex } from '../../contex/CustomizeGameContex';

import './ClassicGameCompetitve.css';
import Loader from '../../components/Loader/Loader';
import ControlRounds from '../../components/ControlRounds/ControlRounds';



const ClassicGameCompetitve = () => {

    const { setAllAnswer, allAnswer, countAnswer, clickAnswer } = useContext(QuestionsContex)
    const { setNumberQuestions, isLoadCompetitive, setIsLoadCompetitive, numberOsPlayers} = useContext(CustomizeGameContex)

    const [loadQuestion1, setLoadQuestion1] = useState(false)
    const [loadQuestion2, setLoadQuestion2] = useState(false)
    const [loadQuestion3, setLoadQuestion3] = useState(false)
    const [loadQuestion4, setLoadQuestion4] = useState(false)
    const [loadQuestion5, setLoadQuestion5] = useState(false)



    useEffect(() => { // Easy multiple x 2
        const baseUrl1 = `https://opentdb.com/api.php?amount=${numberOsPlayers * 2}&difficulty=easy&type=multiple`

        axios
            .get(baseUrl1)
            .then(response => {
                const answers = response.data.results
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
                setLoadQuestion1(true)
                setNumberQuestions(9)
            })

    }, [])

    useEffect(() => { // Easy boolean x 1
        const baseUrl2 = `https://opentdb.com/api.php?amount=${numberOsPlayers * 1}&difficulty=easy&type=boolean`

        axios
            .get(baseUrl2)
            .then(response => {
                const answers = response.data.results
                let all = []
                let formattedAsk = {}

                if (loadQuestion1) {
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

                    setAllAnswer(prev => [...prev, ...all])
                    setLoadQuestion2(true)
                }
            })

    }, [loadQuestion1])

    useEffect(() => { // Medium multiple x 2

        const baseUrl3 = `https://opentdb.com/api.php?amount=${numberOsPlayers * 2}&difficulty=medium&type=multiple`
        axios
            .get(baseUrl3)
            .then(response => {
                const answers = response.data.results

                let all = []
                let formattedAsk = {}

                if (loadQuestion2) {
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

                    setAllAnswer(prev => [...prev, ...all])
                    setLoadQuestion3(true)
                }

            })

    }, [loadQuestion2])

    useEffect(() => { // Medium boolean x 1
        const baseUrl4 = `https://opentdb.com/api.php?amount=${numberOsPlayers * 1}&difficulty=medium&type=boolean`
        axios
            .get(baseUrl4)
            .then(response => {
                const answers = response.data.results
                console.log(answers);
                let all = []
                let formattedAsk = {}

                if (loadQuestion3) {
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

                    setAllAnswer(prev => [...prev, ...all])
                    setLoadQuestion4(true)
                }
            })

    }, [loadQuestion3])

    useEffect(() => { // Hard multiple x 2

        const baseUrl4 = `https://opentdb.com/api.php?amount=${numberOsPlayers * 2}&difficulty=hard&type=multiple`
        axios
            .get(baseUrl4)
            .then(response => {
                const answers = response.data.results
                console.log(answers);
                let all = []
                let formattedAsk = {}

                if (loadQuestion4) {
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

                    setAllAnswer(prev => [...prev, ...all])
                    setLoadQuestion5(true)
                }
            })

    }, [loadQuestion4])

    useEffect(() => { // Hard boolean x 1
        const baseUrl5 = `https://opentdb.com/api.php?amount=${numberOsPlayers * 1}&difficulty=hard&type=boolean`
        axios
            .get(baseUrl5)
            .then(response => {
                const answers = response.data.results
                console.log(answers);
                let all = []
                let formattedAsk = {}

                if (loadQuestion5) {
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

                    setAllAnswer(prev => [...prev, ...all])
                    setIsLoadCompetitive(true)
                    setNumberQuestions(numberOsPlayers * 9)
                }
            })

    }, [loadQuestion5])

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

export default ClassicGameCompetitve