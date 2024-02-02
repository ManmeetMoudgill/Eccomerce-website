import { memo } from 'react';
import Book1 from '@/images/offersBook/book1.webp';
import Book2 from '@/images/offersBook/book2.webp';

const EcoOffersBookComponent = () => {
  return (
    <section className="w-full flex justify-center items-center mb-4">
      <div className=" w-[80%] flex flex-col justify-center items-center pb-8">
        <h2 className="text-[5.5vw] flex items-center ">
          <span className="text-social">Volantino </span>
          <span className="text-white text-social">ServiziSocial</span>
        </h2>
        <h4 className="text-[1.2vw] font-semibold mt-1">
          Scopri i nostri volantini e speciali che abbiamo pensato per te.
        </h4>

        {/* CONTAINER HAVING TWO BOOKS */}
        <div className="flex justify-center w-[60%] mt-3 ">
          <div className=" m-2 rounded-xl shadow-xl flex justify-center items-center p-3  cursor-pointer hover:shadow-2xl transition-all delay-75 ease-in-out  flex-col">
            <img src={Book1?.src} alt="book1" className="w-[95%] h-auto object-cover " />
            <p className=" uppercase text-sm font-semibold">Speciale Cucina</p>
          </div>
          <div className=" m-2 rounded-xl shadow-xl flex justify-center items-center p-3 cursor-pointer group hover:shadow-2xl transition-all  delay-75 ease-in-out   flex-col">
            <img src={Book2?.src} alt="book2" className="w-[95%] h-auto object-cover " />
            <p className=" uppercase text-sm font-semibold">La festa della technologia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

EcoOffersBookComponent.displayName = 'EcoOffersBookComponent';

const EcoOffersBook = memo(EcoOffersBookComponent);

export default EcoOffersBook;
