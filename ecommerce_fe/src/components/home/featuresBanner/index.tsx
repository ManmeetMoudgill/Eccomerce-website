import Banner1 from '@/images/banners/banner1.webp';
import Banner2 from '@/images/banners/banner2.webp';
import Banner3 from '@/images/banners/banner3.webp';
import Banner4 from '@/images/banners/banner4.webp';
import Banner5 from '@/images/banners/banner5.webp';

const EcoFeaturesBanner = () => {
  return (
    <div className="my-12 overflow-x-scroll  w-full pl-[7vw]  ">
      <div className="  flex  ml-2 pb-4 min-w-max">
        <div className="h-[30vw] relative mr-8">
          <img
            src={Banner1?.src}
            alt="banner1"
            className="min-w-full w-full  rounded-lg shadow-md h-full object-cover"
          />
        </div>
        <div className="h-[30vw]  relative mr-8">
          <img
            src={Banner2?.src}
            alt="banner2"
            className="min-w-full w-full rounded-lg shadow-md  h-full object-cover"
          />
        </div>
        <div className="h-[30vw] relative mr-8">
          <img
            src={Banner3?.src}
            alt="banner3"
            className="min-w-full w-full rounded-lg shadow-md  h-full object-cover"
          />
        </div>
        <div className="h-[30vw]  relative mr-8">
          <img
            src={Banner4?.src}
            alt="banner4"
            className="min-w-full w-full  rounded-lg shadow-md h-full object-cover"
          />
        </div>
        <div className="h-[30vw]  relative mr-8">
          <img
            src={Banner5?.src}
            alt="banner5"
            className="min-w-full w-full rounded-md shaodw-md  h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EcoFeaturesBanner;
