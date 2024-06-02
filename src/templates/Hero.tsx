import { Button } from 'flowbite-react';
import React from 'react';

import { CanvasRevealEffectDemo2 } from '@/components/sparkles';

const Hero: React.FC = () => {
  return (
    <div className="">
      <div id="home" className=" flex flex-row">
        <div className="mx-16 mt-32 w-[50%]">
          <h2 className="text-[16px] font-bold text-primary-500">
            TAWAJI CONSTRUCTION MACHINES
          </h2>
          <h1 className="my-[30px] text-[50px] font-semibold text-white/80">
            Your Perfect Collaborator on any Project.
          </h1>
          <div className="mt-[20px] flex flex-col gap-5 md:flex-row">
            <Button
              color="white"
              className="animate-infinite h-[50px] animate-wiggle bg-primary-700 px-4 font-semibold text-black md:self-end"
            >
              View catalog
            </Button>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            src="/assets/images/home/truck.png"
            alt="Hero"
            className="z-50 h-[100vh] w-[90%] object-cover"
          />
        </div>
      </div>
      <div className=" mt-[-140px]">
        <CanvasRevealEffectDemo2 />
      </div>
    </div>
  );
};

export { Hero };
