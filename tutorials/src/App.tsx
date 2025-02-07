import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tutorial from "./components/Tutorial";
import tutorial1 from "./tutorials/tutorial-1.md";
import Header from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { TutorialsPage } from "./pages/TutorialsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/tutorials" element={<TutorialsPage/>}/>        
        <Route path="/tutorials/tutorial-1" element={<Tutorial title="Intro" content={tutorial1}/>}>  
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;