import Link from 'next/link';
import React, { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { TawajiNavbar } from '@/navigation/TawajiNav';
import { services } from '@/utils/services';

const backgroundImages = [
  '/assets/images/home/background.jpg',
  '/assets/images/home/background2.jpg',
  'https://res.cloudinary.com/dzj9hndxv/image/upload/v1718123404/6f5f2598-b63c-4a65-b34a-f319c42321e3_cqxcyc.jpg',
  '/assets/images/home/techback.jpg',
];

const Tawaji: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    const backgrounds = document.querySelectorAll('.background-image');

    const eventListeners: Array<() => void> = [];

    if (cards.length > 0 && backgrounds.length > 0) {
      const handleMouseEnter = (index: number) => {
        backgrounds[index]?.classList.add('hovered');
        cards[index]?.classList.add('hovered');
      };

      const handleMouseLeave = (index: number) => {
        backgrounds[index]?.classList.remove('hovered');
        cards[index]?.classList.remove('hovered');
      };

      cards.forEach((card, index) => {
        const background = backgrounds[index];
        if (background) {
          const enterHandler = () => handleMouseEnter(index);
          const leaveHandler = () => handleMouseLeave(index);
          card.addEventListener('mouseenter', enterHandler);
          card.addEventListener('mouseleave', leaveHandler);

          eventListeners.push(() => {
            card.removeEventListener('mouseenter', enterHandler);
            card.removeEventListener('mouseleave', leaveHandler);
          });
        }
      });
    }

    return () => {
      eventListeners.forEach((removeListener) => removeListener());
    };
  }, []);

  return (
    <div className="relative h-[100vh]" id="home">
      <style jsx>{`
        .background-image.hovered {
          transform: scale(1.3);
        }
        .service-card.hovered {
          transform: scale(0.8);
          z-index: 20;
        }
      `}</style>
      <div className="grid h-full md:grid-cols-4">
        {backgroundImages.map((image, index) => (
          <div key={index} className="relative h-full overflow-hidden">
            <img
              src={image}
              alt={`background-${index}`}
              className="background-image absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500"
            />
            <div
              className={`absolute left-0 top-0 h-full w-full bg-primary-700/80 transition-opacity duration-500 ${
                index === 1
                  ? 'border-x-2 border-primary-700 bg-primary-700/70'
                  : ''
              }`}
            />
            <div className="absolute left-0 top-0 h-full w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
      <div className="absolute left-0 top-0 mt-[20px] flex h-[100vh] w-full flex-col justify-between md:mt-[60px]">
        <TawajiNavbar />
        <div className="flex h-[100vh] w-full flex-col items-center justify-center p-4 text-center md:p-0">
          <Link href="#" className="flex flex-row items-center">
            <img
              src="/assets/images/home/logo.png"
              className="h-10 md:h-16"
              alt="Logo"
            />
            <h1 className="text-3xl font-semibold text-white md:text-5xl">
              TAWAJI
            </h1>
          </Link>
          <h2 className="my-[16px] text-[14px] text-white/80 md:my-[30px] md:text-[24px]">
            L’entreprise qui vous offre des services de qualité
          </h2>
          <div className="mt-[40px] grid gap-4 md:grid-cols-4 md:gap-10">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="service-card relative flex flex-col items-center justify-center rounded-lg bg-white px-12 py-8 shadow-lg transition-transform duration-500"
                >
                  <IconComponent className="text-[36px] text-primary-700" />
                  <h2 className="my-[24px] text-[22px] font-semibold text-primary-700">
                    {service.name}
                  </h2>
                  <a
                    target="_blank"
                    href={service.link}
                    className="flex flex-row items-center gap-2 rounded-lg bg-primary-700 px-8 py-1 text-[11px] text-white hover:bg-primary-700/80 md:text-sm"
                  >
                    <span>Visiter</span>
                    <IoIosArrowForward />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Tawaji };
