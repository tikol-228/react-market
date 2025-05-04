import React from 'react';
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

interface HomePage2Props {
  onBuy: (item: any) => void;
}

const HomePage2: React.FC<HomePage2Props> = ({ onBuy }) => {
  const handleBtnClick = () => {
    window.history.back()
  }

  const handleAddToCart = (item: any) => {
    console.log('Item added to cart:', item);
  }
  return (
    <>
      <button onClick={handleBtnClick}>back</button>
      <Header2 onAddToCart={handleAddToCart} />
      <Banner />
      <Brands />
      <NewArrivals onBuy={onBuy} />
      <Collection />
      <Social />
      <Values />
      <Product />
      <Email />
      <Footer />
    </>
  )
}

export default HomePage2