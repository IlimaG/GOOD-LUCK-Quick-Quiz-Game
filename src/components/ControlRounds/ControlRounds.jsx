import { useContext, useEffect, useState } from 'react'
import { CustomizeGameContex } from '../../contex/CustomizeGameContex'
import { QuestionsContex } from '../../contex/QuestionsContex'
import './ControlRounds.css'

const ControlRounds = (props) => {

    const { control } = props

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
        isLoadCompetitive, setIsLoadCompetitive,
        numberOsPlayers,isPlayer1,isPlayer2,isPlayer3,isPlayer4,
        nextRound, setNextRound,
        roundOf, setRoundOf } = useContext(CustomizeGameContex)

    const { setAllAnswer, allAnswer, countAnswer, clickAnswer, isTime } = useContext(QuestionsContex)

    // const [isPlayersArr, setIsPlayersArr] = useState([isPlayer1, isPlayer2, isPlayer3, isPlayer4])
    const [namePlayers, setNamePlayers] = useState([namePlayer1, namePlayer2, namePlayer3, namePlayer4])
    const [colorPlayers, setColorPlayers] = useState([colorPlayer1, colorPlayer2, colorPlayer3, colorPlayer4])
    const [imgPlayers, setImgPlayers] = useState([imgPlayer1, imgPlayer2, imgPlayer3, imgPlayer4])

    const [indexPlayer, setIndexPlayer] = useState(-1)
    const [indexNexPlayer, setIndexNexPlayer] = useState(0)



    useEffect(() => {
        if (indexPlayer === numberOsPlayers - 1) {
            console.log(indexPlayer, numberOsPlayers);
            setIndexPlayer(0)
        } else {
            setIndexPlayer(indexPlayer + 1)
        }

        if (indexNexPlayer === numberOsPlayers - 1) {
            setIndexNexPlayer(0)
        } else {
            setIndexNexPlayer(indexNexPlayer + 1)
        }

        setRoundOf(indexNexPlayer)
    }, [countAnswer])

    return (
        <div>

            <div className='ControlRounds'>
                <img src={imgPlayers[indexPlayer]}  style={{
                border: `2px solid ${colorPlayers[indexPlayer]}`,
                boxShadow: `2px -0px 15px ${colorPlayers[indexPlayer]}`,
            }}/>
                <h3 /> {namePlayers[indexPlayer]}
            </div>

            <div className='ControlRounds ControlRounds2'>
                <img src={imgPlayers[indexNexPlayer]} />
                <h3 /> {namePlayers[indexNexPlayer]}
            </div>
        </div>
    )

}

export default ControlRounds