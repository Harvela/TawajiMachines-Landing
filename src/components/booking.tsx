import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdClose, MdMail } from 'react-icons/md';

const Booking: React.FC<{ message?: string; onClose: any }> = ({ onClose }) => {
  return (
    <div className="flex min-h-full flex-col justify-center p-4 md:p-8">
      <button
        onClick={() => onClose?.()}
        className="flex flex-row items-center justify-end text-[24px] text-[#c61a09]"
      >
        <MdClose className="cursor-pointer" />
      </button>{' '}
      <h2 className="mb-10 text-3xl font-bold leading-9 tracking-tight text-primary-700">
        Reservation
      </h2>
      <div className="">
        <h2 className="mb-8 text-[20px]">Pour vos reservations, contactez: </h2>
        <div className="mt-4 flex flex-col gap-4 text-[18px]">
          <div className="flex flex-row gap-3">
            <FaPhone className="text-primary-700" />
            <p>+243 997455238</p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <MdMail className="text-primary-700" />
            <a href="mailto:tawaji.congo@gmail.com">tawaji.congo@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Booking };
