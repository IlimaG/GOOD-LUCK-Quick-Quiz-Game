import { useContext, useEffect, useState } from 'react'
import ClassicButton from '../../components/ClassicButton/ClassicButton'
import PlayerCard from '../../components/PlayerCard/PlayerCard'
import { CustomizeGameContex } from '../../contex/CustomizeGameContex'
import './ClassicGamePlayers.css'

const ClassicGamePlayers = () => {

    const [isEnter, setIsEnter] = useState(false)




    return (
        <div id='PlayersClassic' >
            <h1>CONFIGURE PLAYERS</h1>

            <div id='ClassicGamePlayers'>
                <PlayerCard url='/classicGameCopetitive' />
            </div>
        </div>
    )
}

export default ClassicGamePlayers