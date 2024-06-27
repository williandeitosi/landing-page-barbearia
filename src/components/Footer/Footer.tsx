import { InstagramLogo, XLogo } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className='bg-zinc-900 flex justify-between items-center p-8'>
      <p className='text-white text-xl'>@2024 Barbearia</p>
      <p className='text-white text-xl'>
        Rua: fictícia - Bairro: fictícia - N: 99999 Tel: (99) 99999-9999
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
