import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

function PhotoPage({ photos }: any) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="relative h-[50vh]">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="top-0 h-[50vh] w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex h-[50vh] w-full flex-col items-center justify-center bg-[#000000]/80">
          <div>
            <h1 className="text-center text-[32px] font-semibold text-white md:text-[48px]">
              COMPACTEURS
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
                href="/#categories"
                className="flex flex-row items-center justify-between text-[16px] text-primary-700 md:text-[20px]"
              >
                COMPACTEUS
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] flex flex-col-reverse gap-5 p-4 py-8 md:grid md:grid-cols-5 md:gap-14 md:px-16 ">
        <div className=" col-span-3">
          <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={300}
            onClick={({ index: indexs }) => setIndex(indexs)}
          />
        </div>
        <div className="col-span-2   mb-16 gap-4 md:flex-row">
          <p className="text-[16px] font-semibold text-black md:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            tellus nisi.
          </p>
          <div className="mt-8 flex w-full  flex-col gap-10">
            <p className="text-[20px] font-semibold text-primary-700">
              R595000,00 - R6000000,00
            </p>
            <button className=" w-fit rounded-md bg-primary-700 px-10 py-2 text-sm text-black">
              Reserver
            </button>
          </div>
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
    const res = await axios.get(
      `${
        process.env.APP_LINK
      }/api/photo?folder=${ctx?.query?.id?.toLowerCase?.()}`,
    );

    const photos = res.data.photos.map((photo: any) => ({
      src: photo.url.replace('/upload/', '/upload/w_1080,f_auto/'),
      width: 1080,
      height: photo.height / (photo.width / 1080),
    }));

    return {
      props: {
        photos,
        error: null,
      },
    };
  } catch (error) {
    console.error('Error fetching photos:', error);
    return {
      props: {
        photos: [],
        error: 'Failed to fetch photos',
      },
    };
  }
}

export default PhotoPage;
