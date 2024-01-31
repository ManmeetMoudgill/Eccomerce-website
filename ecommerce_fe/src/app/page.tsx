'use client';
import EcoFeaturesBanner from '@/components/home/featuresBanner';
import EcoOffers from '@/components/home/offers';
import EcoSlider from '@/components/home/slider';

import { Provider as EventBusProvider } from '@/hooks/use-bus';
const Home = () => {
  return (
    <EventBusProvider>
      <main className="flex  flex-col  items-center bg-white rounded-tl-2xl rounded-tr-2xl shadow-xl ">
        <EcoSlider />
        <EcoOffers />
        <EcoFeaturesBanner />
      </main>
    </EventBusProvider>
  );
};

Home.displayName = 'Home Page';

export default Home;
