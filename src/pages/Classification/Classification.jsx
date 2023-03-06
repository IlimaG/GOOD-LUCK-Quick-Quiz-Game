import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ClassicButton from '../../components/ClassicButton/ClassicButton';
import { PointsContex } from '../../contex/PointsContex';
import './Classification.css';

const Classification = () => {

    const { points } = useContext(PointsContex)

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

            <ClassicButton color='btnGreen' text={<Link to={'/'}>BACK TO HOME</Link>}/>
            <ClassicButton color='btnYellow' text={<Link to={'/classicGame'}>REPEAT GAME</Link>}/>
        </div>
    )
}

export default Classification