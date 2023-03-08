import './LinkButton.css'

const ClassicButton = (props) => {
    const { text, color } = props

    
    // colors : .btnPink, .btnGreen, .btnYellow, .btnBlue

    return (
        <button id='btn' className={`btn ${color}`} onClick={props.onClickButton}> {text}</button>
    )
}

export default ClassicButton