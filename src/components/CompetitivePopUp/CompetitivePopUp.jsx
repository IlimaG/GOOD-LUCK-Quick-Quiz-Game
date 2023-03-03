import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuestionsContex } from '../../contex/QuestionsContex'
import './CompetitivePopUp.css'

const CompetitivePopUp = () => {

    const {competitivePopUp, setCompetitivePopUp}= useContext(QuestionsContex)

    return (
        <div id='CompetitivePopUp' style={{ left: competitivePopUp }}>
            <button onClick={() => setCompetitivePopUp('-100%')}>X</button>
            <div id='CompetitivePopUpBtn'>
                <div className='btnPurple'>
                <Link to={'/classicGame'}>CLASSIC GAME</Link>
                </div>

                <div className='btnPurple'>
                <Link to={'/customGame'}>CUSTOM GAME</Link>
                </div>
                
            </div>
        </div>
    )
}

export default CompetitivePopUp