import Link from 'next/link';

const Services = () => {
  return (
    <div id="categories" className="relative mt-10 md:mt-20 md:h-full">
      <img
        src="/assets/images/home/background.jpg"
        alt="Hero"
        className="hidden h-[100vh] w-full object-cover md:block"
      />
      <div className="w-full px-4 md:absolute md:left-0 md:top-0 md:h-[100vh] md:bg-[#FFFFFF]/80 md:px-16 md:py-4">
        <h1 className="mb-2 mt-5 text-lg font-bold text-primary-700 lg:text-xl">
          CATEGORIES
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <div className="flex h-[400px] flex-col rounded-lg bg-white text-black shadow-md md:h-[80vh]">
            <img
              src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1717816366/20240523_123434_page-0001_1_ocljak.jpg"
              alt=""
              className="h-[70%] w-full object-cover md:h-[60%]"
            />
            <div className="flex flex-col gap-4 p-4">
              <h1 className="text-[14px] font-bold text-primary-700 md:text-xl">
                Machines
              </h1>
              <p className="text-[11px] md:text-sm">
                Des équipements spécialisés utilisés pour accomplir diverses
                tâches sur les chantiers, telles que le terrassement, le levage,
                le transport de matériaux et la finition des surfaces.
              </p>
              <Link href="/machines">
                <button className="animate-infinite w-[40%] animate-wiggle rounded-lg bg-primary-700 p-2 text-[11px] text-white md:text-sm">
                  Voir les machines
                </button>
              </Link>
            </div>
          </div>

          <div className="flex h-[400px] flex-col rounded-lg bg-white text-black shadow-md md:h-[80vh]">
            <img
              src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1718123404/6f5f2598-b63c-4a65-b34a-f319c42321e3_cqxcyc.jpg"
              alt=""
              className="h-[70%] w-full object-cover md:h-[60%]"
            />
            <div className="flex flex-col gap-4 p-4">
              <h1 className="text-[14px] font-bold text-primary-700 md:text-xl">
                CAMIONS
              </h1>
              <p className="text-[11px] md:text-sm">
                Véhicules motorisés conçus pour transporter des marchandises
                lourdes et volumineuses sur de longues distances, offrant une
                solution essentielle pour la logistique et le commerce.
              </p>
              <Link href="/trucks">
                <button className="animate-infinite w-[40%] animate-wiggle rounded-lg bg-primary-700 p-2 text-[11px] text-white md:text-sm">
                  Voir les camions
                </button>
              </Link>
            </div>
          </div>

          <div className="flex h-[400px] flex-col rounded-lg bg-white text-black shadow-md md:h-[80vh]">
            <img
              src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1718124642/WhatsApp_Image_2024-06-11_at_18.49.40_akphyz.jpg"
              alt=""
              className="h-[70%] w-full object-cover md:h-[60%]"
            />
            <div className="flex flex-col gap-4 p-4">
              <h1 className="text-[14px] font-bold text-primary-700 md:text-xl">
                ÉQUIPEMENT DE CONSTRUCTION
              </h1>
              <p className="text-[11px] md:text-sm">
                Les équipements de construction sont des outils et des machines
                utilisés pour faciliter et accélérer les travaux de
                construction, allant du terrassement à la finition des
                structures.
              </p>
              <Link href="/tools">
                <button className="animate-infinite w-[40%] animate-wiggle rounded-lg bg-primary-700 p-2 text-[11px] text-white md:text-sm">
                  Voir les outils
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Services };
