import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage1 from './homePage1/HomePage1'
import HomePage2 from './homePage2/HomePage2.tsx'


function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<HomePage1/>}/>
            <Route path='/homePage2' element={<HomePage2/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
