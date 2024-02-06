'use client';
import EcoFeaturesBanner from '@/components/home/featuresBanner';
import EcoForYourService from '@/components/home/forYourService';
import EcoOffers from '@/components/home/offers';
import EcoOffersBook from '@/components/home/offersBook';
import EcoSlider from '@/components/home/slider';
import EcoCommerceMain from '@/shell/components/main';

const Home = () => {
  return (
    <EcoCommerceMain>
      <main className="flex  flex-col  items-center bg-white rounded-tl-2xl rounded-tr-2xl shadow-xl ">
        <EcoSlider />
        <EcoOffers />
        <EcoFeaturesBanner />
        <EcoOffersBook />
        <EcoForYourService />
      </main>
    </EcoCommerceMain>
  );
};

Home.displayName = 'Home Page';

export default Home;
