import Link from 'next/link';

import { services } from '@/utils/services';

const Services = () => {
  return (
    <div id="categories" className="relative mt-20 h-[100vh]">
      <img
        src="/assets/images/home/background.jpg"
        alt="Hero"
        className="h-[100vh] w-full object-cover"
      />
      <div className="absolute left-0 top-0 h-[100vh] w-full bg-[#FFFFFF]/80 px-16 py-4">
        <h1 className="text-blue mb-2 mt-5 text-lg font-bold lg:text-xl">
          CATEGORIES
        </h1>
        <div className="mt-12 grid grid-cols-4 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex h-[80%] flex-col bg-white text-black shadow-md"
              >
                <img
                  src={service.icon}
                  alt={`${service.name} Logo`}
                  className="h-[60%] w-full object-cover"
                />
                <div className="flex flex-col gap-4 p-6">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-sm">{service.description}</p>
                  <Link href={`/gallery/${service.name}`}>
                    <button className="w-[40%] rounded-sm bg-black p-1 text-sm text-white">
                      View more
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
