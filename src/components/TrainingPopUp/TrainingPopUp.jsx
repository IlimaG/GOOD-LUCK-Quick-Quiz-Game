import { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import { QuestionsContex } from '../../contex/QuestionsContex'
import './TrainingPopUp.css'

const TrainingPopUp = () => {

    const {trainingPopUp, setTrainingPopUp}= useContext(QuestionsContex)

    const navigate = useNavigate()

    const gotClassicGame = () => {
        setTrainingPopUp('-100%')
        navigate('/classicGame')
    }

    const gotCustomClassicGame = () => {
        setTrainingPopUp('-100%')
        navigate('/custom')
    }

    return (
        <div id='TrainingPopUp' style={{ bottom: trainingPopUp }}>
            <button onClick={() => setTrainingPopUp('-100%')}>X</button>
            <div id='TrainingPopUpBtn'>
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

export default TrainingPopUp