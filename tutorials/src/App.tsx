import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TutorialPost from "./components/TutorialPost";
import Header from "./components/Header";

import { HomePage } from "./pages/HomePage";
import { TutorialsPage } from "./pages/TutorialsPage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";


import {analytics} from './firebase'


import beginnersGuide from "./tutorials/beginners-guide.md";

const App: React.FC = () => {
  useEffect(() => {
    if(analytics) {
      console.log('Analytics started on sub domain.')
    }
  }, [])
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/tutorials" element={<TutorialsPage/>}/>        
        <Route path="/about" element={<AboutPage/>}/>      
        <Route path="/tutorials/beginners-guide" element={<TutorialPost title="Beginners Guide" content={beginnersGuide}/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;