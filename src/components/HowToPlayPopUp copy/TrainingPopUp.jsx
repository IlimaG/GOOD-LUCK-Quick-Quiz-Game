import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuestionsContex } from '../../contex/QuestionsContex'
import LinkButton from '../Button/LinkButton'
import './HowToPlayPopUp.css'

const HowToPlayPopUp = () => {

    const { howToPlay, setHowToPlay } = useContext(QuestionsContex)

    return (
        <div id='HowToPlayPopUp' style={{ bottom: howToPlay }}>
            <button onClick={() => setHowToPlay('-2000px')}>X</button>
            <div id='HowToPlayPopUpBtn'>
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

export default HowToPlayPopUp