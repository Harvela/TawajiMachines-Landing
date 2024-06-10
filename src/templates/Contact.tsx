'use client';

import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import { toast } from 'react-toastify';

import Input from '@/components/input';
import { Recaptcha } from '@/components/recaptcha';

export function Contact() {
  const [email, setEmail] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [showRecaptcha, setShowRecaptcha] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const sendData = async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://admin.harvely.com/api/message-dug-assistants',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer 5d5a8ca3f0f2bc86426ab60cac04771576338d956b828a394033b6858839b6ddc9ff66505bb2749c479dab84a05a150713fe3e5755221b94808d249d00bbae832dbe8da37a9dd2c6f5bf580c3dc6bbde2b69c438d26f4edbefa42229b2f9e53353bc48870d62695e4b74d83ea5f1c103361422a323b189b1fb75830f9c31fb0e`,
        },
        body: JSON.stringify({
          data: { firstname, lastname, email, phone, message },
        }),
      },
    );
    setIsLoading(false);
    if (response.ok) {
      setEmail('');
      setFirstname('');
      setLastname('');
      setPhone('');
      setMessage('');
      setShowRecaptcha(false);
      toast.success(
        'Merci de votre message, un membre de notre équipe va bientot vous contacter.',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    }
  };
  return (
    <div id="contact" className="flex w-full flex-col px-4 md:px-16 md:py-4">
      <h1 className="text-blue mb-8 text-lg font-bold text-primary-700 lg:text-xl">
        CONTACT
      </h1>
      <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <div className="flex flex-row items-center gap-6 rounded-md bg-primary-700 px-8 py-4 text-white md:py-10">
          <div className="flex w-[12%] flex-row items-center justify-center rounded-full bg-white p-2 text-primary-700 md:h-full md:w-[18%] md:p-4">
            <FaPhoneVolume className="text-lg md:text-2xl" />
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <h2 className="text-[16px] md:text-[20px]">Appelez nous</h2>
            <p className="text-[20px] md:text-[24px]">+243 991746590</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6 rounded-md border-2 border-primary-700 px-8 py-4 text-black md:py-10">
          <div className="flex w-[12%] flex-row items-center justify-center rounded-full bg-primary-700 p-2 text-white md:h-full md:w-[18%] md:p-4">
            <FaClock className="text-lg md:text-2xl" />
          </div>
          <div className="flex flex-col gap-2 font-semibold text-primary-700">
            <h2 className="text-[16px] md:text-[20px]">Du Lundi - Dimanche</h2>
            <p className="text-[20px] md:text-[24px]">09.00 - 20: 00</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6 rounded-md bg-primary-700 px-8 py-4 text-white md:py-10">
          <div className="flex w-[12%] flex-row items-center justify-center rounded-full bg-white p-2 text-primary-700 md:h-full md:w-[18%] md:p-4">
            <FaMapMarkerAlt className="text-lg md:text-2xl" />
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <h2 className="text-[16px] md:text-[20px]">Addresse</h2>
            <p className="text-[20px] md:text-[24px]">Goma, Q. les volcans</p>
          </div>
        </div>
      </div>
      {showRecaptcha && (
        <Recaptcha
          onChange={(value: any) => {
            setShowRecaptcha(false);
            if (value) sendData();
          }}
        />
      )}

      <div className="my-12 flex flex-col gap-4 md:flex-row md:gap-16 ">
        <div className="w-full md:w-[40%]">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <Input
              name=""
              label="First Name"
              placeholder=""
              bgColor="mb-4 h-[50px] w-full rounded-md border border-black/20"
              onChange={(e: any) => setFirstname(e)}
              defaultValue={firstname}
            />
            <Input
              name=""
              label="Last Name"
              placeholder=""
              bgColor="mb-4 h-[50px] w-full rounded-md border border-black/20"
              onChange={(e: any) => setLastname(e)}
              defaultValue={lastname}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <Input
              name=""
              label="Telephone"
              placeholder=""
              bgColor="mb-4 h-[50px] w-full rounded-md border border-black/20"
              onChange={(e: any) => setPhone(e)}
              defaultValue={phone}
            />
            <Input
              name=""
              label="Email"
              placeholder=""
              bgColor="mb-4 h-[50px] w-full rounded-md border border-black/20"
              onChange={(e: any) => setEmail(e)}
              defaultValue={email}
            />
          </div>
          <textarea
            placeholder="Message"
            className="mb-4 h-[200px] w-full rounded-md border border-primary-700/20"
            onChange={(e: any) => setMessage(e.target.value)}
            value={message}
          />
          <button
            className="h-[50px] w-[60%] rounded-md bg-primary-700 px-4 py-2 font-semibold text-white md:w-[30%]"
            onClick={() => {
              if (isLoading) return;
              setShowRecaptcha(true);
            }}
          >
            {isLoading ? 'Envoi ...' : 'Nous contacter'}
          </button>
        </div>
        <iframe
          title="Tawaji Construction Machines"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.104482207422!2d29.214335414265573!3d-1.6794284987753614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0f27000f5d3b%3A0xaf84ee5f793c2fe0!2sUn%20Jour%20Nouveau%20hub!5e0!3m2!1sen!2scd!4v1668768849286!5m2!1sen!2scd"
          style={{ border: 0 }}
          className="h-[500px] w-full md:h-auto md:w-[60%]"
        ></iframe>
      </div>
    </div>
  );
}
