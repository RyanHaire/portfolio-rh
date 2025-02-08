import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TutorialPost from "./components/TutorialPost";
import Header from "./components/Header";

import { HomePage } from "./pages/HomePage";
import { TutorialsPage } from "./pages/TutorialsPage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";


import {analytics} from './firebase';


import beginnersGuide from "./tutorials/beginners-guide.md";
import introToWebDev from "./tutorials/intro-to-web-dev.md";
import toolSetupGuide from "./tutorials/tool-setup-guide.md";

const App: React.FC = () => {
  useEffect(() => {
    if(analytics) {
      console.log('Analytics started on sub domain.');
    }
  }, []);
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/tutorials" element={<TutorialsPage/>}/>        
        <Route path="/about" element={<AboutPage/>}/>      
        <Route path="/tutorials/beginners-guide" element={<TutorialPost title="" content={beginnersGuide}/>}/>
        <Route path="/tutorials/intro-to-web-development" element={<TutorialPost title="" content={introToWebDev}/>}/>
        <Route path="/tutorials/tool-setup-guide" element={<TutorialPost title="" content={toolSetupGuide}/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;