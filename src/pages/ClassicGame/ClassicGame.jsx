import arrayShuffle from 'array-shuffle';
import axios from 'axios';

import Answer from '../../components/Answer/Answer';
import Ask from '../../components/Ask/Ask';
import ErrorCorrectAsk from '../../components/ErrorCorrectAsk/Error-CorrectAsk';
import PointsCounter from '../../components/PointsCounter/PointsCounter';
import Timer from '../../components/Timer/Timer';

import { useContext, useEffect, useState } from 'react';
import { QuestionsContex } from '../../contex/QuestionsContex';
import { SettingsContex } from '../../contex/SettingsContex';


import './ClassicGame.css';
import Logout from '../../components/Logout/Logout';
import OrderQuestions from '../../components/OrderQuestions/OrderQuestions';


const ClassicGame = () => {

    const { setAllAnswer, countAnswer, clickAnswer } = useContext(QuestionsContex)


    useEffect(() => {
        axios
            .get('https://opentdb.com/api.php?amount=50', {
                "Content-Type": "application/xml; charset=utf-8"
            })
            .then(response => {

                const answers = response.data.results

                let all = []
                let formattedAsk = {}


                const easyMultiple = answers.forEach((e) => {
                    if (all.length < 2) {
                        if (e.type === 'multiple' && e.difficulty === 'easy') {
                            formattedAsk = {
                                question: e.question,
                                category: e.category,
                                type: e.type,
                                difficulty: e.difficulty,
                                answer: [e.correct_answer, ...e.incorrect_answers],
                                correct_answer: e.correct_answer
                            }

                            all.push(formattedAsk)
                        }
                    }
                })

                const easyBoolean = answers.forEach((e) => {
                    if (all.length < 3) {
                        if (e.type === 'boolean' && e.difficulty === 'easy') {
                            formattedAsk = {
                                question: e.question,
                                category: e.category,
                                type: e.type,
                                difficulty: e.difficulty,
                                answer: [e.correct_answer, ...e.incorrect_answers],
                                correct_answer: e.correct_answer
                            }
                            all.push(formattedAsk)
                        }
                    }
                })

                const mediumMultiple = answers.forEach((e) => {
                    if (all.length < 5) {
                        if (e.type === 'multiple' && e.difficulty === 'medium') {
                            formattedAsk = {
                                question: e.question,
                                category: e.category,
                                type: e.type,
                                difficulty: e.difficulty,
                                answer: [e.correct_answer, ...e.incorrect_answers],
                                correct_answer: e.correct_answer
                            }
                            all.push(formattedAsk)
                        }
                    }
                })

                const mediumBoolean = answers.forEach((e) => {
                    if (all.length < 6) {
                        if (e.type === 'boolean' && e.difficulty === 'medium') {
                            formattedAsk = {
                                question: e.question,
                                category: e.category,
                                type: e.type,
                                difficulty: e.difficulty,
                                answer: [e.correct_answer, ...e.incorrect_answers],
                                correct_answer: e.correct_answer
                            }
                            all.push(formattedAsk)
                        }
                    }
                })

                const hardBoolean = answers.forEach((e) => {
                    if (all.length < 7) {
                        if (e.type === 'boolean' && e.difficulty === 'hard') {
                            formattedAsk = {
                                question: e.question,
                                category: e.category,
                                type: e.type,
                                difficulty: e.difficulty,
                                answer: [e.correct_answer, ...e.incorrect_answers],
                                correct_answer: e.correct_answer
                            }
                            all.push(formattedAsk)
                        }
                    }
                })

                const hardMultiple = answers.forEach((e) => {
                    if (all.length <= 9) {
                        if (e.type === 'multiple' && e.difficulty === 'hard') {
                            formattedAsk = {
                                question: e.question,
                                category: e.category,
                                type: e.type,
                                difficulty: e.difficulty,
                                answer: [e.correct_answer, ...e.incorrect_answers],
                                correct_answer: e.correct_answer
                            }
                            all.push(formattedAsk)
                        }
                    }
                })

                setAllAnswer([...all])

            })

    }, [])



    return (
        <div id='ClassicGame'>

            <Logout />

            <div className='infoGame'>
                <PointsCounter />

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
}

export default ClassicGame