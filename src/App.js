import { Route, Routes } from 'react-router-dom';
import { PointsContexProvider } from './contex/PointsContex';
import { QuestionsContexProvider } from './contex/QuestionsContex';
import { SettingsContexProvider } from './contex/SettingsContex';

import './App.css';

import HowToPlayPopUp from './components/HowToPlayPopUp/HowToPlayPopUp';
import SettingsPopUp from './components/SettingsPopUp/SettingsPopUp';
import SoundMusic from './components/SoundMusic/SoundMusic';
import ClassicGame from './pages/ClassicGame/ClassicGame';
import Classification from './pages/Classification/Classification';
import CustomGame from './pages/CustomGame/CustomGame';
import CustomizeGame from './pages/CustomizeGame/CustomizeGame';
import HomePage from './pages/HomePage/HomePage';
import TrainingPopUp from './components/TrainingPopUp/TrainingPopUp';
import CompetitivePopUp from './components/CompetitivePopUp/CompetitivePopUp';
import { CustomizeGameContex, CustomizeGameContexProvider } from './contex/CustomizeGameContex';
import ClassicGamePlayers from './pages/ClassicGamePlayers/ClassicGamePlayers';
import ClassificationCompetitive from './pages/ClassificationCompetitive/Classification';
import ClassicGameCompetitve from './pages/ClassicGameCompetitve/ClassicGameCompetitve';
import CustomizeGameCompetitive from './pages/CustomizeGameCompetitive/CustomizeGameCompetitive';
import CustomGameCompetitive from './pages/CustomGameCompetitive/CustomGameCompetitive';

function App() {

  return (
    <div className="App">
      <PointsContexProvider>
        <QuestionsContexProvider>
          <SettingsContexProvider>
            <CustomizeGameContexProvider>

              <SoundMusic />

              <Routes>
                <Route path='/' element={<HomePage />} />

                <Route path='/classicGame' element={<ClassicGame />} />
                <Route path='/custom' element={<CustomizeGame />} />
                <Route path='/customGame' element={<CustomGame />} />

                <Route path='/classicGamePlayers' element={<ClassicGamePlayers />} />
                <Route path='/classicGameCopetitive' element={<ClassicGameCompetitve />} />
                <Route path='/customizeGameCompetitive' element={<CustomizeGameCompetitive />} />
                <Route path='/customGameCompetitive' element={<CustomGameCompetitive />} />

                <Route path='/classification' element={<Classification />} />
                <Route path='/classificationCompetitive' element={<ClassificationCompetitive />} />
              </Routes>

            </CustomizeGameContexProvider>
          </SettingsContexProvider>
        </QuestionsContexProvider>
      </PointsContexProvider>
    </div >
  );
}

export default App;
