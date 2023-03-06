import { useContext, useEffect, useState } from 'react';
import { SettingsContex } from '../../contex/SettingsContex';
import iconAudio from '../../assets/img/icons-audio.png'
import iconMuted from '../../assets/img/icons-mute.png'
import './SoundMusic.css'

const SoundMusic = () => {

    const { muteMusic, controlMusic } = useContext(SettingsContex)

    const [audioImg, setAudioImg] = useState(iconMuted)

    useEffect(() => {
        if (muteMusic) {
            setAudioImg(iconAudio)
        } else {
            setAudioImg(iconMuted)
        }
    },[muteMusic])
        
    return (
        <button id='sound-MuteMusic' onClick={() => controlMusic()}>
            <img src={audioImg} />
        </button>
    )
}

export default SoundMusic