import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import Link from 'next/link';
// import { useState } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
// import PhotoAlbum from 'react-photo-album';

// import photos from '@/utils/photos';
// import PhotoAlbum from 'react-photo-album';
// import Lightbox from 'yet-another-react-lightbox';
// // import optional lightbox plugins
// import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
// import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
// import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// import Zoom from 'yet-another-react-lightbox/plugins/zoom';

// import photos from '@/utils/photos';

export default function App() {
  // const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="relative h-[50vh]">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="top-0 h-[50vh] w-full object-cover"
        />
        <div className="absolute left-0 top-0 flex h-[50vh] w-full flex-col items-center justify-center bg-[#000000]/80">
          {/* <Navbar /> */}

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
      <div className="mt-[20px] p-4 py-8 md:px-16">
        <div className="mb-16 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-[16px] font-semibold text-black md:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            tellus nisi.
          </p>
          <div className="flex w-full flex-row items-center gap-8">
            <p className="text-[20px] font-semibold text-primary-700">
              R595000,00
            </p>
            <button className="w-[100px] rounded-sm bg-primary-700 p-1 text-sm text-black">
              Reserver
            </button>
          </div>
        </div>
        {/* <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        /> */}
      </div>
      {/* 
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      /> */}
    </>
  );
}
