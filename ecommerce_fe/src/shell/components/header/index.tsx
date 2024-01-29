"use client";
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '@/hooks/use-click-outside';
import { useScrollHeightObserver } from '@/hooks/use-scroll-observer';


const suggestionsForSearch = [
    {
        id: 1,
        name: 'Mobile',

    }, {
        id: 2,
        name: 'Laptop',
    }, {
        id: 3,
        name: 'Shoes',
    }, {
        id: 4,
        name: 'Shirts',
    }
]
const HeaderComponent = () => {
    const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);
    const [isHeightReached, setIsHeightReached] = useState<boolean>(false);




    const inputRef = useRef<HTMLInputElement>(null);

    useClickOutside(() => {
        setIsSearchClicked(false);
    }, inputRef);

    const result = useScrollHeightObserver(40);


    useEffect(() => {
        if (result) {
            setIsHeightReached(true);
        }
        else {
            setIsHeightReached(false);
        }
    })

    //console.log(isHeightReached);




    return <header className="flex justify-between items-center px-7 py-5 fixed w-full top-0" >
        {/* LEFT CONTAINER */}
        <div className=" flex items-center w-[30%]">
            <div className=" mr-4">
                <div className="w-12 cursor-pointer border-[1px] shadow-xl h-10 flex justify-center items-center bg-white rounded-[1.2rem]">
                    <span className='text-[#FF9933] font-bold'>M</span>
                </div>
            </div>

            {
                !isHeightReached ? (

                    <div className=" mr-6">
                        <h2 className='text-black font-bold tracking-normal text-xl font-serif'>Moudgill Eccomerce</h2>
                    </div>

                ) : undefined
            }
            <div className=" mr-4">
                <div className='flex justify-center items-center cursor-pointer hover:scale-105 transition-all delay-100 transform bg-[#4385F4] py-1 px-2 rounded-3xl shadow-lg'>
                    <RxHamburgerMenu className='text-base mr-2 font-bold text-white' />
                    <span className='text-sm font-bold text-white'>Shop</span>
                </div>
            </div>
            {
                isHeightReached ? (
                    <div className='flex'>
                        <ul className='flex items-center'>
                            <li className='mx-1 text-black text-sm font-semibold'><a>Informatica</a></li>
                            <li className='mx-1 text-black text-sm font-semibold'><a>Telefonia</a></li>
                            <li className='mx-1 text-black text-sm font-semibold'><a>TV</a></li>
                        </ul>
                    </div>

                ) : undefined
            }
        </div>
        <div className='flex flex-1  items-center w-[70%] '>
            {/* SEARCH CONTAINER */}
            <div className="w-[50%] mr-3">
                <div className='w-full relative flex'>
                    <input ref={inputRef} onClick={() => {
                        setIsSearchClicked(true);
                    }} type="text" className='p-3 bg-white outline-none border-[1px] shadow-lg rounded-3xl w-full' />
                    <span className={`absolute right-0 rounded-r-3xl flex justify-center items-center  ${isSearchClicked ? 'bg-[#4385F4]' : ''} px-2  text-center  h-full`}>
                        <IoMdSearch className={`${isSearchClicked ? 'text-white' : 'text-[#4385F4]'} font-bold text-3xl`} />
                    </span>
                    {/* Search suggestion container */}
                    {
                        isSearchClicked ? (
                            <div className='absolute flex items-center -bottom-10 left-0 w-full flex-wrap'>
                                {
                                    suggestionsForSearch?.map((item) => {
                                        return (
                                            <>
                                                <div className='flex justify-between cursor-pointer group transition-all delay-175  ease-in-out items-center px-2 py-1 border-[1px] hover:border-[#4385F4] shadow-xl rounded-2xl mx-1 '>
                                                    <span className='text-[#3C4043] group-hover:text-[#4385F4] text-sm font-bold'>{item.name}</span>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        ) : undefined
                    }
                </div>
            </div>

            {/* RIGHT SIDE NAVIGATION CART CONTAINER */}
            <div className="w-[50%] flex  items-center ml-12">
                <div className='flex justify-between items-center w-full'>
                    <div className='flex-1'>
                        <ul className='flex items-center justify-evenly'>
                            <li className='text-lg flex flex-col group text-[#3C4043] font-bold cursor-pointer'>
                                <a>Esplora</a>
                                <span className='w-[0%] group-hover:w-[100%] transition-all transform delay-75 ease-in-out h-[2px] bg-[#3C4043]'></span>
                            </li>
                            <li className='text-lg  flex flex-col group text-[#3C4043] font-bold cursor-pointer'>
                                <a>Negozi</a>
                                <span className='w-[0%] group-hover:w-[100%] transition-all transform delay-75 ease-in-out h-[2px] bg-[#3C4043]'></span>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center  ml-4 '>
                        <div className="w-12 mx-6  cursor-pointer border-[1px] shadow-xl h-10 flex justify-center items-center bg-white rounded-[1.2rem]">
                            <FaCartShopping className='text-[#3C4043] font-bold text-xl' />
                        </div>
                        <div className="w-12 mx-6  cursor-pointer border-[1px] shadow-xl h-10 flex justify-center items-center bg-white rounded-[1.2rem]">
                            <FaUser className='text-[#3C4043] font-bold text-xl' />
                        </div>
                        <div className="w-12 mx-6  cursor-pointer border-[1px] shadow-xl h-10 flex justify-center items-center bg-white rounded-[1.2rem]">
                            <FaFire className='text-[#3C4043] font-bold text-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>;
};



HeaderComponent.displayName = 'HeaderComponent';

const EcoHeader = HeaderComponent;
export default EcoHeader;
