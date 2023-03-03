import { useContext, useEffect, useState } from 'react'
import { QuestionsContex } from '../../contex/QuestionsContex'
import './ErrorCorrectAsk.css'

const ErrorCorrectAsk = (props) => {
    const { countRound, correctOrError } = props
    const { isWinner, isTime } = useContext(QuestionsContex)
    const [opacity, setOpacity] = useState('0')
    const [zIndex, setzIndex] = useState('-1')
    const [color, setcolor] = useState('')
    const [isCorectAnswer, setIsCorectAnswer] = useState('')

    useEffect(() => {
        if (!correctOrError == 0) {
            setOpacity('1')
            setzIndex('1')
            setTimeout(() => {
                setzIndex('-1')
                setOpacity('0')
            }, 2000); 
        }

        if (isWinner) {
            setcolor('#5aae39')  
            setIsCorectAnswer('winner')
        } else {
            setcolor('#d259e5')  
            setIsCorectAnswer('incorrect')
        }
    }, [correctOrError])

    return (
        <div id='ErrorCorrectAsk' style={{
            opacity: opacity,
            color: color,
            position: 'fixed',
            animation: `${isCorectAnswer} 1.5s infinite alternate`,
            transition: 'all 2s ease',
            zIndex: zIndex
        }}>
  
                {isWinner && <h1>CORRECT <br/> ANSWER</h1>}
                {!isWinner && isTime && <h1>INCORRECT <br/> ANSWER</h1>}
                {!isTime  && <h1> OUT OF<br/> TIME</h1>}
            
        </div>
    )

}

export default ErrorCorrectAsk