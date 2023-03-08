import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { QuestionsContex } from '../../contex/QuestionsContex'
import './CompetitivePopUp.css'

const CompetitivePopUp = () => {

    const { competitivePopUp, setCompetitivePopUp } = useContext(QuestionsContex)

    const navigate = useNavigate()

    const gotClassicGame = () => {
        setCompetitivePopUp('-100%')
        navigate('/classicGamePlayers')
    }

    const gotCustomClassicGame = () => {
        setCompetitivePopUp('-100%')
        navigate('/customizeGameCompetitive')
    }

    return (
        <div id='CompetitivePopUp' style={{ left: competitivePopUp }}>
            <button onClick={() => setCompetitivePopUp('-100%')}>X</button>
            <div id='CompetitivePopUpBtn'>
                
                <div className='btn btnPurple' onClick={() => gotClassicGame()}>
                    CLASSIC GAME
                </div>

                <div className='btn btnPurple' onClick={() => gotCustomClassicGame()}>
                    CUSTOM GAME
                </div>

            </div>
        </div>
    )
}

export default CompetitivePopUp