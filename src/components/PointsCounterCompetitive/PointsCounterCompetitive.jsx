import { useContext } from 'react'
import { CustomizeGameContex } from '../../contex/CustomizeGameContex'
import { PointsContex } from '../../contex/PointsContex'
import './PointsCounterCompetitive.css'


const PointsCounterCompetitive = () => {

    const {
        playerPoints1, setPlayerPoints1,
        playerPoints2, setPlayerPoints2,
        playerPoints3, setPlayerPoints3,
        playerPoints4, setPlayerPoints4 } = useContext(PointsContex)

    const {
        numberQuestions, setNumberQuestions,
        categorie, setCategorie,
        difficulty, setDifficulty,
        type, setType,
        namePlayer1, setNamePlayer1,
        namePlayer2, setNamePlayer2,
        namePlayer3, setNamePlayer3,
        namePlayer4, setNamePlayer4,
        colorPlayer1, setColorPlayer1,
        colorPlayer2, setColorPlayer2,
        colorPlayer3, setColorPlayer3,
        colorPlayer4, setColorPlayer4,
        imgPlayer1, setImgPlayer1,
        imgPlayer2, setImgPlayer2,
        imgPlayer3, setImgPlayer3,
        imgPlayer4, setImgPlayer4,
        isPlayer1, setIsPlayer1,
        isPlayer2, setIsPlayer2,
        isPlayer3, setIsPlayer3,
        isPlayer4, setIsPlayer4,
        numberOsPlayers } = useContext(CustomizeGameContex)


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