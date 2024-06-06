'use client';

import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { CanvasRevealEffect } from './effects';

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export function CanvasRevealEffectDemo2() {
  return (
    <>
      <div className="group/canvas-card relative mx-auto flex h-[14rem] w-[90%] items-center justify-center border border-black/[0.2] p-4 dark:border-white/[0.2] md:w-[60%]">
        <AnimatePresence>
          <div className="absolute inset-0 h-full w-full">
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </div>
        </AnimatePresence>
        {/* <div className="relative z-20">
            <div className="mx-auto flex w-full items-center justify-center text-center  transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
              <AceternityIcon />
            </div> */}
        <h2 className="z-10 text-center text-[24px] font-bold text-white md:text-[32px]">
          Notre devise, notre devise, notre devise,
          <br /> notre devise
        </h2>
        {/* </div> */}
      </div>
    </>
  );
}
