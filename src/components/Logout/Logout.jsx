import './Logout.css'
import logoutImg from '../../assets/img/logout.png'
import { useNavigate } from 'react-router-dom'
import { QuestionsContex } from '../../contex/QuestionsContex'
import { useContext } from 'react'
import { CustomizeGameContex } from '../../contex/CustomizeGameContex'

const Logout = () => {

    const navigate = useNavigate()

    const { setAllAnswer, setIsWinner, setIsTime, setCountAnswer, setClickAnswer } = useContext(QuestionsContex)
    const { setNumberQuestions  } = useContext(CustomizeGameContex)


    return (

        <button id='logout'
            onClick={() => {
                setCountAnswer(0)
                setAllAnswer(false)
                setIsWinner(null)
                setClickAnswer(0)
                setIsTime(true)
                setNumberQuestions(10)
                navigate("/")
            }}>

            <img src={logoutImg} alt="logout" />

        </button>
    )
}

export default Logout