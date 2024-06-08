import { FaCheck } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div
      id="about"
      className="z-20 mt-[180px] flex flex-col justify-between px-4 py-8 text-black md:mt-[250px] md:flex-row lg:px-16"
    >
      <div className="relative h-[40vh] w-[95%] gap-8 rounded-lg bg-primary-700 md:h-[80vh] md:w-[40%]">
        <img
          src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1717816447/20240527_112731_page-0001_1_liecgs.jpg"
          alt="Logo"
          className="z-40 ml-[15px] mt-[-15px] h-full w-full rounded-lg object-cover md:ml-[30px] md:mt-[-30px]"
        />
        <div className="absolute bottom-0 left-0 ml-[15px] rounded-tr-lg bg-primary-700 px-4 py-2 text-center font-semibold text-black md:ml-[30px] md:px-8 md:py-4">
          <h2 className="text-[24px] md:text-[48px]">25+</h2>
          <p className="text-[12px] md:text-[16px]">Years of experience</p>
        </div>
      </div>
      <div className="mt-[30px] w-full text-center md:mt-[-30px] md:w-[50%] md:text-start">
        <p className="text-[14px] font-semibold text-primary-700 md:text-[20px]">
          WELCOME TO TAWAJI CONSTRUCTION MACHINES
        </p>
        <h2 className="my-[20px] text-[16px] font-bold md:text-[24px]">
          The moving force in construction plant and equipment transportation
        </h2>
        <p className="text-[12px] md:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="mt-8 flex flex-col gap-8 text-start">
          <div className="flex flex-row gap-2 rounded-md bg-primary-700 p-4 text-black md:gap-6 md:p-8">
            <div className="flex h-[30px] flex-row items-center justify-center rounded-full bg-black p-2 text-white md:h-[50px] md:p-4">
              <FaCheck />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[14px] font-semibold md:text-[24px]">
                Extensive Equipment Catalog
              </h2>
              <p className="text-[10px] md:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2 rounded-md bg-black p-4 text-white md:gap-6 md:p-8">
            <div className="flex h-[30px] flex-row items-center justify-center rounded-full bg-primary-700 p-2 text-black md:h-[50px] md:p-4">
              <FaCheck />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[14px] font-semibold md:text-[24px]">
                Flexible Rental Options
              </h2>
              <p className="text-[10px] md:text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WhyUs };
