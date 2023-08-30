import React from 'react';
import './Home.page.scss';
import { WelcomeSlider } from '../../components/WelcomeSlider/WelcomeSlider';
import { CardsSlider } from '../../components/CardsSlider/CardsSlider';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory';

const HomePage: React.FC = () => (
  <main className="home-page">
    <div className="container">
      <WelcomeSlider />
      <CardsSlider title="Brand new models" />
      <ShopByCategory />
      <CardsSlider title="Hot prices" />
    </div>
  </main>
);

export default HomePage;
