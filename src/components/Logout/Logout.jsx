import './Logout.css'
import logoutImg from '../../assets/img/logout.png'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate()

    const goHome = () => {
        
    }

    return (

        <button id='logout' onClick={() => navigate("/")}>
            <img src={logoutImg} alt="logout" />
        </button>
    )
}

export default Logout