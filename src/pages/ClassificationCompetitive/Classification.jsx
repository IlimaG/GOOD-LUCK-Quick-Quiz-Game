import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import ClassicButton from '../../components/ClassicButton/ClassicButton';
import { CustomizeGameContex } from '../../contex/CustomizeGameContex';
import { PointsContex } from '../../contex/PointsContex';
import './ClassificationCompetitive.css';

const ClassificationCompetitive = () => {


    const { points } = useContext(PointsContex)
    const { setNumberQuestions } = useContext(CustomizeGameContex)

    const navigate = useNavigate();

    const repeatGame = () => {
        window.history.back()
    }

    const goToHome = () => {
        setNumberQuestions(10)
        navigate('/')
    }

    return(
        <div id='Classification'>
            <h1>Classification</h1>

            <h3>Points <br/> {points} </h3>

            <p>
                {points > 210 && 'YOU ARE THE KING'}

                {points > 150 && points < 210 && 'NOT BAD'}

                {points > 100 && points < 150 && 'YOU NEED TO IMPROVE'}

                {points < 100 && 'IMPROVEMENT IS ALWAYS POSSIBLE, TRY AGAIN.'}
            </p>

            <ClassicButton color='btnGreen' text='BACK TO HOME' onClickButton={goToHome}/>

            <ClassicButton color='btnYellow' text='REPEAT GAME' onClickButton={repeatGame}/>
        </div>
    )
}

export default ClassificationCompetitive