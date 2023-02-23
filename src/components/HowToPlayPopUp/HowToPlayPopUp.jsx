import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuestionsContex } from '../../contex/QuestionsContex'
import './HowToPlayPopUp.css'

const HowToPlayPopUp = () => {

    const { howToPlay, setHowToPlay } = useContext(QuestionsContex)

    return (
        <div id='HowToPlayPopUp' style={{ right: howToPlay }}>
            <button onClick={() => setHowToPlay('-2000px')}>X</button>
            <div id='HowToPlayPopUpInfo'>
                <div>
                    <h3 id='trainningInfo'>TRAINNING</h3>
                    <h4>For single player</h4>
                    <h4>Practice to be the best, try out our classic mode, or customize your game to be the MVP of all categories.  </h4>
                </div>

                
                <div>
                    <h3 id='CompetitiveInfo'>COMPETITIVE</h3>
                    <h4>From 1 to 4 players</h4>
                    <h4>Play in classic mode and fight to be the best. Or play the custom mode and show who knows more in your field.</h4>
                </div>

                <div>
                    <h3 id='clasicGameInfo'>CLASSIC GAME</h3>
                    <h4>10 questions</h4>
                    <h4>30 seconds to answer</h4>
                    <h4>Random categories</h4>
                    <h4>Difficulty in crechendo</h4>
                    <h4>6 multiple choice questions 4 true or false</h4>
                </div>

                <div>
                    <h3 id='customGameInfo'>CUSTOM GAME</h3>
                    <h4>Choose the number of questions</h4>
                    <h4>Set your time to answer</h4>
                    <h4>Select the categories you like the most</h4>
                    <h4>The difficulty you prefer</h4>
                    <h4>Decide which mode of question you want to play</h4>   
                </div>

            </div>
        </div>
    )
}

export default HowToPlayPopUp