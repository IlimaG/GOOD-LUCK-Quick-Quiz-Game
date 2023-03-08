import { useContext, useEffect, useState } from 'react'
import { PointsContex } from '../../contex/PointsContex'
import { QuestionsContex } from '../../contex/QuestionsContex'
import CountdowSound from '../../assets/audio/CountdowSound.mp3'
import './Timer.css'
import { CustomizeGameContex } from '../../contex/CustomizeGameContex'

const Timer = (props) => {

    const { correctOrError, time } = props
    const [color, setColor] = useState('white')
    const [timeOut, setTimeOut] = useState('white')
    const { setIsTime, countDown, setCountDown, isTime, isWinner } = useContext(QuestionsContex)
    const { 
        setPoints, setPlayerPoints1,
        setPlayerPoints2, setPlayerPoints3,
     setPlayerPoints4 } = useContext(PointsContex)
    const [countdowSound, setCountDownSound] = useState(new Audio(CountdowSound))

    const { isLoadCompetitive, roundOf } = useContext(CustomizeGameContex)

    useEffect(() => {
        setCountDown(time)
    }, [])

    useEffect(() => {
        const timer =
            countDown > 0 && isTime && setInterval(() => setCountDown(countDown - 1), 1000);

        return () => clearInterval(timer);
    }, [countDown, correctOrError]);

    useEffect(() => {
        if (countDown === 9) {
            countdowSound.play()
        }

    }, [countDown])

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
        if (isLoadCompetitive) {

            isWinner && roundOf === 0 && setPlayerPoints1(prev => prev + countDown)
            isWinner && roundOf === 1 && setPlayerPoints2(prev => prev + countDown)
            isWinner && roundOf === 2 && setPlayerPoints3(prev => prev + countDown)
            isWinner && roundOf === 3 && setPlayerPoints4(prev => prev + countDown)
        } else {
            isWinner && setPoints(prev => prev + countDown)
        }
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