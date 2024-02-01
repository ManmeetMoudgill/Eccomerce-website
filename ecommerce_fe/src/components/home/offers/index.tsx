'use client';
import { memo } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import Slider from 'react-slick';
import EcoOfferItem, { EcoOfferItemProps } from './offerItem';
import { DateTime } from 'luxon';
import Offer1 from '@/images/offers/offer1.jpg';
import Offer2 from '@/images/offers/offer2.jpg';
import Offer3 from '@/images/offers/offer3.jpg';
import Offer4 from '@/images/offers/offer4.jpg';
import Offer5 from '@/images/offers/offer5.jpg';
import Offer6 from '@/images/offers/offer6.jpg';
import Offer7 from '@/images/offers/offer7.jpg';
import Offer8 from '@/images/offers/offer8.jpg';
import Offer9 from '@/images/offers/offer9.jpg';
import Offer10 from '@/images/offers/offer10.jpg';
import EcoTodaysOffer from '../todaysOffer';

export const OfferItems: Array<EcoOfferItemProps> = [
  {
    _id: '1',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer1?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
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
  },
  {
    _id: '6',
    name: 'Apple MacBook Air 13" M1 8-core CPU 7-core GPU 256GB Grigio Siderale',
    offerdPrice: 1.99,
    regularPrice: 2.99,
    imgUrl: Offer6?.src,
    offerExpirationDate: DateTime.now().plus({ days: 10 }).toISO(),
    link: 'https://www.google.com',
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

const EcoOffersComponent = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrow: true,
          dots: false,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrow: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrow: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className="b p-4 flex justify-center flex-col items-center w-full">
      <div className="w-[88%]  my-16">
        {/* UPPER CONTAINER */}
        <div className="flex flex-col">
          <h2 className="text-5xl mb-4 font-bold text-[#3C4043]">Da non perdere!</h2>
          <span className="text-base mb-2 font-semibold">
            <a className="underline font-bold">Clicca qui</a> per scoprire tutti i prodotti
          </span>
          <span className="text-sm text-[#8B7575] flex items-center">
            <p>Maggiori informazioni sul calcolo del prezzo</p>
            <IoInformationCircleOutline className="text-base text-[#8B7575] font-bold ml-2" />
          </span>
        </div>
        <div className=" mt-10 pt-2">
          <Slider {...settings}>
            {OfferItems?.map((item) => {
              return <EcoOfferItem key={item?._id} {...item} />;
            })}
          </Slider>
        </div>
      </div>
      <EcoTodaysOffer />
    </div>
  );
};

EcoOffersComponent.displayName = 'EcOffers Component';

const EcoOffers = memo(EcoOffersComponent);
export default EcoOffers;
