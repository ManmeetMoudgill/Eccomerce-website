/* eslint-disable no-mixed-operators */
'use client';
import { memo, useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import Image from 'next/image';

export interface EcoOfferItemProps {
  _id?: string;
  name?: string;
  offerdPrice?: number;
  regularPrice?: number;
  imgUrl?: string;
  offerExpirationDate?: string;
  link?: string;
}

const EcoOfferItemComponent = ({
  offerExpirationDate = DateTime.now().toISO(),
  name = '',
  imgUrl = '',
  offerdPrice = 0,
  regularPrice = 0,
}: EcoOfferItemProps) => {
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useMemo(() => {
    const updateTimer = () => {
      const now = DateTime.now();
      const diff = DateTime.fromISO(offerExpirationDate).diff(now, [
        'days',
        'hours',
        'minutes',
        'seconds',
      ]);
      setTimeRemaining({
        days: diff.days,
        hours: diff.hours,
        minutes: diff.minutes,
        seconds: Math.floor(diff.seconds),
      });
    };

    updateTimer();
  }, [offerExpirationDate]);

  return (
    <>
      <div
        className=" p-3 flex-col hover:scale-105 transition-all transform delay-75 ease-in-out cursor-pointer"
        style={{
          margin: '0 2.2vw',
        }}
      >
        <div className="flex flex-col px-4 justify-center mb-3">
          <span className="text-sm ">
            <p className="font-bold text-black inline">Scade tra</p>{' '}
            <p className="text-[#FF9933] inline font-semibold">
              {timeRemaining?.days}d {timeRemaining.hours}h {timeRemaining.minutes}m
            </p>
          </span>
          <div
            className={` w-[50%] h-[5px] bg-[#FF9933] rounded-md mt-1 mb-4 flex fle justify-end items-center`}
          >
            <div className="w-4 h-4 bg-[#FF9933] rounded-full"></div>
          </div>
        </div>
        {/* image container */}
        <div className="flex justify-center items-center bg-white shadow-xl">
          <Image
            src={imgUrl}
            alt={name}
            width={500}
            height={500}
            priority
            className="w-[85%] h-auto object-cover"
          />
        </div>
        <div className=" mt-2 p-2">
          <div className="text-base overflow-hidden my-1">{name}</div>
          <div className="flex flex-col mt-4">
            {/* upper container */}
            <div className="flex items-center">
              <div className="w-14 h-6 rounded-2xl bg-[#FF9933] text-white text-sm flex justify-center items-center">
                <span>Ora</span>
              </div>
              <div className="flex items-center ml-2 text-base font-bold">
                <span className="">€&nbsp;</span>
                <span className="">{offerdPrice}</span>
                <span className="">,00</span>
              </div>
            </div>
            {/* lower container */}
            <div className="flex items-center text-xs mt-2">
              <span>Prezzo consigliato</span>
              <span className="ml-1"> {regularPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EcoOfferItemComponent.displayName = 'EcoOfferItem Component';

const EcoOfferItem = memo(EcoOfferItemComponent);

export default EcoOfferItem;
