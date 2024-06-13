import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import { Booking } from '@/components/booking';
import Dialog from '@/components/dialog';
import { machines } from '@/utils/services';

type TitleMap = {
  [key: string]: string;
};

const titleMap: TitleMap = {
  compacteuse: 'COMPACTEURS',
  niveleuse: 'NIVELEUSES',
  chargeuse: 'CHARGEUSES',
  tractopelle: 'TRACTOPELLES',
  betonniere: 'BETONNIERE',
  unknown: 'UNKNOWN',
};

interface PhotoPageProps {
  photos: { src: string; width: number; height: number }[];
  title: string;
  description: string;
  error: string | null;
  title1: string;
}

function PhotoPage({ photos, title, title1, description }: PhotoPageProps) {
  const [index, setIndex] = useState(-1);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/80">
          <Dialog
            onClose={() => {
              setShowForm(false);
            }}
            isForm
            width="md:w-[50%] sm:w-[95%] overflow-y-scroll max-h-[80%]"
          >
            <Booking onClose={() => setShowForm(false)} />
          </Dialog>
        </div>
      )}
      <div className="relative h-[50vh]">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="top-0 h-[50vh] w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex h-[50vh] w-full flex-col items-center justify-center bg-[#000000]/80">
          <div>
            <h1 className="text-center text-[32px] font-semibold text-white md:text-[48px]">
              {title}
            </h1>
            <div className="m-auto flex flex-row items-center justify-center p-8 text-sm font-semibold text-white">
              <Link
                href="/#home"
                className="mr-2 flex flex-row items-center justify-between text-[16px] md:text-[20px]"
              >
                HOME
                <MdOutlineNavigateNext className="text-xl text-white" />
              </Link>
              <Link
                href="/machines"
                className="mr-2 flex flex-row items-center justify-between text-[16px] md:text-[20px]"
              >
                MACHINES
                <MdOutlineNavigateNext className="text-xl text-white" />
              </Link>
              <Link
                href="/#categories"
                className="flex flex-row items-center justify-between text-[16px] text-[#71AEFD] md:text-[20px]"
              >
                {title}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] flex flex-col-reverse gap-5 p-4 py-8 md:grid md:grid-cols-5 md:gap-14 md:px-16 ">
        <div className="col-span-3">
          <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={300}
            onClick={({ index: indexs }) => setIndex(indexs)}
          />
        </div>
        <div className="col-span-2 mb-16 gap-4 md:flex-row">
          <p className="mb-4 text-[16px] font-semibold text-black md:text-[32px]">
            {title1}
          </p>
          <p className="text-[14px] text-gray-700 md:text-[18px]">
            {description}
          </p>
          <button
            onClick={() => {
              setShowForm(true);
            }}
            className="mt-4 w-fit rounded-md bg-primary-700 px-10 py-2 text-sm text-white"
          >
            Reserver
          </button>
        </div>
      </div>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  try {
    const folder: string = ctx?.query?.id?.toLowerCase?.() || '';
    const res = await axios.get(
      `${process.env.APP_LINK}/api/photo?folder=${folder}`,
    );

    const photos = res.data.photos.map((photo: any) => ({
      src: photo.url.replace('/upload/', '/upload/w_1080,f_auto/'),
      width: 1080,
      height: photo.height / (photo.width / 1080),
    }));

    const title = titleMap[folder] || 'Service';
    const service = machines.find((s) => s.link === folder);

    return {
      props: {
        photos,
        title,
        error: null,
        description: service?.description || '',
        title1: service?.title1 || '',
      },
    };
  } catch (error) {
    console.error('Error fetching photos:', error);
    return {
      props: {
        photos: [],
        title: 'Service',
        error: 'Failed to fetch photos',
        description: '',
        title1: '',
      },
    };
  }
}

export default PhotoPage;
