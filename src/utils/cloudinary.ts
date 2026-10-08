const UPLOAD_SEGMENT = '/image/upload/';

export const cloudinaryUrl = (
  url: string,
  transformation = 'w_1200,f_auto,q_auto',
): string => {
  if (!url.includes(UPLOAD_SEGMENT)) {
    return url;
  }

  return url.replace(UPLOAD_SEGMENT, `${UPLOAD_SEGMENT}${transformation}/`);
};
