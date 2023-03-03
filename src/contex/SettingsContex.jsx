import { createContext, useEffect, useState } from "react";
import audioPrincipal from '../assets/audio/principal.mp3'
const SettingsContex = createContext()

const SettingsContexProvider = ({ children }) => {

    const [showSettings, setShowSettings] = useState('-110%')

    const [muteMusic, setMuteMusic] = useState(true)
    const [audio, setAudio] = useState(new Audio(audioPrincipal))
    const [musicVolume, setMusicVolume] = useState(0.45)

    const [color1, setColor1] = useState('#FD3084')
    const [color2, setColor2] = useState('#5aae39')
    const [color3, setColor3] = useState('#fceb00')
    const [color4, setColor4] = useState('#009bde')
    const [trueColor, setTrueColor] = useState('#5aae39')
    const [falseColor, setFalseColor] = useState('#FD3084')

   const controlMusic = () => {
    setMuteMusic(!muteMusic)
   }

   const controlVolume = () => {
    audio.volume = musicVolume
   }

    const PlayPausedMusic = () => {

        if (muteMusic) {
            audio.play()
        } else {
            audio.pause()
        }
    }

    useEffect(() => {
        PlayPausedMusic()
    }, [muteMusic])

    useEffect(() => {
        controlVolume()
    }, [musicVolume])

    useEffect(() => {
        setMuteMusic(!muteMusic)
    }, [audio])

    return (
        <SettingsContex.Provider
            value={{
                showSettings, setShowSettings,
                color1, setColor1,
                color2, setColor2,
                color3, setColor3,
                color4, setColor4,
                trueColor, setTrueColor,
                falseColor, setFalseColor,
                muteMusic, setMuteMusic,
                controlMusic, setAudio,  
                musicVolume, setMusicVolume         
            }}>
            {children}
        </SettingsContex.Provider>
    )
}

export { SettingsContex, SettingsContexProvider }