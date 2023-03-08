import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassicButton from '../../components/ClassicButton/ClassicButton';
import ControlQuestionCustom from '../../components/ControlQuestionCustom/ControlQuestionCustom';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import { CustomizeGameContex } from '../../contex/CustomizeGameContex';
import './CustomizeGameCompetitive.css';

const CustomizeGameCompetitive = () => {

    const [categories, setCategories] = useState([])
    const { setNumberQuestions, setCategorie, setType, setDifficulty, numberQuestions } = useContext(CustomizeGameContex)

    const handleNumberQuestionsInput = (e) => setNumberQuestions(e.target.value)
    const handleCategoriesInput = (e) => setCategorie(e.target.value)
    const handleTypeInput = (e) => setType(e.target.value)
    const handleDifficultyInput = (e) => setDifficulty(e.target.value)

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://opentdb.com/api_category.php')
            .then(response => setCategories(response.data.trivia_categories))


    }, [])

    return (
        <div>
            <ControlQuestionCustom />
           

            <div id='PlayerCardCustom'>
                <PlayerCard url='/customGameCompetitive'/>
            </div>
        </div>
    )
}

export default CustomizeGameCompetitive