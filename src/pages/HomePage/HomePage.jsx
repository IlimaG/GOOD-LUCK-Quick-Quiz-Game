import { useContext, useState } from 'react';
import ClassicButton from '../../components/ClassicButton/ClassicButton';
import CompetitivePopUp from '../../components/CompetitivePopUp/CompetitivePopUp';
import HowToPlayPopUp from '../../components/HowToPlayPopUp/HowToPlayPopUp';
import Logo from '../../components/Logo/Logo';
import SettingsPopUp from '../../components/SettingsPopUp/SettingsPopUp';
import TrainingPopUp from '../../components/TrainingPopUp/TrainingPopUp';
import { QuestionsContex } from '../../contex/QuestionsContex';
import { SettingsContex } from '../../contex/SettingsContex';
import './HomePage.css';

const HomePage = () => {

    const { setShowSettings } = useContext(SettingsContex)
    const { setCompetitivePopUp, setTrainingPopUp, setHowToPlay } = useContext(QuestionsContex)

    const ButtonShowSettings = () => {
        setShowSettings('0')
    }

    const ButtonTraining = () => {
        setTrainingPopUp('0')
    }

    const Buttoncompetitive = () => {
        setCompetitivePopUp('0')
    }

    const ButtonHowToPlay = () => {
        setHowToPlay('0')
    }

    return (
        <div id='HomePage'>
            <SettingsPopUp />
            <TrainingPopUp />
            <CompetitivePopUp />
            <HowToPlayPopUp />
            
            <Logo logoid='logoHome' />

            <div id='btnHome'>
                <ClassicButton text='TRAINING' color='btnPink' onClickButton={ButtonTraining} />
                <ClassicButton text='COMPETITIVE' color='btnGreen' onClickButton={Buttoncompetitive} />
                <ClassicButton text='SETTINGS' color='btnYellow' onClickButton={ButtonShowSettings} />
                <ClassicButton text='HOW TO PLAY' color='btnBlue' onClickButton={ButtonHowToPlay} />
            </div>
        </div>
    )
}

export default HomePage