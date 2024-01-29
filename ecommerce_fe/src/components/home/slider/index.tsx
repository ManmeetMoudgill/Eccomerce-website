"use client"

import { memo, useEffect, useState } from "react";
import Slide1 from "@/images/slide1.webp";
import Slide2 from "@/images/slide2.webp";
import Slide3 from "@/images/slide3.webp";
import Slide4 from "@/images/slide4.webp";
import Slide5 from "@/images/slide5.webp";
import Slide6 from "@/images/slide6.webp";
import Image from "next/image";



const slides = [
    {
        id: 1,
        img: Slide1,
        name: 'Mobile',
    }, {
        id: 2,
        img: Slide2,
        name: 'Laptop',
    }, {
        id: 3,
        img: Slide3,
        name: 'Shoes',
    }, {
        id: 4,
        img: Slide4,
        name: 'Shirts',
    }, {
        id: 5,
        img: Slide5,
        name: 'Trousers',
    }, {
        id: 6,
        img: Slide6,
        name: 'Watches',
    }
]


const EcoSliderComponent = () => {


    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const [sliderWithLoadingPercentage, setSliderWithLoadingPercentage] = useState<{
        slide: number,
        percentage: number,
    }>({
        slide: 0,
        percentage: 0,
    });







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




    return <div className="h-full w-full -z-0">
        <div className=" flex h-full overflow-x-hidden relative">
            <div  className="relative" style={{
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
                {
                    slides.map((slide, index) => {
                        return <div onClick={() => setCurrentSlide(index)} key={slide.id} className=" cursor-pointer flex flex-col  justify-center items-center mx-6">
                            <span  className="text-[#3c4043] flex justify-center items-center px-10 ">
                                {slide.name}
                            </span>

                            <div className=" hover:shadow-lg delay-75 transition-all min-h-[2px] w-[100%] bg-[#B3B3F5] my-2">
                            {
                                index===currentSlide ? (
                                    <div className="h-full bg-black rounded-full fill-bar"></div>
                                ):undefined
                            }
                            </div>
                        </div>
                    })
                }
</div>
<div className="absolute bottom-8 lg:hidden flex justify-center w-full items-center">

                        <div  key={slides[currentSlide].id} className="  cursor-pointer flex flex-col  justify-center items-center mx-6">
                            <span  className="text-[#3c4043] flex justify-center items-center px-10 ">
                                {slides[currentSlide].name}
                            </span>

                            <div className=" hover:shadow-lg delay-75 transition-all min-h-[2px] w-[100%] bg-[#B3B3F5] my-2">
                        
                                    <div className="h-full bg-black rounded-full fill-bar"></div>
                            </div>
                        </div>

        </div>
        </div>
    </div>;
};


EcoSliderComponent.displayName = "EcoSlider Component";

const EcoSlider = memo(EcoSliderComponent);

export default EcoSlider;
