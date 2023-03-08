import { useContext } from 'react'
import { CustomizeGameContex } from '../../contex/CustomizeGameContex'
import { PointsContex } from '../../contex/PointsContex'
import './PointsCounterCompetitive.css'


const PointsCounterCompetitive = () => {

    const {
        playerPoints1, 
        playerPoints2, 
        playerPoints3, 
        playerPoints4, } = useContext(PointsContex)

    const {
        
        namePlayer1,namePlayer2, 
        namePlayer3, namePlayer4, 
        colorPlayer1, colorPlayer2, 
        colorPlayer3, colorPlayer4, 
        imgPlayer1, imgPlayer2, 
        imgPlayer3, imgPlayer4, 
        isPlayer1, isPlayer2, 
        isPlayer3, isPlayer4, 
         } = useContext(CustomizeGameContex)


    return (
        <div id='PointsCounterCompetitive'>

            {isPlayer1 &&
                <section style={{
                    color :colorPlayer1
                }}>
                    <img src={imgPlayer1} alt="image player 1" />
                    <h6>{namePlayer1}</h6>
                    <p>{playerPoints1}</p>
                </section>}

            {isPlayer2 &&
                <section style={{
                    color :colorPlayer2
                }}>
                    <img src={imgPlayer2} alt="image player 2" />
                    <h6>{namePlayer2}</h6>
                    <p>{playerPoints2}</p>
                </section>}

            {isPlayer3 &&
                <section style={{
                    color :colorPlayer3
                }}>
                    <img src={imgPlayer3} alt="image player 3" />
                    <h6>{namePlayer3}</h6>
                    <p>{playerPoints3}</p>
                </section>}

            {isPlayer4 &&
                <section style={{
                    color :colorPlayer4
                }}>
                    <img src={imgPlayer4} alt="image player 4" />
                    <h6>{namePlayer4}</h6>
                    <p>{playerPoints4}</p>
                </section>}
        </div>
    )
}

export default PointsCounterCompetitive