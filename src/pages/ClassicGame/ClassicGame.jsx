import arrayShuffle from 'array-shuffle';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Answer from '../../components/Answer/Answer';
import Ask from '../../components/Ask/Ask';
import ErrorCorrectAsk from '../../components/ErrorCorrectAsk/Error-CorrectAsk';
import PointsCounter from '../../components/PointsCounter/PointsCounter';
import Timer from '../../components/Timer/Timer';
import { QuestionsContex } from '../../contex/QuestionsContex';
import { SettingsContex } from '../../contex/SettingsContex';
import './ClassicGame.css';

const ClassicGame = () => {

    const { setAllAnswer, setIsWinner, isTime, setIsTime, setPoints, isWinner, countDown } = useContext(QuestionsContex)
    const { color1, color2, color3, color4 } = useContext(SettingsContex)

    const [countAnswer, setCountAnswer] = useState(0)
    const [question, setQuestion] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [correctAnswer, setcorrectAnswer] = useState('')
    const [type, setType] = useState('')

    const [clickAnswer, setClickAnswer] = useState(0)




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

                setType(all[countAnswer].type)
                setQuestion(all[countAnswer].question)
                setcorrectAnswer(all[countAnswer].correct_answer)

                let Answers = all[countAnswer].answer
                let ramdonAnswers = arrayShuffle(Answers);

                setAnswer1(ramdonAnswers[0])
                setAnswer2(ramdonAnswers[1])
                setAnswer3(ramdonAnswers[2])
                setAnswer4(ramdonAnswers[3])
            })
    }, [countAnswer])

    const setAnswers = () => {

        if (type == 'multiple') {
            return (
                <>

                    <div id='question' >
                        <Ask rgba='#fff' text={question} />
                    </div>

                    <div id='cardAnswerd'>
                        <Answer rgba={color1} text={answer1} onClickAnswer={isCorrectAnswer1} />
                        <Answer rgba={color2} text={answer2} onClickAnswer={isCorrectAnswer2} />
                        <Answer rgba={color3} text={answer3} onClickAnswer={isCorrectAnswer3} />
                        <Answer rgba={color4} text={answer4} onClickAnswer={isCorrectAnswer4} />
                    </div>
                </>
            )
        } if (type == 'boolean') {
            return (
                <>
                    <div id='question'>
                        <Ask rgba='#fff' text={question} />
                    </div>

                    <div id='cardAnswerd'>
                        <Answer rgba={color1} text={answer1} onClickAnswer={isCorrectAnswer1} />
                        <Answer rgba={color2} text={answer2} onClickAnswer={isCorrectAnswer2} />
                    </div>
                </>
            )
        }



    }

    const isCorrectAnswer1 = () => {
        const result = answer1 === correctAnswer ? true : false
        SetStates(result)
    }

    const isCorrectAnswer2 = () => {
        const result = answer2 === correctAnswer ? true : false
        SetStates(result)
    }

    const isCorrectAnswer3 = () => {
        const result = answer3 === correctAnswer ? true : false
        SetStates(result)
    }

    const isCorrectAnswer4 = () => {
        const result = answer4 === correctAnswer ? true : false
        SetStates(result)
    }

    useEffect(() => {
        if (isTime === false) {
            SetStates(false)
        }
    }, [isTime])

    const SetStates = (boolean) => {
        setClickAnswer(clickAnswer + 1)

        setIsWinner(boolean)


        setTimeout(() => {
            setCountAnswer(countAnswer + 1)
            setIsTime(true)
        }, 2500);


    }

    return (
        <div id='ClassicGame'>
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
            {setAnswers()}
            
        </div>

    )
}

export default ClassicGame