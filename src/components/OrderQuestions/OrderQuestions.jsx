import arrayShuffle from 'array-shuffle';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { QuestionsContex } from "../../contex/QuestionsContex";
import { SettingsContex } from '../../contex/SettingsContex';
import { CustomizeGameContex } from '../../contex/CustomizeGameContex';

import Answer from '../Answer/Answer';
import Ask from '../Ask/Ask';

const OrderQuestions = () => {

    const {
        setAllAnswer, setIsWinner,
        isTime, setIsTime,
        countAnswer, setCountAnswer,
        question, setQuestion,
        answer1, setAnswer1,
        answer2, setAnswer2,
        answer3, setAnswer3,
        answer4, setAnswer4,
        correctAnswer, setcorrectAnswer,
        type, setType,
        clickAnswer, setClickAnswer,
        allAnswer
    } = useContext(QuestionsContex)

    const { color1, color2, color3, color4 } = useContext(SettingsContex)

    const { numberQuestions} = useContext(CustomizeGameContex)

    const navigate = useNavigate();

    const formatedQuestion = (string) => {

        const search = '&quot;';
        const searchRegExp = new RegExp(search, 'g'); 
        const replaceWith = "'";
        const result = `${string}`.replace(searchRegExp, replaceWith);

        const search2 = '&#039;';
        const searchRegExp2 = new RegExp(search2, 'g'); 
        const replaceWith2 = "'";
        const result2 = `${result}`.replace(searchRegExp2, replaceWith2);

        return(result2)
    }

    useEffect(() => {

        if (allAnswer && countAnswer <= numberQuestions - 1) {

            for (let i = 0; i <= countAnswer; i++) {

                let question = allAnswer[i]

                setType(question.type)
                setQuestion(formatedQuestion(question.question))

                setcorrectAnswer(question.correct_answer)

                let Answers = question.answer
                let ramdonAnswers = arrayShuffle(Answers);

                setAnswer1(formatedQuestion(ramdonAnswers[0]))
                setAnswer2(formatedQuestion(ramdonAnswers[1]))
                setAnswer3(formatedQuestion(ramdonAnswers[2]))
                setAnswer4(formatedQuestion(ramdonAnswers[3]))


            }
        }

    }, [countAnswer, allAnswer])


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

    const SetStates = (boolean) => {
        setClickAnswer(clickAnswer + 1)

        setIsWinner(boolean)


        setTimeout(() => {
            setCountAnswer(countAnswer + 1)
            setIsTime(true)
        }, 2500);


    }

    useEffect(() => {
        if (isTime === false) {
            SetStates(false)
        }
    }, [isTime])

    useEffect(() => {

        if (countAnswer == numberQuestions) {
            setCountAnswer(0)
            setAllAnswer(false)
            setIsWinner(null)
            setClickAnswer(0)
            setIsTime(true)
            navigate("/classification");
        }

    }, [countAnswer])


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

export default OrderQuestions