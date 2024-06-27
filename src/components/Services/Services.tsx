import { CardService } from './CardService';

export function Services() {
  return (
    <section className='px-5 py-8 flex flex-col gap-8'>
      <h1 className='text-3xl font-bold text-center'>Nossos Serviços</h1>
      <div className='grid grid-cols-3 gap-3'>
        <CardService
          title='Corte de Cabelo'
          description='Um corte de cabelo tradicional e elegante, perfeito para um visual sofisticado.'
        />
        <CardService
          title='Barba Aparada'
          description='Deixe sua barba impecável com nosso serviço de aparação e modelagem.'
        />
        <CardService
          title='Corte Degradê'
          description='Um corte moderno e elegante, com transição suave entre os comprimentos.'
        />
        <CardService
          title='Cabelo e Barba'
          description='Renove seu estilo com nosso serviço completo de corte de cabelo e barba.'
        />
      </div>
    </section>
  );
}
