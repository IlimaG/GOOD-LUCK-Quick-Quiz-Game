import './PlayerCard.css'

import imgplayer1 from '../../assets/img/imgplayer1.png'
import imgplayer2 from '../../assets/img/imgplayer2.png'
import imgplayer3 from '../../assets/img/imgplayer3.png'
import imgplayer4 from '../../assets/img/imgplayer4.png'
import imgplayer5 from '../../assets/img/imgplayer5.png'
import imgplayer6 from '../../assets/img/imgplayer6.png'
import imgplayer7 from '../../assets/img/imgplayer7.png'
import imgplayer8 from '../../assets/img/imgplayer8.png'
import imgplayer9 from '../../assets/img/imgplayer9.png'

import { useContext, useEffect, useState } from 'react'
import { CustomizeGameContex } from '../../contex/CustomizeGameContex'
import { useNavigate } from 'react-router-dom'
import Logout from '../Logout/Logout'


const PlayerCard = (props) => {

    const { url } = props

    const {
        namePlayer1, setNamePlayer1,
        namePlayer2, setNamePlayer2,
        namePlayer3, setNamePlayer3,
        namePlayer4, setNamePlayer4,
        colorPlayer1, setColorPlayer1,
        colorPlayer2, setColorPlayer2,
        colorPlayer3, setColorPlayer3,
        colorPlayer4, setColorPlayer4,
        imgPlayer1, setImgPlayer1,
        imgPlayer2, setImgPlayer2,
        imgPlayer3, setImgPlayer3,
        imgPlayer4, setImgPlayer4,
        setNumberOfPlayers,
        isPlayer1, setIsPlayer1,
        isPlayer2, setIsPlayer2,
        isPlayer3, setIsPlayer3,
        isPlayer4, setIsPlayer4
    } = useContext(CustomizeGameContex)

    const handleIsPlayer1Input = (e) => setIsPlayer1(!isPlayer1)
    const handleIsNamePlayer1Input = (e) => setNamePlayer1(e.target.value)
    const handleIsColorPlayer1Input = (e) => setColorPlayer1(e.target.value)

    const handleIsPlayer2Input = (e) => setIsPlayer2(!isPlayer2)
    const handleIsNamePlayer2Input = (e) => setNamePlayer2(e.target.value)
    const handleIsColorPlayer2Input = (e) => setColorPlayer2(e.target.value)

    const handleIsPlayer3Input = (e) => setIsPlayer3(!isPlayer3)
    const handleIsNamePlayer3Input = (e) => setNamePlayer3(e.target.value)
    const handleIsColorPlayer3Input = (e) => setColorPlayer3(e.target.value)

    const handleIsPlayer4Input = (e) => setIsPlayer4(!isPlayer4)
    const handleIsNamePlayer4Input = (e) => setNamePlayer4(e.target.value)
    const handleIsColorPlayer4Input = (e) => setColorPlayer4(e.target.value)

    const [allImgs, setalImgs] = useState([imgplayer1, imgplayer2, imgplayer3, imgplayer4, imgplayer5, imgplayer6, imgplayer7, imgplayer8, imgplayer9])

    const [isImgPlayer1, setIsImgPlayer1] = useState(false)
    const [isImgPlayer2, setIsImgPlayer2] = useState(false)
    const [isImgPlayer3, setIsImgPlayer3] = useState(false)
    const [isImgPlayer4, setIsImgPlayer4] = useState(false)

    const [keyPressed, setKeyPressed] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        setImgPlayer1(imgplayer1)
        setImgPlayer2(imgplayer2)
        setImgPlayer3(imgplayer3)
        setImgPlayer4(imgplayer4)
    }, [])

    useEffect(() => {
        let totalPlayers = []

        const isnamePlayer1 = !namePlayer1 == '' ? namePlayer1 : null
        const isnamePlayer2 = !namePlayer2 == '' ? namePlayer2 : null
        const isnamePlayer3 = !namePlayer3 == '' ? namePlayer3 : null
        const isnamePlayer4 = !namePlayer4 == '' ? namePlayer4 : null


        onKeyDownHandler()

        if (keyPressed === 'Enter' && namePlayer1) {

            if (isnamePlayer1) {
                totalPlayers.push(isnamePlayer1)
            }
            if (isnamePlayer2) {
                totalPlayers.push(isnamePlayer2)
            }
            if (isnamePlayer3) {
                totalPlayers.push(isnamePlayer3)
            }
            if (isnamePlayer4) {
                totalPlayers.push(isnamePlayer4)
            }

            setNumberOfPlayers(totalPlayers.length)

            navigate(`${url}`)
        }




    }, [keyPressed])

    function onKeyDownHandler(event) {
        document.addEventListener("keydown", e => {
            let keyName = e.keyCode === 32 ? "Space" : e.key;
            setKeyPressed(keyName)
        });

    }


    return (
        <>
            <Logout />
            <div className="content"
                style={{
                    border: `2px solid ${colorPlayer1}`,
                    boxShadow: `2px -0px 15px ${colorPlayer1}`
                }}

            >

                <h3
                    style={{
                        color: colorPlayer1,
                        fontSize: '2.5rem',
                        textDecoration: !isPlayer1 && 'line-through'
                    }}>

                    {isPlayer1 && namePlayer1 == '' && 'PLAYER 1'}
                    {!isPlayer1 && 'PLAYER 1'}
                    {isPlayer1 && namePlayer1}
                </h3>

                <div >
                    <label className="checkBox"
                        style={{
                            boxShadow: `0px 0px 0px 2px ${colorPlayer1}`
                        }}>

                        <input id="ch1" type="checkbox" defaultChecked onChange={handleIsPlayer1Input} />
                        <div className="transition"
                            style={{
                                backgroundColor: `${colorPlayer1}`
                            }}></div>
                    </label>
                </div>

                <form className="playerCard" >

                    <div className="playerCard2">

                        <div className='imgplayer'

                            style={{
                                border: `2px solid ${colorPlayer1}`,
                                filter: !isPlayer1 ? ` blur(2px)` : ``,
                                boxShadow: `2px -0px 15px ${colorPlayer1}`,
                                backgroundImage: `url(${imgPlayer1})`
                            }}

                            onClick={() => setIsImgPlayer1(!isImgPlayer1)}
                        >

                        </div>

                        <input
                            type="text"
                            name="playerName"
                            id="playerName"
                            placeholder='PLAYER NAME'
                            maxLength={10}
                            disabled={!isPlayer1}
                            style={{
                                filter: !isPlayer1 ? ` blur(2px)` : ``,
                            }}
                            onChange={handleIsNamePlayer1Input}
                        />

                        <div className='colorPlayer'
                            style={{
                                filter: !isPlayer1 ? ` blur(2px)` : ``,
                                backgroundColor: colorPlayer1,
                            }}>

                            <h3>SELECT COLOR</h3>
                            <input type="color" name="colorPlayerinput" id="colorPlayerinput" onChange={handleIsColorPlayer1Input} />
                        </div>
                    </div>
                </form>
            </div >

            <div className="content"
                style={{
                    border: `2px solid ${colorPlayer1}`,
                    boxShadow: `2px -0px 15px ${colorPlayer1}`,
                    opacity: isImgPlayer1 && isPlayer1 ? '1' : '0',
                    width: isImgPlayer1 && isPlayer1 ? '20%' : 0
                }}>

                <div className='selectImgPlayer'>
                    {allImgs.map((e) => {
                        return <div
                            key={e}
                            style={{
                                backgroundImage: `url(${e})`,
                                opacity: isImgPlayer1 && isPlayer1 ? '1' : '0',
                                width: isImgPlayer1 && isPlayer1 ? '120px' : 0,
                            }}
                            onClick={() => setImgPlayer1(e)}
                        >

                        </div>
                    })}
                </div>

            </div >



            <div className="content"
                style={{
                    border: `2px solid ${colorPlayer2}`,
                    boxShadow: `2px -0px 15px ${colorPlayer2}`
                }}>

                <h3
                    style={{
                        color: colorPlayer2,
                        fontSize: '2.5rem',
                        textDecoration: !isPlayer2 && 'line-through'
                    }}>

                    {isPlayer2 && namePlayer2 == '' && 'PLAYER 2'}
                    {!isPlayer2 && 'PLAYER 2'}
                    {isPlayer2 && namePlayer2}
                </h3>

                <div >
                    <label className="checkBox"
                        style={{
                            boxShadow: `0px 0px 0px 2px ${colorPlayer2}`
                        }}>

                        <input id="ch1" type="checkbox" value={isPlayer2} onChange={handleIsPlayer2Input} />
                        <div className="transition"
                            style={{
                                backgroundColor: `${colorPlayer2}`
                            }}></div>
                    </label>
                </div>

                <form className="playerCard" >
                    <div className="playerCard2">

                        <div className='imgplayer'
                            style={{
                                border: `2px solid ${colorPlayer2}`,
                                boxShadow: `2px -0px 15px ${colorPlayer2}`,
                                filter: !isPlayer2 ? 'blur(2px)' : '',
                                backgroundImage: `url(${imgPlayer2})`
                            }}

                            onClick={() => setIsImgPlayer2(!isImgPlayer2)}
                        >
                        </div>

                        <input
                            type="text"
                            name="playerName"
                            id="playerName"
                            placeholder='PLAYER NAME'
                            maxLength={10}
                            disabled={!isPlayer2}
                            style={{
                                filter: !isPlayer2 ? ` blur(2px)` : ``
                            }}
                            onChange={handleIsNamePlayer2Input}
                        />

                        <div className='colorPlayer'
                            style={{
                                filter: !isPlayer2 ? ` blur(2px)` : ``,
                                backgroundColor: colorPlayer2,
                            }}>

                            <h3>SELECT COLOR</h3>

                            <input type="color" name="colorPlayerinput" id="colorPlayerinput" onChange={handleIsColorPlayer2Input} />
                        </div>
                    </div>
                </form>
            </div >

            <div className="content"
                style={{
                    border: `2px solid ${colorPlayer2}`,
                    boxShadow: `2px -0px 15px ${colorPlayer2}`,
                    opacity: isImgPlayer2 && isPlayer2 ? '1' : '0',
                    width: isImgPlayer2 && isPlayer2 ? '20%' : 0
                }}>

                <div className='selectImgPlayer'>
                    {allImgs.map((e) => {
                        return <div
                            key={e}
                            style={{
                                backgroundImage: `url(${e})`,
                                opacity: isImgPlayer2 && isPlayer2 ? '1' : '0',
                                width: isImgPlayer2 && isPlayer2 ? '120px' : 0,
                            }}
                            onClick={() => setImgPlayer2(e)}
                        >

                        </div>
                    })}
                </div>

            </div >



            <div className="content"
                style={{
                    border: `2px solid ${colorPlayer3}`,
                    boxShadow: `2px -0px 15px ${colorPlayer3}`
                }}>

                <h3
                    style={{
                        color: colorPlayer3,
                        fontSize: '2.5rem',
                        textDecoration: !isPlayer3 && 'line-through'
                    }}>

                    {isPlayer3 && namePlayer3 == '' && 'PLAYER 2'}
                    {!isPlayer3 && 'PLAYER 2'}
                    {isPlayer3 && namePlayer3}
                </h3>

                <div >
                    <label className="checkBox"
                        style={{
                            boxShadow: `0px 0px 0px 2px ${colorPlayer3}`
                        }}>

                        <input id="ch1" type="checkbox" value={isPlayer3} onChange={handleIsPlayer3Input} />
                        <div className="transition"
                            style={{
                                backgroundColor: `${colorPlayer3}`
                            }}></div>
                    </label>
                </div>

                <form className="playerCard" >
                    <div className="playerCard2">

                        <div className='imgplayer'
                            style={{
                                border: `2px solid ${colorPlayer3}`,
                                boxShadow: `2px -0px 15px ${colorPlayer3}`,
                                filter: !isPlayer3 ? 'blur(2px)' : '',
                                backgroundImage: `url(${imgPlayer3})`
                            }}

                            onClick={() => setIsImgPlayer3(!isImgPlayer3)}
                        >
                        </div>

                        <input
                            type="text"
                            name="playerName"
                            id="playerName"
                            placeholder='PLAYER NAME'
                            maxLength={10}
                            disabled={!isPlayer3}
                            style={{
                                filter: !isPlayer3 ? ` blur(2px)` : ``
                            }}
                            onChange={handleIsNamePlayer3Input}
                        />

                        <div className='colorPlayer'
                            style={{
                                filter: !isPlayer3 ? ` blur(2px)` : ``,
                                backgroundColor: colorPlayer3,
                            }}>

                            <h3>SELECT COLOR</h3>

                            <input type="color" name="colorPlayerinput" id="colorPlayerinput" onChange={handleIsColorPlayer3Input} />
                        </div>
                    </div>
                </form>
            </div >

            <div className="content"
                style={{
                    border: `2px solid ${colorPlayer3}`,
                    boxShadow: `2px -0px 15px ${colorPlayer3}`,
                    opacity: isImgPlayer3 && isPlayer3 ? '1' : '0',
                    width: isImgPlayer3 && isPlayer3 ? '20%' : 0
                }}>

                <div className='selectImgPlayer'>
                    {allImgs.map((e) => {
                        return <div
                            key={e}
                            style={{
                                backgroundImage: `url(${e})`,
                                opacity: isImgPlayer3 && isPlayer3 ? '1' : '0',
                                width: isImgPlayer3 && isPlayer3 ? '120px' : 0,
                            }}
                            onClick={() => setImgPlayer3(e)}
                        >

                        </div>
                    })}
                </div>

            </div >



            <div className="content"
                style={{
                    border: `2px solid ${colorPlayer4}`,
                    boxShadow: `2px -0px 15px ${colorPlayer4}`
                }}>

                <h3
                    style={{
                        color: colorPlayer4,
                        fontSize: '2.5rem',
                        textDecoration: !isPlayer4 && 'line-through'
                    }}>

                    {isPlayer4 && namePlayer4 == '' && 'PLAYER 4'}
                    {!isPlayer4 && 'PLAYER 4'}
                    {isPlayer4 && namePlayer4}
                </h3>

                <div >
                    <label className="checkBox"
                        style={{
                            boxShadow: `0px 0px 0px 2px ${colorPlayer4}`
                        }}>

                        <input id="ch1" type="checkbox" value={isPlayer4} onChange={handleIsPlayer4Input} />
                        <div className="transition"
                            style={{
                                backgroundColor: `${colorPlayer4}`
                            }}></div>
                    </label>
                </div>

                <form className="playerCard" >
                    <div className="playerCard2">

                        <div className='imgplayer'
                            style={{
                                border: `2px solid ${colorPlayer4}`,
                                boxShadow: `2px -0px 15px ${colorPlayer4}`,
                                filter: !isPlayer4 ? 'blur(2px)' : '',
                                backgroundImage: `url(${imgPlayer4})`
                            }}

                            onClick={() => setIsImgPlayer4(!isImgPlayer4)}
                        >
                        </div>

                        <input
                            type="text"
                            name="playerName"
                            id="playerName"
                            placeholder='PLAYER NAME'
                            maxLength={10}
                            disabled={!isPlayer4}
                            style={{
                                filter: !isPlayer4 ? ` blur(2px)` : ``
                            }}
                            onChange={handleIsNamePlayer4Input}
                        />

                        <div className='colorPlayer'
                            style={{
                                filter: !isPlayer4 ? ` blur(2px)` : ``,
                                backgroundColor: colorPlayer4,
                            }}>

                            <h3>SELECT COLOR</h3>

                            <input type="color" name="colorPlayerinput" id="colorPlayerinput" onChange={handleIsColorPlayer4Input} />
                        </div>
                    </div>
                </form>
            </div >

            <div className="content"
                style={{
                    border: `2px solid ${colorPlayer4}`,
                    boxShadow: `2px -0px 15px ${colorPlayer4}`,
                    opacity: isImgPlayer4 && isPlayer4 ? '1' : '0',
                    width: isImgPlayer4 && isPlayer4 ? '20%' : 0
                }}>

                <div className='selectImgPlayer'>
                    {allImgs.map((e) => {
                        return <div
                            key={e}
                            style={{
                                backgroundImage: `url(${e})`,
                                opacity: isImgPlayer4 && imgPlayer4 ? '1' : '0',
                                width: isImgPlayer4 && imgPlayer4 ? '120px' : 0,
                            }}
                            onClick={() => setImgPlayer4(e)}
                        >

                        </div>
                    })}
                </div>

            </div >
            <h1 className='neonTextEnter'>PRESS ENTER TO PLAY</h1>


        </>
    )
}

export default PlayerCard