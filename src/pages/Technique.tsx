import React from 'react';
import Footer from '../components/Footer'
import Values from '../components/Values'
import Header2 from '../components/Header2'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import NewArrivals from '../components/NewArrivals'
import Collection from '../components/Collection'
import Social from '../components/Social'
import Email from '../components/Email'
import Product from '../components/Product'

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