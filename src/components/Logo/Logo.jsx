import './Logo.css'
import logo from '../../assets/img/GOOD_LUCK_01.gif'

const Logo = () => {

    return (
        <div className='logo'>
            <img src={logo} alt="logo" />
            <div className='neonText'>
                <h1>QUICK QUIZ GAME</h1>
            </div>

        </div>
    )
}

export default Logo