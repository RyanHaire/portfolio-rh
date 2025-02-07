import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PortfolioPage from './pages/PortfolioPage'
import { Header } from './components/Header'
function App() {

  return (
    <>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/portfolio" element={<PortfolioPage/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
