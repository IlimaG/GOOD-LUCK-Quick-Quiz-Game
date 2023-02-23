import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuestionsContex } from '../../contex/QuestionsContex'
import './TrainingPopUp.css'

const TrainingPopUp = () => {

    const {trainingPopUp, setTrainingPopUp}= useContext(QuestionsContex)

    return (
        <div id='TrainingPopUp' style={{ bottom: trainingPopUp }}>
            <button onClick={() => setTrainingPopUp('-2000px')}>X</button>
            <div id='TrainingPopUpBtn'>
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

export default TrainingPopUp