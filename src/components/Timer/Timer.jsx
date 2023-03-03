import { useContext, useEffect, useState } from 'react'
import { QuestionsContex } from '../../contex/QuestionsContex'
import './Timer.css'

const Timer = (props) => {

    const { correctOrError, time } = props
    const [color, setColor] = useState('white')
    const [timeOut, setTimeOut] = useState('white')
    const { setIsTime, setPoints, countDown, setCountDown, isTime, isWinner } = useContext(QuestionsContex)


    useEffect(() => {
        const timer =
            countDown > 0 && isTime && setInterval(() => setCountDown(countDown - 1), 1000);

        return () => clearInterval(timer);
    }, [countDown, correctOrError]);

    useEffect(() => {
        if (countDown === 0) {
            setIsTime(false)
            setTimeout(() => setCountDown(time), 2500)
        } else {
            setIsTime(true)
        }

        countDown < 11 ? setColor('red') : setColor('white')
        countDown < 11 ? setTimeOut('timeout') : setTimeOut('')

    }, [countDown])


    useEffect(() => {
        setCountDown(time)
        isWinner && setPoints(prev => prev + countDown)
    }, [correctOrError])

    return (
        <div id='countDown' className={timeOut} style={{
            color: color,
        }}>
            <h3>{countDown}</h3>
        </div>
    )
}

export default Timer