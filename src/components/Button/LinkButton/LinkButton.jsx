import { Link } from 'react-router-dom'
import './LinkButton.css'

const LinkButton = (props) => {
    const { text, color, direcion } = props

    // colors : .btnPink, .btnGreen, .btnYellow, .btnBlue

    return (
        <button className={color} role='link' >
            <Link  to={direcion} >{text}</Link>
        </button>
    )
}

export default LinkButton