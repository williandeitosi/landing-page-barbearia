import { Scissors } from '@phosphor-icons/react';
import style from './Service.module.css';

interface PropCard {
  title: string;
  description: string;
}

export function CardService({ title, description }: PropCard) {
  return (
    <div
      className={`bg-white flex flex-col gap-5 p-4 ${style.myBoxShadow} rounded-xl hover:scale-105 transition-transform`}
    >
      <div className='flex gap-2'>
        <Scissors size={32} color='#ffc100' weight='bold' />
        <h4 className='text-xl font-bold'>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
}
