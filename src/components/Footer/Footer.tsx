import { InstagramLogo, XLogo } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className='bg-zinc-900 flex-col lg:flex-row flex justify-between items-center p-8'>
      <p className='text-white text-xl mb-3'>@2024 Barbearia</p>
      <p className='text-white text-xl flex gap-3 flex-col md:flex-row md:gap-5 justify-center items-center mb-3'>
        <span>Rua: fictícia</span>
        <span>Bairro: fictício</span>
        <span>N: 99999</span>
        <span>Tel: (99) 99999-9999</span>
      </p>
      <div className='flex gap-3'>
        <a href='#'>
          <InstagramLogo size={32} color='#ffc100' />
        </a>
        <a href='#'>
          <XLogo size={32} color='#ffc100' />
        </a>
      </div>
    </footer>
  );
}
