import Link from 'next/link';

import { services } from '@/utils/services';

const Services = () => {
  return (
    <div id="categories" className="relative mt-10 h-[80vh] md:mt-20">
      <img
        src="/assets/images/home/background.jpg"
        alt="Hero"
        className="hidden h-[80vh] w-full object-cover md:block"
      />
      <div className="absolute left-0 top-0 h-[80vh] w-full px-4 md:bg-[#FFFFFF]/80 md:px-16 md:py-4">
        <h1 className="text-blue mb-2 mt-5 text-lg font-bold lg:text-xl">
          CATEGORIES
        </h1>
        <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col rounded-md bg-white text-black shadow-md"
              >
                <img
                  src={service.image}
                  alt={`${service.name} Logo`}
                  className="h-[40%] w-full object-cover md:h-[60%]"
                />
                <div className="flex flex-col gap-4 p-2 md:p-6">
                  <h1 className="text-[14px] font-bold md:text-xl">
                    {service.name}
                  </h1>
                  <p className="text-[11px] md:text-sm">
                    {service.description}
                  </p>
                  <Link href={`/gallery/${service.link}`}>
                    <button className="w-[60%] rounded-sm bg-black p-1 text-[11px] text-white md:w-[40%] md:text-sm">
                      Voir les details
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Services };
