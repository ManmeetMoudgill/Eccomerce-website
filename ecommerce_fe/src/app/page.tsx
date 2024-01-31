import EcoOffers from '@/components/home/offers';
import EcoSlider from '@/components/home/slider';
const Home = () => {
  return (
    <main className="flex  flex-col items-center">
      <EcoSlider />
      <EcoOffers />
    </main>
  );
};

Home.displayName = 'Home Page';

export default Home;
