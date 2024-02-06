'use client';
import { useClickOutside } from '@/hooks/use-click-outside';
import { useEventsStore } from '@/store/events';
import { memo, useRef, useState } from 'react';
import { BiCategory } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { IoPricetagOutline } from 'react-icons/io5';
import { MdEuro, MdOutlineEuro } from 'react-icons/md';
import { CATEGORIES } from '../header';
import Image from 'next/image';

export enum FILTERS {
  CATEGORY = 'Category',
  BRAND = 'Brand',
  PRICE = 'Prezzo',
}

const BRANDS_LIST = [
  {
    id: 1,
    name: 'Apple',
  },
  {
    id: 2,
    name: 'Samsung',
  },
  {
    id: 3,
    name: 'OnePlus',
  },
  {
    id: 4,
    name: 'Xiaomi',
  },
  {
    id: 5,
    name: 'Oppo',
  },
  {
    id: 6,
    name: 'Vivo',
  },
  {
    id: 7,
    name: 'Realme',
  },
  {
    id: 8,
    name: 'Nokia',
  },
  {
    id: 9,
    name: 'Motorola',
  },
  {
    id: 10,
    name: 'Lenovo',
  },
];

const FILTERS_LIST = [
  {
    id: 1,
    title: 'Category',
    logo: (
      <div className="rounded-3xl px-3 py-2 hover:shadow-xl  cursor-pointer transition-all delay-100 hover:bg-gray-200 ease-in-out">
        <BiCategory className="text-2xl " />
      </div>
    ),
  },
  {
    id: 2,
    title: 'Brand',
    logo: (
      <div className="rounded-3xl px-3 py-2 hover:shadow-xl  cursor-pointer transition-all delay-100 hover:bg-gray-200 ease-in-out">
        <IoPricetagOutline className="text-2xl" />
      </div>
    ),
  },
  {
    id: 3,
    title: 'Prezzo',
    logo: (
      <div className="rounded-3xl px-3 py-2 hover:shadow-xl  cursor-pointer transition-all delay-100 hover:bg-gray-200 ease-in-out">
        <MdEuro className="text-2xl" />
      </div>
    ),
  },
  {
    id: 4,
    title: 'Tutti i filtri',
    logo: (
      <div className="rounded-3xl px-3 py-2 hover:shadow-xl  cursor-pointer transition-all delay-100 hover:bg-gray-200 ease-in-out">
        <CiSettings className="text-2xl" />
      </div>
    ),
  },
];

const EcoFiltersComoponent = () => {
  const { setIsFiltersOpen, isFiltersOpen } = useEventsStore();

  const allFiltersRef = useRef<HTMLDivElement>(null);

  useClickOutside(() => {
    setIsFiltersOpen(false);
  }, allFiltersRef);

  const [filterOpenWithName, setFilterOpenWithName] = useState<{
    isOpen: boolean;
    name: string;
  }>({
    isOpen: false,
    name: '',
  });

  return (
    <div
      className={`fixed left-0 top-0  h-screen w-[7rem] bg-gray-100 flex flex-col items-center ${isFiltersOpen ? 'z-[999]' : 'z-[111]'}`}
    >
      <div
        className="relative h-full w-full items-center flex flex-col z-[999]"
        style={{
          boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',
        }}
      >
        <div className={`mt-[5.2rem] h-[2px] bg-gray-400 w-[60%] `} />
        <div className="flex flex-col items-center ">
          {FILTERS_LIST?.map((filter) => (
            <div key={filter?.id} className="flex flex-col items-center justify-center my-4 ">
              <span
                onClick={() => {
                  if (filter?.id === 4) {
                    setIsFiltersOpen(true);
                  }
                }}
              >
                {filter?.logo}
              </span>
              <span className="text-[10px] mt-2">{filter?.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <div className="text-xl font-bold rotate-[-90deg]">FILTRI</div>
        </div>
      </div>
      {/* ALL FILTER DIV */}
      {isFiltersOpen ? (
        <div
          ref={allFiltersRef}
          className="absolute top-0 overflow-y-auto  -right-[22rem] w-[22rem]  bg-gray-100 p-4 h-full rounded-tr-2xl rounded-br-2xl pt-[6.2rem]"
        >
          <div className=" mb-8 pb-4 border-b-[1px] border-[#DBDBDB]">
            <div
              onClick={() => {
                setFilterOpenWithName({
                  isOpen: !filterOpenWithName.isOpen,
                  name: FILTERS.CATEGORY,
                });
              }}
              className="flex justify-between items-center text-[#424043] "
            >
              <h2 className="text-xl font-semibold">{FILTERS.CATEGORY}</h2>
              <IoIosArrowDown className="text-2xl cursor-pointer" />
            </div>

            {/* categories container */}
            <div className="flex items-center flex-wrap overflow-hidden">
              {CATEGORIES.map((category) => (
                <div
                  className="flex items-center rounded-2xl p-2 bg-white text-black hover:shadow:xl cursor-pointer transition-all delay-100 hover:bg-gray-200 ease-in-out my-2 mx-2"
                  key={category?.id}
                >
                  <Image
                    className="rounded-full object-contain"
                    src={category?.image?.src}
                    alt={category?.name}
                    width={20}
                    height={20}
                  />
                  <span className="text-[#424043] text-xs ml-2">{category?.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* brandh container */}
          <div className=" mb-8 pb-4 border-b-[1px] border-[#DBDBDB]">
            <div
              onClick={() => {
                setFilterOpenWithName({ isOpen: !filterOpenWithName.isOpen, name: FILTERS.BRAND });
              }}
              className="flex justify-between items-center text-[#424043]"
            >
              <h2 className="text-xl font-semibold">{FILTERS.BRAND}</h2>
              <IoIosArrowDown className="text-2xl cursor-pointer" />
            </div>

            {/* brands list div */}
            <div className="flex flex-wrap overflow-hidden items-center">
              {BRANDS_LIST.map((brand) => (
                <div
                  key={brand.id}
                  className="p-2 rounded-2xl shadow-2xl hover:scale-105 transition-all delay-100 ease-in-out mx-2 my-1 cursor-pointer font-medium"
                >
                  <span className="text-[#424043] text-xs">{brand?.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* prrice container */}
          <div className=" mb-8 pb-4 border-b-[1px] border-[#DBDBDB]">
            <div
              onClick={() => {
                setFilterOpenWithName({ isOpen: !filterOpenWithName.isOpen, name: FILTERS.PRICE });
              }}
              className="flex justify-between items-center text-[#424043]"
            >
              <h2 className="text-xl font-semibold">{FILTERS.PRICE}</h2>
              <IoIosArrowDown className="text-2xl cursor-pointer" />
            </div>

            {/* price inputs */}
            <div className="flex items-center justify-center">
              <div className="h-full relative  mx-2">
                <input
                  className="h-full rounded-3xl text-sm w-20 shadow-xl outline-none p-2 border-none"
                  placeholder="Da"
                  type="text"
                />
                <MdOutlineEuro className="absolute top-2 right-2 text-sm" />
              </div>

              {/* second price input div */}
              <div className="h-full relative mx-2 ">
                <input
                  className="h-full rounded-3xl  text-sm w-20 shadow-xl outline-none p-2 border-none"
                  type="text"
                  placeholder="A"
                />
                <MdOutlineEuro className="absolute top-2 right-2 text-sm" />
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

const EcoFilters = memo(EcoFiltersComoponent);

export default EcoFilters;
