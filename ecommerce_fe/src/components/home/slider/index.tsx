'use client';

import { memo, useEffect, useState } from 'react';
import Slide1 from '@/images/slide1.webp';
import Slide2 from '@/images/slide2.webp';
import Slide3 from '@/images/slide3.webp';
import Slide4 from '@/images/slide4.webp';
import Slide5 from '@/images/slide5.webp';
import Slide6 from '@/images/slide6.webp';

import SmSlide1 from '@/images/smallDevices/slide1.webp';
import SmSlide2 from '@/images/smallDevices/slide2.webp';
import SmSlide3 from '@/images/smallDevices/slide3.webp';
import SmSlide4 from '@/images/smallDevices/slide4.webp';
import SmSlide5 from '@/images/smallDevices/slide5.webp';
import SmSlide6 from '@/images/smallDevices/slide6.webp';

import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

const smallDevicesSlides = [
  {
    id: 1,
    img: SmSlide1,
    name: 'Mobile',
  },
  {
    id: 2,
    img: SmSlide2,
    name: 'Laptop',
  },
  {
    id: 3,
    img: SmSlide3,
    name: 'Shoes',
  },
  {
    id: 4,
    img: SmSlide4,
    name: 'Shirts',
  },
  {
    id: 5,
    img: SmSlide5,
    name: 'Trousers',
  },
  {
    id: 6,
    img: SmSlide6,
    name: 'Watches',
  },
];

const slides = [
  {
    id: 1,
    img: Slide1,
    name: 'Mobile',
  },
  {
    id: 2,
    img: Slide2,
    name: 'Laptop',
  },
  {
    id: 3,
    img: Slide3,
    name: 'Shoes',
  },
  {
    id: 4,
    img: Slide4,
    name: 'Shirts',
  },
  {
    id: 5,
    img: Slide5,
    name: 'Trousers',
  },
  {
    id: 6,
    img: Slide6,
    name: 'Watches',
  },
];

const EcoSliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    },
    onSwipedRight: () => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    },
  });

  return (
    <div className="h-full w-full ">
      <div className=" hidden md:flex h-full overflow-x-hidden relative">
        <div
          className="relative"
          style={{
            transition: 'all 0.5s ease-in-out',
          }}
        >
          <Image
            src={slides[currentSlide].img}
            alt=""
            className="w-full min-w-[100vw] max-h-screen h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute bottom-8 lg:flex w-full justify-center  hidden">
          {slides.map((slide, index) => {
            return (
              <div
                onClick={() => setCurrentSlide(index)}
                key={slide.id}
                className=" cursor-pointer flex flex-col  justify-center items-center mx-6"
              >
                <span className="text-[#3c4043] flex justify-center items-center px-10 ">
                  {slide.name}
                </span>

                <div className=" hover:shadow-lg delay-75 transition-all min-h-[2px] w-[100%] bg-[#B3B3F5] my-2">
                  {index === currentSlide ? (
                    <div className="h-full bg-black rounded-full fill-bar"></div>
                  ) : undefined}
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-8 lg:hidden flex justify-center w-full items-center">
          <div
            key={slides[currentSlide].id}
            className="  cursor-pointer flex flex-col  justify-center items-center mx-6"
          >
            <span className="text-[#3c4043] flex justify-center items-center px-10 ">
              {slides[currentSlide].name}
            </span>

            <div className=" hover:shadow-lg delay-75 transition-all min-h-[2px] w-[100%] bg-[#B3B3F5] my-2">
              <div className="h-full bg-black rounded-full fill-bar"></div>
            </div>
          </div>
        </div>
      </div>

      {/* SMALL DEVICES SLIDER */}
      <div className="md:hidden  h-screen z-[-99] relative overflow-hidden">
        <div
          {...handlers}
          style={{
            backgroundImage: `url(${smallDevicesSlides[currentSlide]?.img?.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 1%',
            backgroundSize: '100%',
            width: '100%',
            backgroundOrigin: 'content-box',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

EcoSliderComponent.displayName = 'EcoSlider Component';

const EcoSlider = memo(EcoSliderComponent);

export default EcoSlider;
