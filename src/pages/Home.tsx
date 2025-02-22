// src/pages/Home.tsx
import {Banner} from '../components/Banner';
import BannerSlider from '../components/BannerSlider';
// import PartnerSlider from '../components/PartnerSlider';

const Home = () => {
    return (
      <div className="min-h-screen flex flex-col items-center text-white mt-[72px]">
        <BannerSlider />
        <div className="grid grid-cols-3 gap-16 mt-[18px]">
          <Banner />
          <Banner />
          <Banner />
        </div>
        {/* <PartnerSlider /> */}
        <div>
        </div>
        <div className="text-center">
          <div className="mb-6">
          </div>
        </div>
      </div>
    );
  };

  export default Home;
