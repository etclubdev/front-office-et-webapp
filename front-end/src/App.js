import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// import { HomePage } from './pages/HomePage';
import  TetCountDownTimerPage  from './pages/EventPages/TetCountDownTimerPage/TetCountDownTimerPage';
import { CollaboratorPage } from './pages/CollaboratorPage';

import { createStar } from './utils/createStarUtil';

import './App.css';

function App() {  
  useEffect(() => {  
    for (let i = 0; i < 100; i++) {  
        createStar('root-container');  
    }  
  }, []); 
  return (  
    <Router>  
      <div className="root-container">  
        <Routes>  
          <Route path="/" element={<TetCountDownTimerPage />} /> 
          <Route path="/collaborators" element={<CollaboratorPage />} /> 
        </Routes>  
      </div>  
    </Router>  
  );  
}  

export default App;