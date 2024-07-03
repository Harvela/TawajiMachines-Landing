import Link from 'next/link';
import { MdOutlineNavigateNext } from 'react-icons/md';

import { Footer } from '@/templates/Footer';
import { trucks } from '@/utils/services';

const Trucks = () => {
  return (
    <div id="categories" className="relative h-[50vh]">
      <img
        src="/assets/images/home/background.jpg"
        alt="Hero"
        className="top-0 h-[50vh] w-full object-cover"
      />
      <div className="absolute left-0 top-0 flex h-[50vh] w-full flex-col items-center justify-center bg-[#000000]/80">
        <div>
          <h1 className="text-center text-[36px] font-semibold text-white md:text-[48px]">
            CAMIONS
          </h1>
          <div className="m-auto flex flex-row items-center justify-center p-8 text-sm font-semibold text-white">
            <Link
              href="/tawaji-construction/#home"
              className="mr-2 flex flex-row items-center justify-between text-[16px] md:text-[20px]"
            >
              HOME
              <MdOutlineNavigateNext className="text-xl text-white" />
            </Link>
            <Link
              href="/trucks"
              className="flex flex-row items-center justify-between text-[14px] text-[#71AEFD] md:text-[18px]"
            >
              CAMIONS
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 md:px-16">
        <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-16">
          {trucks.map((truck, index) => {
            return (
              <div
                key={index}
                className="flex h-[400px] flex-col rounded-md bg-white text-black shadow-md md:h-[80vh]"
              >
                <img
                  src={truck.image}
                  alt={`${truck.name} Logo`}
                  className="h-[70%] w-full object-cover md:h-[60%]"
                />
                <div className="flex flex-col gap-2 p-2 md:gap-6 md:p-6">
                  <h1 className="text-[14px] font-bold text-primary-700 md:text-xl">
                    {truck.name}
                  </h1>
                  <p className="text-[11px] md:text-sm">{truck.description}</p>
                  <Link href={`/trucks/${truck.link}`}>
                    <button className="w-[40%] rounded-sm bg-primary-700 p-1 text-[11px] text-white md:text-sm">
                      Voir les détails
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trucks;
