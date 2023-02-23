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

function App() {

  return (
    <div className="App">
      <PointsContexProvider>
        <QuestionsContexProvider>
          <SettingsContexProvider>

            <SettingsPopUp />
            <SoundMusic />
            <TrainingPopUp />
            <CompetitivePopUp />
            <HowToPlayPopUp />
            
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/custom' element={<CustomizeGame />} />
              <Route path='/customGame' element={<CustomGame />} />
              <Route path='/classicGame' element={<ClassicGame />} />
              <Route path='/classification' element={<Classification />} />
            </Routes>

          </SettingsContexProvider>
        </QuestionsContexProvider>
      </PointsContexProvider>
    </div >
  );
}

export default App;
