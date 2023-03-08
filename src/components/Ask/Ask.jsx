import { useState } from 'react';
import './Ask.css'


const Ask = (props) => {
    const { rgba, text, text2 } = props

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    };


    const boxStyle = isHover ? `${rgba}` : '#000000'
    const textStyle = isHover ? `${rgba}` : '#e8e8e8'

    return (
        <div className="cardAks"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                border: `5px solid ${rgba}`,
                boxShadow: `2px 2px 15px white inset`,
            }}
        >
            <div className="cardAks-info"
                style={{
                    color: textStyle
                }}>
                {text}
                <span>{text2}</span>
            </div>
        </div >
    )
}

export default Ask