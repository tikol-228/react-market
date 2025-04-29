import './App.css'
import Arrivals from './components/homePage1/Arrivals'
import Email from './components/homePage1/Email'
import Footer from './components/homePage1/Footer'
import Header from './components/homePage1/Header'
import SubHeader from './components/homePage1/SubHeader'
import Values from './components/homePage1/Values'
import Sale from './components/homePage1/Sale'
import Articles from './components/homePage1/Articles'
import Categories from './components/homePage1/Categories'
import FlyMenu from './components/homePage1/FlyMenu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={''}/>
          <Header/>
          <FlyMenu/>
          <SubHeader/>
          <Values/>
          <Categories/>
          <Arrivals/>
          <Sale/>
          <Articles/>
          <Email/>
          <Footer/>
        </Routes>
      </Router>
    </>
  )
}

export default App
