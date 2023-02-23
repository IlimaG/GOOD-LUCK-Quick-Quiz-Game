import { hover } from '@testing-library/user-event/dist/hover'
import { useState } from 'react';
import './Ask.css'


const Ask = ({ rgba, text, text2 }) => {

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
        <div className="card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                border: `2px solid ${rgba}`,
                boxShadow: `2px 2px 15px ${boxStyle} inset`,
            }}

        >
            <div className="card-info"
                style={{
                    color: textStyle
                }}>
                <p>{text}</p>
                <span>{text2}</span>
            </div>
        </div >
    )
}

export default Ask