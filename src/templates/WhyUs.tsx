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
        <div className="absolute bottom-0 left-0 ml-[15px] rounded-tr-lg bg-primary-700 px-4 py-2 text-center font-semibold text-white md:ml-[30px] md:px-8 md:py-4">
          <h2 className="text-[24px] md:text-[48px]">25+</h2>
          <p className="text-[12px] md:text-[16px]">Années d&apos;experience</p>
        </div>
      </div>
      <div className="mt-[30px] w-full text-center md:mt-[-30px] md:w-[50%] md:text-start">
        <p className="text-[14px] font-semibold text-primary-700 md:text-[20px]">
          BIENVENUE CHEZ TAWAJI CONSTRUCTION
        </p>
        <h2 className="my-[20px] text-[16px] font-bold md:text-[24px]">
          Le collaborateur idéal pour vos projets de construction
        </h2>
        <p className="text-[12px] md:text-[16px]">
          Nous sommes une entreprise basée à Lubumbashi dans la province du Haut
          Katanga en RD Congo, spécialisée dans la location et le transport de
          machinerie lourde, garantissant une performance optimale et une
          fiabilité inégalée.
        </p>

        <div className="mt-8 flex flex-col gap-8 text-start">
          <div className="flex flex-row gap-2 rounded-md bg-primary-700 p-4 text-white md:gap-6 md:p-8">
            <div className="flex h-[30px] flex-row items-center justify-center rounded-full bg-white p-2 text-primary-700 md:h-[50px] md:p-4">
              <FaCheck />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[14px] font-semibold md:text-[24px]">
                Un catalogue varié
              </h2>
              <p className="text-[10px] md:text-[16px]">
                Nous mettons à votre disposition une large gamme de machines de
                construction pour répondre à tous vos besoins.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2 rounded-md border-2 border-primary-700 p-4 text-primary-700 md:gap-6 md:p-8">
            <div className="flex h-[30px] flex-row items-center justify-center rounded-full bg-primary-700 p-2 text-white md:h-[50px] md:p-4">
              <FaCheck />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[14px] font-semibold md:text-[24px]">
                Des services de location de qualité
              </h2>
              <p className="text-[10px] md:text-[16px]">
                Nos machines sont régulièrement entretenues et vérifiées pour
                garantir leur bon fonctionnement et votre sécurité. Une équipe
                de professionnels est également à votre disposition pour vous
                conseiller et vous accompagner dans le choix de vos machines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WhyUs };
