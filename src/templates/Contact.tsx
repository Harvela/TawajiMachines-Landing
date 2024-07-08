'use client';

import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';

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
      'https://admin.harvely.com/api/tawaji-messages',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer c22b709f498dfbf2b4d5c191b30a73e0f794d5e5d4bb9d4acf125ad62176a081be49a8579e2fdad03c0cfe02b1564e1851214863605a872a11e66b3ed1839a5042b9ccb65ee6cb53e7802a41c586f9788a1a598d6740f40cd8715250c3abe97f4e4280270ab7070dc328af8fe8449a4f83fe308124022bb75aadcdb55371ad85`,
        },
        body: JSON.stringify({
          data: { nom: firstname, postNom: lastname, email, phone, message },
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
    } else {
      toast.error(
        "Une erreur est survenue lors de l'envoi de votre message, veuillez réessayer.",
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
        <div className="flex flex-row items-center gap-6 rounded-md bg-primary-700 px-8 py-4 text-white md:py-6">
          <div className="flex w-[12%] flex-row items-center justify-center rounded-full bg-white p-2 text-primary-700 md:h-[65%] md:w-[18%] md:p-4">
            <FaPhoneVolume className="text-lg md:text-2xl" />
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <h2 className="text-[16px] md:text-[20px]">Appelez nous</h2>
            <p className="text-[20px] md:text-[20px]">+243 997455238</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6 rounded-md border-2 border-primary-700 px-8 py-4 text-black md:py-6">
          <div className="flex w-[12%] flex-row items-center justify-center rounded-full bg-primary-700 p-2 text-white md:h-[65%] md:w-[18%] md:p-4">
            <FaClock className="text-lg md:text-2xl" />
          </div>
          <div className="flex flex-col gap-2 font-semibold text-primary-700">
            <h2 className="text-[16px] md:text-[20px]">Du Lundi - Vendredi</h2>
            <p className="text-[20px] md:text-[20px]">08.00 - 16: 00</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6 rounded-md bg-primary-700 px-8 py-4 text-white md:py-6">
          <div className="flex w-[12%] flex-row items-center justify-center rounded-full bg-white p-2 text-primary-700 md:h-[60%] md:w-[18%] md:p-4">
            <FaMapMarkerAlt className="text-lg md:text-2xl" />
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <h2 className="text-[16px] md:text-[20px]">Addresse</h2>
            <p className="text-[20px] md:text-[20px]">
              C. Lubumbashi, Q. Kiwele, Av. Lufira, N. 659
            </p>
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
              label="Nom"
              placeholder=""
              bgColor="mb-4 h-[50px] w-full rounded-md border border-black/20"
              onChange={(e: any) => setFirstname(e)}
              defaultValue={firstname}
            />
            <Input
              name=""
              label="Post-nom"
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
              label="Addresse email"
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
              if (!email) toast.error('Veuillez renseigner votre email');
              if (!firstname) toast.error('Veuillez renseigner votre nom');
              if (!lastname) toast.error('Veuillez renseigner votre post-nom');
              if (!phone)
                toast.error('Veuillez renseigner votre numéro de téléphone');
              if (!message) toast.error('Veuillez renseigner votre message');

              if (!email || !firstname || !lastname || !phone || !message) {
                setIsLoading(false);
                return;
              }
              if (isLoading) return;
              setShowRecaptcha(true);
            }}
          >
            {isLoading ? 'Envoi ...' : 'Nous contacter'}
          </button>
        </div>
        <iframe
          title="Tawaji Construction"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3907.0928762382046!2d27.500672!3d-11.687830000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQxJzE2LjIiUyAyN8KwMzAnMDIuNCJF!5e0!3m2!1sfr!2scd!4v1718598724909!5m2!1sfr!2scd"
          style={{ border: 0 }}
          className="h-[500px] w-full md:h-auto md:w-[60%]"
        ></iframe>
      </div>
      <ToastContainer />
    </div>
  );
}
