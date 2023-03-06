import { useContext } from 'react'
import { PointsContex } from '../../contex/PointsContex'
import './PointsCounter.css'


const PointsCounter = () => {

    const { points } = useContext(PointsContex)

    return (
        <h3 id='PointsCounter'>Points: {points} </h3>
    )
}

export default PointsCounter