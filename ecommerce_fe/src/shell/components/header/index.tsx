import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
const HeaderComponent = () => {
    return <header className="flex justify-between items-center px-7 py-5">
        {/* LEFT CONTAINER */}
        <div className=" flex items-center w-[30%]">
            <div className=" mr-4">
                <div className="w-12 cursor-pointer border-[1px] shadow-xl h-10 flex justify-center items-center bg-white rounded-[1.2rem]">
                    <span className='text-[#FF9933] font-bold'>M</span>
                </div>
            </div>
            <div className=" mr-6">
                <h2 className='text-black font-bold tracking-normal text-xl font-serif'>Moudgill Eccomerce</h2>
            </div>
            <div className=" mr-4">
                <div className='flex justify-center items-center cursor-pointer hover:scale-105 transition-all delay-100 transform bg-[#4385F4] py-1 px-2 rounded-3xl shadow-lg'>
                    <RxHamburgerMenu className='text-base mr-2 font-bold text-white' />
                    <span className='text-sm font-bold text-white'>Shop</span>
                </div>
            </div>
        </div>
        <div className='flex flex-1  items-center w-[70%] '>
            {/* SEARCH CONTAINER */}
            <div className="w-[50%] mr-3">
                <div className='w-full relative'>
                    <input type="text" className='p-3 bg-white outline-none border-[1px] shadow-2xl rounded-3xl w-full' />
                    <span className='absolute right-4 top-[0.6rem]'>
                        <IoMdSearch className='text-[#4385F4] font-bold text-3xl' />
                    </span>
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
