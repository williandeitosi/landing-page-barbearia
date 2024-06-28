import barber from '../../assets/barber.jpg';

export function About() {
  return (
    <section className='px-5 py-10 gap-8 grid grid-cols-1 md:grid-cols-2 xl:w-3/4	'>
      <div>
        <img className='object-cover rounded-lg ' src={barber} alt='' />
      </div>
      <div className='flex flex-col gap-5 self-center	'>
        <h2 className='text-3xl font-bold'>Bem-vindo à nossa barbearia</h2>
        <p className='text-lg'>
          Aqui, valorizamos a tradição e a modernidade. Nossos profissionais
          altamente qualificados oferecem um serviço personalizado e de alta
          qualidade, garantindo que você saia daqui com um novo visual que
          realce sua confiança e estilo.
        </p>
        <p className='text-lg'>
          Nosso ambiente acolhedor e descontraído foi cuidadosamente projetado
          para que você se sinta em casa, enquanto desfrutamos juntos de uma
          experiência única de cuidado com a aparência.
        </p>
      </div>
    </section>
  );
}
