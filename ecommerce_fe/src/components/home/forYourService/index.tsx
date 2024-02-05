import { memo } from 'react';
import { CiGift } from 'react-icons/ci';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { TbRosetteNumber1 } from 'react-icons/tb';
const SERVICES = [
  {
    id: 1,
    name: 'Ritiro in negozio',
    icon: <CiGift className="text-2xl" />,
  },
  {
    id: 2,
    name: 'Consegna a domicilio',
    icon: <MdOutlineLocalShipping className="text-2xl" />,
  },
  {
    id: 3,
    name: 'Consegna in negozio',
    icon: <GiAutoRepair className="text-x2l" />,
  },
  {
    id: 4,
    name: 'Consegna in negozio',
    icon: <CiMoneyCheck1 className="text-2xl" />,
  },
  {
    id: 5,
    name: 'Consegna in negozio',
    icon: <TbRosetteNumber1 className="text-2xl" />,
  },
];

const EcoForYourServiceComponent = () => {
  return (
    <section className="flex  justify-center items-center w-full mt-8 mb-12">
      <div className=" flex flex-col  w-[85%]">
        <h2 className=" text-3xl md:text-5xl font-semibold">Al tuo servizio</h2>
        <p className=" text-base md:text-lg my-2">
          Scopri tutti i nostri servizi pensati per rendere i tuoi acquisti online sempre più facili
          e veloci. Scopri tutti i dettagli
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center mt-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex justify-center cursor-pointer items-center my-2 mr-4 border-[1px] p-4 hover:shadow-xl transition-all delay-75 ease-in-out rounded-xl"
            >
              <div>{service.icon}</div>
              <p className="text-sm md:text-base ml-2">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EcoForYourService = memo(EcoForYourServiceComponent);

export default EcoForYourService;
