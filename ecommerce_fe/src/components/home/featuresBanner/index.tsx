import Image from 'next/image';
import Banner1 from '@/images/banners/banner1.webp';
import Banner2 from '@/images/banners/banner2.webp';
import Banner3 from '@/images/banners/banner3.webp';
import Banner4 from '@/images/banners/banner4.webp';

const EcoFeaturesBanner = () => {
  return (
    <div className="flex justify-center items-center mb-16  w-full">
      <div className="  flex  h-[30vw]  w-[85%] overflow-x-auto pb-4">
        <div className="h-full min-w-[450px] overflow-hidden mr-12 rounded-lg border-[1px] border-gray-200">
          <Image
            src={Banner1?.src}
            alt="banner1"
            width={450}
            height={500}
            priority
            quality={100}
            className="w-[450px] h-full object-cover"
          />
        </div>
        <div className=" min-w-[850px] h-full mr-8  overflow-hidden rounded-lg border-[1px] border-gray-200">
          <Image
            src={Banner2?.src}
            alt="banner1"
            width={850}
            height={500}
            priority
            quality={100}
            className="w-[850px] h-full object-cover"
          />
        </div>
        <div className=" min-w-[450px] h-full mr-4 overflow-hidden rounded-lg border-[1px] border-gray-200">
          <Image
            src={Banner3?.src}
            alt="banner1"
            width={450}
            height={500}
            priority
            quality={100}
            className="w-[450px] h-full object-cover"
          />
        </div>
        <div className=" min-w-[850px] h-full mr-1 overflow-hidden rounded-lg border-[1px] border-gray-200">
          <Image
            src={Banner4?.src}
            alt="banner1"
            width={850}
            height={500}
            priority
            quality={100}
            className="w-[850px] h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EcoFeaturesBanner;
