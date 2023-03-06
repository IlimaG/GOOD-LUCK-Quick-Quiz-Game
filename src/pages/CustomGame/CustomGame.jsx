import axios from 'axios';
import { useContext, useState } from 'react';
import { CustomizeGameContex } from '../../contex/CustomizeGameContex';
import './CustomGame.css';

const CustomGame = () => {

    const [categories, setCategories] = useState([])
    const { setNumberQuestions, setCategorie, setType, setDifficulty} = useContext(CustomizeGameContex)

    const handleNumberQuestionsInput = (e) => setNumberQuestions(e.target.value)
    const handleCategoriesInput = (e) => setCategorie(e.target.value)
    const handleTypeInput = (e) => setType(e.target.value)
    const handleDifficultyInput = (e) => setDifficulty(e.target.value)


    axios
        .get('https://opentdb.com/api_category.php')
        .then(response => setCategories(response.data.trivia_categories))

    return (
        <form id='CustomGame'>

            <label htmlFor="numberQuestions">Number of Questions</label>
            <input type='number' id='numberQuestions' defaultValue={10} min={1} max={50} onChange={handleNumberQuestionsInput} />

            <select name="Categories" id="Categories" onChange={handleCategoriesInput}>
                <option value=''>All categories</option>
                {categories.map((cat) => {
                    return <option key={cat.id} value={cat.id}>{cat.name}</option>
                })}
            </select>

            <select name="typeQuestions" id="" onChange={handleTypeInput}>
                <option value=''>Type ramdom</option>
                <option value='multiple'>Multiple Choice</option>
                <option value='boolean'>True / False</option>
            </select>

            <select name="Difficulty" id="Difficulty" onChange={handleDifficultyInput}>
                <option value=''>Difficulty ramdom</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>
            

            <button>PLAY</button>
        </form>
    )
}

export default CustomGame