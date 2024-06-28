import zap from '../../assets/whatsapp.png';
interface zapProps {
  phoneNumber: string;
  message?: string;
}

export function Wahtsapp({ phoneNumber, message = '' }: zapProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <a
      className='fixed w-20 md:w-28 bottom-20 right-4 z-50'
      href={whatsappUrl}
      target='_blank'
    >
      <img src={zap} alt='whatsapp' />
    </a>
  );
}
