import Footer from '../homePage1/Footer'
import Values from '../homePage1/Values'
import Header2 from './Header2'
import Banner from './Banner'
import Brands from './Brands'
import NewArrivals from './NewArrivals'
import Collection from './Collection'
import Social from './Social'
import Email from './Email'
import Product from './Product'

const HomePage2 = () => {

  const handleBtnClick = () => {
    window.history.back()
  }

  return (
    <>

      <button onClick={handleBtnClick}>back</button>
      <Header2/>
      <Banner/>
      <Brands/>
      <NewArrivals/>
      <Collection/>
      <Social/>
      <Values/>
      <Product/>
      <Email/>
      <Footer/>
    </>
  )
}

export default HomePage2