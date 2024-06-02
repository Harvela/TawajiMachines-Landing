import { FaCheck } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div
      id="about"
      className="z-20 mt-[250px] flex flex-row justify-between px-4 py-8 text-black lg:px-16"
    >
      <div className="relative h-[80vh] w-[40%] gap-8 rounded-lg bg-primary-700">
        <img
          src="/assets/images/home/why.jpg"
          alt="Logo"
          className="z-40 ml-[30px] mt-[-30px] h-full w-full rounded-lg object-cover"
        />
        <div className="absolute bottom-0 left-0 ml-[30px] rounded-tr-lg bg-primary-700 px-8 py-4 text-center font-semibold text-black">
          <h2 className="text-[48px]">25+</h2>
          <p className="text-[16px]">Years of experience</p>
        </div>
      </div>
      <div className="mt-[-30px] w-[50%]">
        <p className="text-[20px] font-semibold text-primary-700">
          WELCOME TO TAWAJI CONSTRUCTION MACHINES
        </p>
        <h2 className="my-[20px] text-[24px] font-bold">
          The moving force in construction plant and equipment transportation
        </h2>
        <p className="text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="mt-8 flex flex-col gap-8">
          <div className="flex flex-row gap-6 rounded-md bg-primary-700 p-8 text-black">
            <div className="flex h-[50px] flex-row items-center justify-center rounded-full bg-black p-4 text-white">
              <FaCheck />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-semibold">
                Extensive Equipment Catalog
              </h2>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-6 rounded-md bg-black p-8 text-white">
            <div className="flex h-[50px] flex-row items-center justify-center rounded-full bg-primary-700 p-4 text-black">
              <FaCheck />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-semibold">
                Flexible Rental Options
              </h2>
              <p className="text-[16px]">
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
