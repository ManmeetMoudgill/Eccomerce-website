'use client';

import { memo } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import Slider from 'react-slick';
import EcoTodaysOfferItem from './offerItem';
import { DateTime } from 'luxon';
import Offer1 from '@/images/todaysOffer/offer1.jpg';
import Offer2 from '@/images/todaysOffer/offer2.jpg';
import Offer3 from '@/images/todaysOffer/offer3.jpg';
import Offer4 from '@/images/todaysOffer/offer4.jpg';
import Offer5 from '@/images/todaysOffer/offer5.jpg';
import Offer6 from '@/images/todaysOffer/offer6.jpg';
import Offer7 from '@/images/todaysOffer/offer7.jpg';
import Offer8 from '@/images/todaysOffer/offer8.jpg';
import Offer9 from '@/images/todaysOffer/offer9.jpg';
import Offer10 from '@/images/todaysOffer/offer10.jpg';

export const OfferItemsArr = [
  {
    _id: '1',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer1?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
    isAvailableOnlyOnline: true,
    isMostAppreciated: true,
  },
  {
    _id: '2',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer2?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
  },
  {
    _id: '3',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer3?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
    isAvailableOnlyOnline: true,
    isMostAppreciated: true,
  },
  {
    _id: '4',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer4?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
  },
  {
    _id: '5',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer5?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
    isAvailableOnlyOnline: true,
  },
  {
    _id: '6',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer6?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
    isMostAppreciated: true,
  },
  {
    _id: '7',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer7?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
  },
  {
    _id: '8',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer8?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
  },
  {
    _id: '9',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer9?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
  },
  {
    _id: '10',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer10?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
  },
];

const EcoTodaysOfferComponent = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          arrow: true,
          dots: false,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrow: true,
          dots: false,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrow: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrow: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col justify-center items-center mt-1 w-full mb-4">
      <div className="w-[85%] flex flex-col ">
        <div className="flex flex-col">
          <h2 className="text-5xl mb-4 font-bold text-[#3C4043]">Solo per oggi!</h2>
          <span className="text-sm text-[#8B7575] flex items-center">
            <p>Maggiori informazioni sul calcolo del prezzo</p>
            <IoInformationCircleOutline className="text-base text-[#8B7575] font-bold ml-2" />
          </span>
        </div>
      </div>
      <div className="mt-10 w-[85%]">
        <Slider {...settings}>
          {OfferItemsArr?.map((item) => {
            return <EcoTodaysOfferItem {...item} key={item?._id} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

const EcoTodaysOffer = memo(EcoTodaysOfferComponent);
export default EcoTodaysOffer;
