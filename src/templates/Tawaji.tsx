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
      <div className="absolute left-0 top-0 flex h-[100vh] w-full flex-col justify-between py-[30px]">
        <TawajiNavbar />
        <div className="flex w-full flex-col items-center justify-center p-4 text-center md:mt-[24px] md:px-2 md:py-0">
          <Link href="#" className="flex flex-row items-center">
            <img
              src="/assets/images/home/logo.png"
              className="h-10 md:h-14"
              alt="Logo"
            />
            <h1 className="text-2xl font-semibold text-white md:text-4xl">
              TAWAJI
            </h1>
          </Link>
          <h2 className="my-[18px] text-[16px] text-white/80 md:my-[30px] md:text-[24px]">
            L’entreprise qui vous offre des services de qualité
          </h2>
          <div className="mt-[10px] grid gap-4 md:mt-[40px] md:grid-cols-4 md:gap-10">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="service-card relative flex flex-col items-center justify-center rounded-lg bg-white px-12 py-4 shadow-lg transition-transform duration-500 md:py-8"
                >
                  <IconComponent className="text-[28px] text-primary-700 md:text-[36px]" />
                  <h2 className="my-[12px] text-[16px] font-semibold text-primary-700 md:my-[18px]">
                    {service.name}
                  </h2>
                  <a
                    target="_blank"
                    href={service.link}
                    className="flex flex-row items-center gap-2 rounded-lg bg-primary-700 px-8 py-1 text-sm text-white hover:bg-primary-700/80"
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
