import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Ask from '../../components/Ask/Ask';
import { QuestionsContex } from '../../contex/QuestionsContex';
import './ClassicGame.css';

const ClassicGame = () => {

    const { allAnswer, setAllAnswer } = useContext(QuestionsContex)
    const [countAnswer, setCountAnswer] = useState(0)
    const [answer, setAnswer] = useState([])
    const [question, setQuestion] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')


    useEffect(() => {
        axios
            .get('https://opentdb.com/api.php?amount=50')
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
                            all.push(e)
                        }
                    }
                })

                const mediumMultiple = answers.forEach((e) => {
                    if (all.length < 5) {
                        if (e.type === 'multiple' && e.difficulty === 'medium') {
                            all.push(e)
                        }
                    }
                })

                const mediumBoolean = answers.forEach((e) => {
                    if (all.length < 6) {
                        if (e.type === 'boolean' && e.difficulty === 'medium') {
                            all.push(e)
                        }
                    }
                })

                const hardBoolean = answers.forEach((e) => {
                    if (all.length < 7) {
                        if (e.type === 'boolean' && e.difficulty === 'hard') {
                            all.push(e)
                        }
                    }
                })

                const hardMultiple = answers.forEach((e) => {
                    if (all.length < 9) {
                        if (e.type === 'multiple' && e.difficulty === 'hard') {
                            all.push(e)
                        }
                    }
                })

                setAllAnswer([...all])

                
                setQuestion(all[countAnswer].question)
                let Answers = all[countAnswer].answer
                let ramdonAnswers = Answers.sort(() => Math.random() - 0.5)




                console.log(Answers);
                console.log( ramdonAnswers);
                setAnswer1(all[countAnswer].answer)
                // setAnswer1(all[countAnswer].question)
                // setAnswer1(all[countAnswer].question)
                // setAnswer1(all[countAnswer].question)
            })
    }, [])

    useEffect(() => {

        const ask = allAnswer[countAnswer]

        

    }, [allAnswer])

    const setAnswers = () => {

        return (
            <div>
                <Ask rgba='#fff' text= {question} />
                <div>
                    
                </div>
            </div>
        )
    }

    useEffect(() => {

    }, [allAnswer])

    return (
        <div id='ClassicGame'>
            {setAnswers()}
        </div>
    )
}

export default ClassicGame