import './LinkButton.css'

const ClassicButton = (props) => {
    const { text, color, onClick } = props

    
    // colors : .btnPink, .btnGreen, .btnYellow, .btnBlue

    return (
        <button className={color} onClick={props.onClickButton}> {text}</button>
    )
}

export default ClassicButton