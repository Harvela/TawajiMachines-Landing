import Link from 'next/link';

const Services = () => {
  return (
    <div id="categories" className="relative mt-10 h-full md:mt-20">
      <img
        src="/assets/images/home/background.jpg"
        alt="Hero"
        className="hidden h-[100vh] w-full object-cover md:block"
      />
      <div className="absolute left-0 top-0 h-[100vh] w-full px-4 md:bg-[#FFFFFF]/80 md:px-16 md:py-4">
        <h1 className="mb-2 mt-5 text-lg font-bold text-primary-700 lg:text-xl">
          CATEGORIES
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-8">
          <div className="flex h-[80vh] flex-col rounded-md bg-white text-black shadow-md">
            <img
              src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1717816366/20240523_123434_page-0001_1_ocljak.jpg"
              alt=""
              className="h-[40%] w-full object-cover md:h-[60%]"
            />
            <div className="flex flex-col gap-6 p-2 md:p-6">
              <h1 className="text-[14px] font-bold text-primary-700 md:text-xl">
                Machines
              </h1>
              <p className="text-[11px] md:text-sm">
                Idéal pour le compactage de sols et d’asphalte, ce rouleau
                compresseur assure une surface lisse et stable.
              </p>
              <Link href="/machines">
                <button className="w-[60%] rounded-sm bg-primary-700 p-1 text-[11px] text-white md:w-[40%] md:text-sm">
                  Voir les machines
                </button>
              </Link>
            </div>
          </div>

          <div className="flex h-[80vh] flex-col rounded-md bg-white text-black shadow-md">
            <img
              src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1718123404/6f5f2598-b63c-4a65-b34a-f319c42321e3_cqxcyc.jpg"
              alt=""
              className="h-[40%] w-full object-cover md:h-[60%]"
            />
            <div className="flex flex-col gap-6 p-2 md:p-6">
              <h1 className="text-[14px] font-bold text-primary-700 md:text-xl">
                CAMIONS
              </h1>
              <p className="text-[11px] md:text-sm">
                Idéal pour le compactage de sols et d’asphalte, ce rouleau
                compresseur assure une surface lisse et stable.
              </p>
              <Link href="/trucks">
                <button className="w-[60%] rounded-sm bg-primary-700 p-1 text-[11px] text-white md:w-[40%] md:text-sm">
                  Voir les camions
                </button>
              </Link>
            </div>
          </div>

          <div className="flex h-[80vh] flex-col rounded-md bg-white text-black shadow-md">
            <img
              src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1718124642/WhatsApp_Image_2024-06-11_at_18.49.40_akphyz.jpg"
              alt=""
              className="h-[40%] w-full object-cover md:h-[60%]"
            />
            <div className="flex flex-col gap-6 p-2 md:p-6">
              <h1 className="text-[14px] font-bold text-primary-700 md:text-xl">
                ÉQUIPEMENT DE CONSTRUCTION
              </h1>
              <p className="text-[11px] md:text-sm">
                Idéal pour le compactage de sols et d’asphalte, ce rouleau
                compresseur assure une surface lisse et stable.
              </p>
              <Link href="/tools">
                <button className="w-[60%] rounded-sm bg-primary-700 p-1 text-[11px] text-white md:w-[40%] md:text-sm">
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
