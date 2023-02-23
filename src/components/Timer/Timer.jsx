import { useEffect, useState } from 'react'
import './Timer.css'

const Timer = (props) => {
    const { time } = props

    const [countDown, setCountDown] = useState(time)
    const [countDownControl, setCountDownControl] = useState(false)

    const countTime = () => {

        let timeRound = time
        let count = timeRound
        let subtract

        if (!count === 0) {
            subtract = setInterval(() => {
                count--
                setCountDown(count)
            }, 1000)
        } else {
            clearInterval(subtract)
        }


        

    }

    useEffect(() => {
        countTime()
    }, [])




    return (
        <div id='countDown'>
            <h3>{countDown}</h3>
        </div>
    )
}

export default Timer