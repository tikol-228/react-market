import Header from '../components/Header';
import FlyMenu from '../components/FlyMenu';
import SubHeader from '../components/SubHeader';
import Values from '../components/Values';
import Categories from '../components/Categories';
import Arrivals from '../components/Arrivals';
import Sale from '../components/Sale';
import Articles from '../components/Articles';
import { useEffect } from 'react';
import Email from '../components/Email';
import Footer from '../components/Footer';

const Furniture = () => {

  return (
    <>
      <FlyMenu />
      <SubHeader />
      <Categories />
      <Arrivals />
      <Values />
      <Sale />
      <Articles />
      <Email />
    </>
  );
};

export default Furniture;