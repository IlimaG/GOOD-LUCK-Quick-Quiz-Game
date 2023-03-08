import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControlQuestionCustom from '../../components/ControlQuestionCustom/ControlQuestionCustom';
import Logout from '../../components/Logout/Logout';
import { CustomizeGameContex } from '../../contex/CustomizeGameContex';
import './CustomizeGame.css';

const CustomizeGame = () => {

    const [categories, setCategories] = useState([])
    const { setNumberQuestions, setCategorie, setType, setDifficulty, numberQuestions } = useContext(CustomizeGameContex)

    const handleNumberQuestionsInput = (e) => setNumberQuestions(e.target.value)
    const handleCategoriesInput = (e) => setCategorie(e.target.value)
    const handleTypeInput = (e) => setType(e.target.value)
    const handleDifficultyInput = (e) => setDifficulty(e.target.value)
    const [keyPressed, setKeyPressed] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://opentdb.com/api_category.php')
            .then(response => setCategories(response.data.trivia_categories))
    }, [])

    

    function onKeyDownHandler(event) {
        document.addEventListener("keydown", e => {
            let keyName = e.keyCode === 32 ? "Space" : e.key;
            setKeyPressed(keyName)
        });

    }

    useEffect(() => {
        if (keyPressed === 'Enter') {
            navigate('/customGame')
        }
    }, [keyPressed])

    return (
        <>
        <Logout />
            <div id='customgame1' onKeyDown={onKeyDownHandler()}>

                <ControlQuestionCustom />


            </div>
                <h1 className='neonTex2'>PRESS ENTER TO PLAY</h1>
        </>

    )
}

export default CustomizeGame