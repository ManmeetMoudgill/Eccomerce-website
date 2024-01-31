'use client';

import { memo } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';

const EcoTodaysOfferComponent = () => {
  return (
    <div className="flex justify-center items-center mt-5 w-full">
      <div className="w-[85%] border-2 flex flex-col border-green-900">
        <div className="flex flex-col">
          <h2 className="text-5xl mb-4 font-bold text-[#3C4043]">Solo per oggi!</h2>
          <span className="text-sm text-[#8B7575] flex items-center">
            <p>Maggiori informazioni sul calcolo del prezzo</p>
            <IoInformationCircleOutline className="text-base text-[#8B7575] font-bold ml-2" />
          </span>
        </div>
      </div>
    </div>
  );
};

const EcoTodaysOffer = memo(EcoTodaysOfferComponent);
export default EcoTodaysOffer;
