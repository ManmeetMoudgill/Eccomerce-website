import { memo } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

const EcoSmallDevicesHeaderComponent = () => {
  return (
    <div className="flex flex-col w-full  p-5">
      <div className=" flex items-center">
        <div className=" justify-center items-center">
          <RxHamburgerMenu className="text-3xl text-black " />
        </div>
        <div className=" flex-1 flex justify-center items-center">
          <div className="w-14 mx-2 cursor-pointer border-[1px] shadow-xl h-12  flex justify-center items-center bg-white rounded-[2rem]">
            <span className="text-[#FF9933] text-xl font-bold">M</span>
          </div>
          <div className="mx-2 flex">
            <h2 className="text-black font-bold tracking-normal   text-xl font-serif">
              Moudgill Eccomerce
            </h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full relative flex mt-7">
          <input
            type="text"
            className=" p-[10px] lg:p-3 bg-white outline-none border-[1px] shadow-lg rounded-3xl w-full"
          />
          <span
            className={`absolute right-0 rounded-r-3xl flex justify-center items-center px-2  text-center  h-full`}
          >
            <IoMdSearch className={`text-[#4385F4] font-bold text-3xl`} />
          </span>
        </div>
      </div>
    </div>
  );
};

EcoSmallDevicesHeaderComponent.displayName = 'EcoSmallDevicesHeaderComponent';

const EcoSmallDevicesHeader = memo(EcoSmallDevicesHeaderComponent);

export default EcoSmallDevicesHeader;
