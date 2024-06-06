import { FaPhone } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

import { team } from '@/utils/team';

const Team = () => {
  return (
    <div id="team" className="mt-32 px-4 py-10 md:z-20 md:px-16">
      <div className="rounded-md p-2 md:p-8">
        <h1 className="mb-2 text-lg font-bold text-black md:text-xl">
          NOTRE EQUIPE
        </h1>
        <div className="mt-12 grid grid-cols-2 gap-4 text-black md:grid-cols-3 md:gap-20">
          {team.map((t, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-md border border-black/20 p-2 shadow-sm md:p-8"
            >
              <img
                src={t.icon}
                alt={`${t.name}`}
                className="md:h-50 md:w-50 h-20 w-20 rounded-full"
              />
              <div className="mt-2 flex flex-col items-center gap-2">
                <h2 className="text-[14px] font-semibold md:text-[18px]">
                  {t.name}
                </h2>
                <span className="rounded-[8px] bg-primary-700/10 px-4 py-1 text-[10px] text-primary-700 md:px-8 md:text-[12px]">
                  {t.role}
                </span>
              </div>
              <div className="mt-4 flex flex-col items-center gap-1 text-[10px] md:text-[16px]">
                <div className="flex flex-row items-center gap-2">
                  <FaPhone className="text-primary-700" />
                  <p>{t.phone}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <MdMail className="text-primary-700" />
                  <p>{t.mail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Team };
