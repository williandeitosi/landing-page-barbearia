interface ImageData {
  img: string;
  alt?: string;
  bgimg: string;
  bgalt?: string;
}

export function ImgSalon({ bgimg, bgalt, img, alt }: ImageData) {
  return (
    <div className='relative w-full h-full'>
      <img
        className='opacity-80 w-full h-full object-cover'
        src={bgimg}
        alt={bgalt}
      />
      <img className='absolute inset-0  m-auto w-64' src={img} alt={alt} />
    </div>
  );
}
