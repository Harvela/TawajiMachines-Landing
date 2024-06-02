import { FaPhone } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

import { team } from '@/utils/team';

const Team = () => {
  return (
    <div id="team" className="relative z-20 px-4 py-10 lg:px-16">
      <div className="rounded-md p-8">
        <h1 className="mb-2 text-lg font-bold text-black lg:text-xl">
          NOTRE EQUIPE
        </h1>
        <div className="mt-12 grid grid-cols-3 gap-20 text-black">
          {team.map((t, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-md border border-black/20 p-8 shadow-sm"
            >
              <img
                src={t.icon}
                alt={`${t.name}`}
                className="h-50 w-50 rounded-full"
              />
              <div className="mt-2 flex flex-col items-center gap-2">
                <h2 className="text-[18px] font-semibold">{t.name}</h2>
                <span className="rounded-[8px] bg-primary-700/10 px-8 py-1 text-[12px] text-primary-700">
                  {t.role}
                </span>
              </div>
              <div className="mt-4 flex flex-col items-center gap-1 text-[16px]">
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
