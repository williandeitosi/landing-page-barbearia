import { List } from '@phosphor-icons/react';
import { useState } from 'react';
import skull from '../../assets/skullBg.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex justify-between items-center px-4 lg:px-16 xl:px-20 bg-yellow-500 h-24'>
      <img src={skull} alt='logo' className='w-20 ' />
      <div className='hidden lg:flex gap-10 text-base'>
        <a className='hover:font-bold' href='#'>
          Sobre
        </a>
        <a className='hover:font-bold' href='#'>
          Serviços
        </a>
        <a className='hover:font-bold' href='#'>
          Produtos
        </a>
      </div>
      <button
        className='flex justify-center items-center lg:hidden bg-black rounded-full size-10 hover:bg-[#3d3d3d] transition-colors'
        onClick={handleClick}
      >
        <List size={32} color='#f9f5f5' />
      </button>

      <div
        className={`absolute z-50 top-24 right-0 w-full text-center bg-yellow-500 shadow-md rounded-b-lg overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0 hidden'
        }`}
      >
        <ul className='p-2'>
          <li>
            <a className='hover:font-bold' href='#'>
              Sobre
            </a>
          </li>
          <li>
            <a className='hover:font-bold' href='#'>
              Serviços
            </a>
          </li>
          <li>
            <a className='hover:font-bold' href='#'>
              Produtos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
