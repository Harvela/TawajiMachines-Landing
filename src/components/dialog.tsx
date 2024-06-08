import type { ReactNode } from 'react';
import React from 'react';

type PropTypes = {
  width?: string;
  height?: string;
  onClose?: () => void;
  isForm?: boolean;
  fillAll?: boolean;
  title?: string;
  description?: ReactNode;
  children: any;
};

const Dialog: React.FC<PropTypes> = ({ children, onClose }) => {
  return (
    <div className="bg-blue/60  fixed  left-0 top-0 z-[5000] flex h-full w-full items-center justify-center">
      <div
        className={`absolute inset-0 z-30 h-full w-full`}
        onClick={onClose}
      />
      <div className="z-50 w-[90%] rounded-lg bg-white p-2 md:w-[35%]">
        {children}
      </div>
    </div>
  );
};

export default Dialog;
