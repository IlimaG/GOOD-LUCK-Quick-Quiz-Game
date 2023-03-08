import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClassicButton from '../../components/ClassicButton/ClassicButton';
import { CustomizeGameContex } from '../../contex/CustomizeGameContex';
import { PointsContex } from '../../contex/PointsContex';
import './Classification.css';

const Classification = () => {

    const {
        points, setPoints,
        playerPoints1, setPlayerPoints1,
        playerPoints2, setPlayerPoints2,
        playerPoints3, setPlayerPoints3,
        playerPoints4, setPlayerPoints4 } = useContext(PointsContex)

    const {
        isLoadCompetitive, setIsLoadCompetitive,
        setNumberQuestions, namePlayer1,
        namePlayer2, namePlayer3,
        namePlayer4, colorPlayer1,
        colorPlayer2, colorPlayer3,
        colorPlayer4, imgPlayer1,
        imgPlayer2, imgPlayer3,
        imgPlayer4, isPlayer1,
        isPlayer2, isPlayer3,
        isPlayer4, } = useContext(CustomizeGameContex)

    const navigate = useNavigate();

    const repeatGame = () => {
        setPoints(0)
        setPlayerPoints1(0)
        setPlayerPoints2(0)
        setPlayerPoints3(0)
        setPlayerPoints4(0)
        window.history.back()
    }

    const goToHome = () => {
        setPoints(0)
        setPlayerPoints1(0)
        setPlayerPoints2(0)
        setPlayerPoints3(0)
        setPlayerPoints4(0)
        setNumberQuestions(10)
        setIsLoadCompetitive(false)
        navigate('/')
    }


    return (
        <div id='Classification'>
            <h1>Classification</h1>

            {!isLoadCompetitive &&
                <>
                    <h3>Points <br /> {points} </h3>

                    <p>
                        {points > 210 && 'YOU ARE THE KING'}

                        {points > 150 && points < 210 && 'NOT BAD'}

                        {points > 100 && points < 150 && 'YOU NEED TO IMPROVE'}

                        {points < 100 && 'IMPROVEMENT IS ALWAYS POSSIBLE, TRY AGAIN.'}
                    </p>
                </>}

            {isLoadCompetitive &&
                <>
                    <div className='classificationCompetitive'>

                        {isPlayer1 &&
                            <section style={{ color: colorPlayer1 }}>

                                <img src={imgPlayer1} alt="image player 1" />
                                <p>{namePlayer1}</p>

                                <h2>{playerPoints1}</h2>

                                <p style={{ color: colorPlayer1 }}>
                                    {playerPoints1 > 210 && '♔  '}

                                    {playerPoints1 > 150 && playerPoints1 < 210 && '♖'}

                                    {playerPoints1 > 100 && playerPoints1 < 150 && '♞ '}

                                    {playerPoints1 < 100 && '♙'}
                                </p>
                            </section>
                        }

                        {isPlayer2 &&
                            <section style={{ color: colorPlayer2 }}>

                                <img src={imgPlayer2} alt="image player 1" />
                                <p>{namePlayer2}</p>

                                <h2>{playerPoints2}</h2>

                                <p style={{ color: colorPlayer2 }}>
                                    {playerPoints2 > 210 && '♔  '}

                                    {playerPoints2 > 150 && playerPoints1 < 210 && '♖'}

                                    {playerPoints2 > 100 && playerPoints1 < 150 && '♞ '}

                                    {playerPoints2 < 100 && '♙'}
                                </p>
                            </section>
                        }

                        {isPlayer3 &&
                            <section style={{ color: colorPlayer3 }}>

                                <img src={imgPlayer3} alt="image player 1" />
                                <p>{namePlayer3}</p>

                                <h2>{playerPoints3}</h2>

                                <p style={{ color: colorPlayer3 }}>
                                    {playerPoints3 > 210 && '♔  '}

                                    {playerPoints3 > 150 && playerPoints1 < 210 && '♖'}

                                    {playerPoints3 > 100 && playerPoints1 < 150 && '♞ '}

                                    {playerPoints3 < 100 && '♙'}
                                </p>
                            </section>
                        }

                        {isPlayer4 &&
                            <section style={{ color: colorPlayer4 }}>

                                <img src={imgPlayer4} alt="image player 1" />
                                <p>{namePlayer4}</p>

                                <h2>{playerPoints4}</h2>

                                <p style={{ color: colorPlayer4 }}>
                                    {playerPoints4 > 210 && '♔  '}

                                    {playerPoints4 > 150 && playerPoints1 < 210 && '♖'}

                                    {playerPoints4 > 100 && playerPoints1 < 150 && '♞ '}

                                    {playerPoints4 < 100 && '♙'}
                                </p>
                            </section>
                        }

                    </div>
                </>}

            {isLoadCompetitive && <ClassicButton color='btnYellow' text='REPEAT GAME' onClickButton={repeatGame} />}
            {isLoadCompetitive && <ClassicButton color='btnBlue' text={<Link to={`/customizeGameCompetitive`}>ADJUST GAME</Link>} />}

            {!isLoadCompetitive && <ClassicButton color='btnYellow' text='REPEAT GAME' onClickButton={repeatGame} />}
            {!isLoadCompetitive && <ClassicButton color='btnBlue' text={<Link to={`/custom`}>ADJUST GAME</Link>} />}

            <ClassicButton color='btnGreen' text='BACK TO HOME' onClickButton={goToHome} />
        </div>
    )
}

export default Classification