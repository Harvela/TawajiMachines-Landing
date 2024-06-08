import { Button } from 'flowbite-react';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="">
      <div id="home" className=" flex flex-row">
        <div className="mx-8 mt-[0px] flex h-[80vh]  w-full flex-col justify-center text-center md:mx-16 md:mt-[-40px]  md:h-auto md:w-[50%] md:text-start">
          <h2 className="text-[14px] font-bold text-primary-500 md:text-[16px]">
            TAWAJI CONSTRUCTION MACHINES
          </h2>
          <h1 className="my-[30px] text-[28px] font-semibold text-white/80 md:text-[50px]">
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
        <div className="hidden w-[50%]  md:block">
          <img
            src="/assets/images/home/truck.png"
            alt="Hero"
            className="z-50 h-[100vh] w-[90%] object-cover"
          />
        </div>
      </div>
      {/* <div className="mt-[140px] md:mt-[-140px]">
        <CanvasRevealEffectDemo2 />
      </div> */}
    </div>
  );
};

export { Hero };
