import { memo } from 'react';
import { EcoOfferItemProps } from '../../offers/offerItem';
import Image from 'next/image';
import { IoIosStar, IoMdCart } from 'react-icons/io';
interface EcoTodaysOfferItemProps extends EcoOfferItemProps {
  isAvailableOnlyOnline?: boolean;
  isMostAppreciated?: boolean;
}
const EcoTodaysOfferItemComponent = ({
  imgUrl = '',
  name = '',
  isAvailableOnlyOnline = false,
  regularPrice = 0,
  isMostAppreciated = false,
  offerdPrice = 0,
}: EcoTodaysOfferItemProps) => {
  return (
    <div
      className="  border-[1px] border-gray-200 group rounded-lg shadow-sm hover:shadow-xl transition delay-75 ease-in-out cursor-pointer"
      style={{
        margin: '0 0.5vw',
      }}
    >
      <div className="flex flex-col py-4">
        <p className="uppercase text-[#FF9933]  text-xs min-h-[1rem] text-center">
          {isAvailableOnlyOnline ? 'Solo Online' : ''}
        </p>

        <div className="flex justify-center items-center">
          <Image
            alt={name}
            src={imgUrl}
            width={200}
            height={200}
            priority
            quality={100}
            className="w-[85%] h-auto object-cover"
          />
        </div>

        {/* PIU APPREZZATO CONTAINER */}
        <div className="flex flex-col pl-4 pr-4">
          <div className="flex  mt-4 items-center min-h-[1.5rem] ">
            {isMostAppreciated ? (
              <>
                <span className="text-xs text-black font-semibold">PIÙ APPREZZATO</span>
                <span className="flex items-center justify-center ml-1">
                  <IoIosStar className="text-[#FF9933] text-xs" />
                </span>
              </>
            ) : undefined}
          </div>

          {/* name container */}
          <div className="flex items-center text-xs my-1">
            <span>{name}</span>
          </div>

          {/* price container */}
          <div className="flex items-center mt-2">
            <div className="w-14 h-6 rounded-2xl bg-[#FF9933] text-white text-sm flex justify-center items-center">
              <span>Ora</span>
            </div>
            <div className="flex items-center ml-2 text-base font-bold">
              <span className="">€&nbsp;</span>
              <span className="">{offerdPrice}</span>
              <span className="">,00</span>
            </div>
          </div>

          {/* regular price container */}
          <div className="flex items-center text-xs mt-1">
            <span>Prezzo consigliato </span>
            <span className="ml-1"> {regularPrice}</span>
          </div>

          {/* ADD TO CART CONATINER VISIBLE ON HOVER */}
          <div className={`min-h-14 flex items-center`}>
            <div
              className={`hidden w-full  group-hover:flex transition-all delay-75 h-full ease-in-out justify-end items-center`}
            >
              <div className="flex justify-center items-center w-12 h-8 rounded-2xl shadow-xl">
                <IoMdCart className="text-xl text-[#FF9933] font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EcoTodaysOfferItem = memo(EcoTodaysOfferItemComponent);

export default EcoTodaysOfferItem;
