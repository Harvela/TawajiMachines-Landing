import Link from 'next/link';
import React, { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { TawajiNavbar } from '@/navigation/TawajiNav';
import { services } from '@/utils/services';

const backgroundImages = [
  '/assets/images/home/background.jpg',
  '/assets/images/home/background2.jpg',
  '/assets/images/home/securityb.jpg',
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
      <div className="absolute left-0 top-0 mt-[20px] flex w-full flex-col justify-between md:mt-[40px]">
        <TawajiNavbar />
        <div className="flex w-full flex-col items-center justify-center p-4 text-center md:mt-[24px] md:px-2 md:py-0">
          <Link href="#" className="flex flex-row items-center">
            <img
              src="/assets/images/home/logo.png"
              className="h-6 md:h-14"
              alt="Logo"
            />
            <h1 className="text-xl font-semibold text-white md:text-4xl">
              TAWAJI
            </h1>
          </Link>
          <h2 className="my-[8px] text-[10px] text-white/80 md:my-[30px] md:text-[24px]">
            L’entreprise qui vous offre des services de qualité
          </h2>
          <div className="mt-[10px] grid gap-3 md:mt-[40px] md:grid-cols-4 md:gap-10">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="service-card relative flex flex-col items-center justify-center rounded-lg bg-white px-4 py-[10px] shadow-lg transition-transform duration-500 md:px-12 md:py-8"
                >
                  <IconComponent className="text-[10px] text-primary-700 md:text-[36px]" />
                  <h2 className="my-[4px] text-[12px] font-semibold text-primary-700 md:my-[18px] md:text-[16px]">
                    {service.name}
                  </h2>
                  <a
                    target="_blank"
                    href={service.link}
                    className="flex flex-row items-center gap-1 rounded-sm bg-primary-700 px-2 py-[2px] text-[8px] text-white hover:bg-primary-700/80 md:gap-2 md:rounded-lg md:px-8 md:py-1 md:text-sm"
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
