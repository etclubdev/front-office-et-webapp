import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// import { HomePage } from './pages/HomePage';
import  TetCountDownTimerPage  from './pages/EventPages/TetCountDownTimerPage/TetCountDownTimerPage';
import IntroductionPage from './pages/IntroductionPage';

import { DynamicBlur } from './components/DynamicBlur';
import { DynamicStars } from './components/DynamicStars';

import './App.css';

function App() {  
  return (  
    <Router>  
      <div className="root-container">  
        <DynamicStars parentClassName="root-container"/>
        <DynamicBlur parentClassName="root-container"/>
        <Routes>  
          <Route path="/" element={<TetCountDownTimerPage />} /> 
          <Route path="/introduction" element={<IntroductionPage />} /> 
        </Routes>  
      </div>  
    </Router>  
  );  
}  

export default App;