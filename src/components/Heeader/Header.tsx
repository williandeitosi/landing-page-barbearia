import skull from '../../assets/skullBg.png';

export function Header() {
  return (
    <header className='flex justify-between items-center pl-4  pr-8 bg-yellow-500 h-24'>
      <img src={skull} alt='logo' className='w-20' />
      <div className=' flex gap-10 text-base'>
        <a href='#'>Sobre</a>
        <a href='#'>Serviços</a>
        <a href='#'>Contanto</a>
      </div>
    </header>
  );
}
