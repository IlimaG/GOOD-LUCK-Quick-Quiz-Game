import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorCorrectAsk from '../../components/ErrorCorrectAsk/Error-CorrectAsk';
import Logout from '../../components/Logout/Logout';
import OrderQuestions from '../../components/OrderQuestions/OrderQuestions';
import PointsCounter from '../../components/PointsCounter/PointsCounter';
import Timer from '../../components/Timer/Timer';
import { CustomizeGameContex } from '../../contex/CustomizeGameContex';
import { QuestionsContex } from '../../contex/QuestionsContex';
import './CustomGame.css';

const CustomGame = () => {

    const { numberQuestions, categorie, type, difficulty } = useContext(CustomizeGameContex)
    const { setAllAnswer, countAnswer, clickAnswer } = useContext(QuestionsContex)

    const navigate = useNavigate();
    
    useEffect(() => {
        const baseUrl = `https://opentdb.com/api.php?amount=${numberQuestions}&category=${categorie}&difficulty=${difficulty}&type=${type}`
        
        axios
            .get(baseUrl)
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

export default CustomGame