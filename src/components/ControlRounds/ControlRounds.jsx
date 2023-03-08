import { useContext, useEffect, useState } from 'react'
import { CustomizeGameContex } from '../../contex/CustomizeGameContex'
import { QuestionsContex } from '../../contex/QuestionsContex'
import './ControlRounds.css'

const ControlRounds = (props) => {

    const { control } = props

    const {
        namePlayer1, namePlayer2, 
        namePlayer3, namePlayer4, 
        colorPlayer1, colorPlayer2, 
        colorPlayer3, colorPlayer4, 
        imgPlayer1, imgPlayer2, 
        imgPlayer3, imgPlayer4, 
        numberOsPlayers, setRoundOf } = useContext(CustomizeGameContex)

    const { countAnswer } = useContext(QuestionsContex)

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