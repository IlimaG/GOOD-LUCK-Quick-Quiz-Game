import { useContext } from 'react'
import { QuestionsContex } from '../../contex/QuestionsContex'
import './PointsCounter.css'


const PointsCounter = () => {

    const { points } = useContext(QuestionsContex)

    return (
        <h3 id='PointsCounter'>Points: {points} </h3>
    )
}

export default PointsCounter