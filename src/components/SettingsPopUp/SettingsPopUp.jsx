import './SettingsPopUp.css'
import { SettingsContex } from '../../contex/SettingsContex';
import { useContext, useState } from 'react';
import Ask from '../Ask/Ask';
import audioPrincipal from '../../assets/audio/principal.mp3'
import audioGuitar from '../../assets/audio/guitar.mp3'
import audioHipHop from '../../assets/audio/HipHop.mp3'
import audiaFlute from '../../assets/audio/flauta.mp3'


const SettingsPopUp = () => {

    const {
        muteMusic, controlMusic,
        setAudio, showSettings,
        setShowSettings, color1, setColor1,
        color2, setColor2, color3, setColor3,
        color4, setColor4,
        musicVolume, setMusicVolume,
        trueColor, setTrueColor,
        falseColor, setFalseColor,
    } = useContext(SettingsContex)

    const handleMusicVolumeInput = (e) => setMusicVolume(e.target.value)
    const handleMuteMusicVolumeInput = () => controlMusic()
    const handleAudioInput = (e) => setAudio(new Audio(e.target.value))


    const handleColor1Input = (e) => setColor1(e.target.value)
    const handleColor2Input = (e) => setColor2(e.target.value)
    const handleColor3Input = (e) => setColor3(e.target.value)
    const handleColor4Input = (e) => setColor4(e.target.value)
    const handleTrueColorInput = (e) => setTrueColor(e.target.value)
    const handleFalseColor4Input = (e) => setFalseColor(e.target.value)

    const closeSEttings = () => {
        setShowSettings('-110%')
    }

    return (
        <div id='SettingsPopUp' style={{ top: `${showSettings}` }}>
            <button id='closeSettings' onClick={() => closeSEttings()}>X</button>
            <div id='musicSettings'>
                <div className='muteMusic'>
                    <label htmlFor="musicVolume">Music volume</label>
                    <input type="range" id="musicVolume" className='box' min={0} max={1} value={musicVolume} step={0.01} onChange={handleMusicVolumeInput} />
                </div>

                <div className='muteMusic'>
                    <label htmlFor="muteMusic">Mute music</label>
                    <label className="MusicCheckbox">
                        <input type="checkbox" checked={muteMusic} onChange={handleMuteMusicVolumeInput}
                        />
                        <div className="checkmark"></div>
                    </label>
                    <label htmlFor="selectSong">Select Song</label>

                    <select name="songs" id="selectSong" onChange={handleAudioInput} onClick={() => {
                        if (!muteMusic) {
                            return
                        } else {
                            controlMusic()
                        }
                    }}>
                        <option value={audioPrincipal}>Happy song</option>
                        <option value={audioGuitar}>Guitar song</option>
                        <option value={audioHipHop}>Hip-Hop song</option>
                        <option value={audiaFlute}>Flute song</option>
                    </select>
                </div>

            </div>

            <h3>Color of Responses</h3>
            <div id='cardColorsScroll'>
                <div id='cardsColors'>

                    <Ask
                        rgba={color1}
                        text={<input type='color' id="color1" defaultValue={color1} onChange={handleColor1Input} />}
                        text2='Avocados are a fruit, not a vegetable'
                    />
                    <Ask
                        rgba={color2}
                        text={<input type='color' id="color2" defaultValue={color2} onChange={handleColor2Input} />}
                        text2='The Eiffel Tower may be 15 cm taller during the summer'
                    />
                    <Ask
                        rgba={color3}
                        text={<input type='color' id="color3" defaultValue={color3} onChange={handleColor3Input} />}
                        text2='The Spice Girls were originally called Touch'
                    />
                    <Ask
                        rgba={color4}
                        text={<input type='color' id="color4" defaultValue={color4} onChange={handleColor4Input} />}
                        text2={`In 2014, there was a Tinder 'match' in Antarctica`}
                    />
                </div>

                <div id='colorTrueFalse'>
                    <Ask
                        rgba={trueColor}
                        text={<input type='color' id="color1" defaultValue={trueColor} onChange={handleTrueColorInput} />}
                        text2='TRUE'
                    />
                    <Ask
                        rgba={falseColor}
                        text={<input type='color' id="color2" defaultValue={falseColor} onChange={handleFalseColor4Input} />}
                        text2='FALSE'
                    />
                </div>
            </div>
        </div>

    )
}

export default SettingsPopUp