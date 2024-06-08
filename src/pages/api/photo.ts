// pages/api/photos.js

import { v2 as cloudinary } from 'cloudinary';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET, // Replace with your actual API secret
    });

    const data = await cloudinary.api.resources_by_asset_folder(
      (req?.query?.folder as string) || 'tractopelle',
      {
        max_results: 30,
        resource_type: 'image',
        transformations: [
          {
            width: 1000,
            height: 'auto',
            crop: 'fill',
          },
          { radius: 20 },
        ],
      },
    );

    res.status(200).json({ photos: data.resources });
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(200).json({ error: 'Failed to fetch photos' });
  }
}
