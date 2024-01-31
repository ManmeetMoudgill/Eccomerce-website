'use client';
import EcoOffers from '@/components/home/offers';
import EcoSlider from '@/components/home/slider';
import { Provider as EventBusProvider } from '@/hooks/use-bus';
const Home = () => {
  return (
    <EventBusProvider>
      <main className="flex  flex-col items-center">
        <EcoSlider />
        <EcoOffers />
      </main>
    </EventBusProvider>
  );
};

Home.displayName = 'Home Page';

export default Home;
