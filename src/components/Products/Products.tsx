import balm from '../../assets/balm.jpg';
import shampooBarba from '../../assets/shampoo-barba.jpg';
import shampoo from '../../assets/shampoo.jpg';
import { CardProducts } from './CardProducts';

export function Products() {
  return (
    <section id='products' className='px-5 py-8 flex flex-col gap-8'>
      <h1 className='text-3xl font-bold text-center'>Produtos</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        <CardProducts
          title='Balm'
          description='Balm para barba ficar mais macia'
          price='R$ 70,00'
          img={balm}
        />
        <CardProducts
          title='Shampoo + Balm'
          description='Kit completo para cuidar da sua barba'
          price='R$ 100,00'
          img={shampooBarba}
        />
        <div className='sm:col-span-2 sm:flex sm:justify-center lg:col-span-1'>
          <CardProducts
            title='3 em 1'
            description='Balm + Shampoo + Condicionador'
            price='R$ 170,00'
            img={shampoo}
            className='sm:w-1/2 lg:w-full'
          />
        </div>
      </div>
    </section>
  );
}
