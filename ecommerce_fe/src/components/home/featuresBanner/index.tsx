import Banner1 from '@/images/banners/banner1.webp';
import Banner2 from '@/images/banners/banner2.webp';
import Banner3 from '@/images/banners/banner3.webp';
import Banner4 from '@/images/banners/banner4.webp';
import Banner5 from '@/images/banners/banner5.webp';
import SmallDeviceBanner1 from '@/images/banners/smallDevcies/banner1.jpg';
import SmallDeviceBanner2 from '@/images/banners/smallDevcies/banner2.jpg';
import SmallDeviceBanner3 from '@/images/banners/smallDevcies/banner3.jpg';
import SmallDeviceBanner4 from '@/images/banners/smallDevcies/banner4.jpg';
import SmallDeviceBanner5 from '@/images/banners/smallDevcies/banner5.jpg';

const EcoFeaturesBanner = () => {
  return (
    <div className="my-12 overflow-x-scroll  w-full pl-[7vw]  ">
      <div className="  flex  ml-2 pb-4 min-w-max">
        <div className="h-[85vw] sm:h-[80vw] lg:h-[30vw] relative mr-8">
          <img
            src={Banner1?.src}
            alt="banner1"
            className="min-w-full w-full  hidden lg:block rounded-lg shadow-md h-full object-cover"
          />
          <img
            src={SmallDeviceBanner1?.src}
            alt="banner1"
            className="min-w-full w-full  block lg:hidden rounded-lg shadow-md h-full object-cover"
          />
        </div>
        <div className="h-[85vw] sm:h-[80vw] lg:h-[30vw]  relative mr-8">
          <img
            src={Banner2?.src}
            alt="banner2"
            className="min-w-full w-full  hidden lg:block rounded-lg shadow-md  h-full object-cover"
          />
          <img
            src={SmallDeviceBanner2?.src}
            alt="banner1"
            className="min-w-full w-full  block lg:hidden rounded-lg shadow-md h-full object-cover"
          />
        </div>
        <div className="h-[85vw] sm:h-[80vw] lg:h-[30vw] relative mr-8">
          <img
            src={Banner3?.src}
            alt="banner3"
            className="min-w-full w-full   rounded-lg hidden lg:block shadow-md  h-full object-cover"
          />
          <img
            src={SmallDeviceBanner3?.src}
            alt="banner1"
            className="min-w-full w-full  block lg:hidden rounded-lg shadow-md h-full object-cover"
          />
        </div>
        <div className="h-[85vw] sm:h-[80vw] lg:h-[30vw]  relative mr-8">
          <img
            src={Banner4?.src}
            alt="banner4"
            className="min-w-full w-full  rounded-lg hidden lg:block shadow-md h-full object-cover"
          />
          <img
            src={SmallDeviceBanner4?.src}
            alt="banner1"
            className="min-w-full w-full  block lg:hidden rounded-lg shadow-md h-full object-cover"
          />
        </div>
        <div className="h-[85vw] sm:h-[80vw] lg:h-[30vw]  relative mr-8">
          <img
            src={Banner5?.src}
            alt="banner5"
            className="min-w-full w-full rounded-md shaodw-md hidden lg:block  h-full object-cover"
          />
          <img
            src={SmallDeviceBanner5?.src}
            alt="banner1"
            className="min-w-full w-full   rounded-lg block lg:hidden shadow-md h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EcoFeaturesBanner;
