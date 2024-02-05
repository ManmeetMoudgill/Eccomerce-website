import Image from 'next/image';
import Payment1 from '@/images/paymentMethods/payment1.png';
import Payment2 from '@/images/paymentMethods/payment2.png';
import Payment3 from '@/images/paymentMethods/payment3.png';
import Payment4 from '@/images/paymentMethods/payment4.png';
import Payment5 from '@/images/paymentMethods/payment5.png';
import Payment6 from '@/images/paymentMethods/payment6.png';
import Payment7 from '@/images/paymentMethods/payment7.png';
import Payment8 from '@/images/paymentMethods/payment8.png';
import Payment9 from '@/images/paymentMethods/payment9.png';
import Payment10 from '@/images/paymentMethods/payment10.jpg';
const EcoFooter = () => {
  return (
    <footer className=" flex  w-full justify-center items-center py-4 bg-[#3C4043] text-white">
      <div className="flex justify-between  w-[80%]">
        <div className="flex items-center ">
          <p className="text-base">Manmeet Moudgill Eccommerce All rights reserved. 2024-2025</p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="mx-2 hover:scale-125 cursor-pointer  transition-all delay-75 transform ease-in-out"
            src={Payment1?.src}
            alt="Payment1"
            width={40}
            height={40}
          />
          <Image
            className="mx-2 hover:scale-125 cursor-pointer  transition-all delay-75 transform ease-in-out"
            src={Payment2?.src}
            alt="Payment2"
            width={40}
            height={40}
          />
          <Image
            className="mx-2 hover:scale-125 cursor-pointer  transition-all delay-75 transform ease-in-out"
            src={Payment3?.src}
            alt="Payment3"
            width={40}
            height={40}
          />
          <Image
            className="mx-2 hover:scale-125 cursor-pointer  transition-all delay-75 transform ease-in-out"
            src={Payment4?.src}
            alt="Payment4"
            width={40}
            height={40}
          />
          <Image
            className="mx-2 hover:scale-125 cursor-pointer  transition-all delay-75 transform ease-in-out"
            src={Payment5?.src}
            alt="Payment5"
            width={40}
            height={40}
          />
          <Image
            className="mx-2 hover:scale-125 cursor-pointer  transition-all delay-75 transform ease-in-out"
            src={Payment6?.src}
            alt="Payment6"
            width={40}
            height={40}
          />
          <Image
            className="mx-2 hover:scale-125 cursor-pointer  transition-all delay-75 transform ease-in-out"
            src={Payment7?.src}
            alt="Payment7"
            width={40}
            height={40}
          />
          <Image
            className="mx-2 hover:scale-125 cursor-pointer  transition-all delay-75 transform ease-in-out"
            src={Payment8?.src}
            alt="Payment8"
            width={40}
            height={40}
          />
          <Image
            className="mx-2 hover:scale-125 cursor-pointer  transition-all delay-75 transform ease-in-out"
            src={Payment9?.src}
            alt="Payment9"
            width={40}
            height={40}
          />
          <Image
            className="mx-2 hover:scale-125 cursor-pointer  transition-all delay-75 transform ease-in-out"
            src={Payment10?.src}
            alt="Payment10"
            width={40}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
};

export default EcoFooter;
