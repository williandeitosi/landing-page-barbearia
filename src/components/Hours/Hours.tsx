export function Hours() {
  return (
    <section
      id='hours'
      className='bg-[#333] text-white py-12 md:py-16 px-4 md:px-8'
    >
      <div className='container mx-auto'>
        <h2 className='text-2xl md:text-3xl font-bold mb-6'>Nossos Horários</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-left'>
            <thead>
              <tr className='bg-[#ffc107] text-[#333]'>
                <th className='py-3 px-4 font-bold'>Dia</th>
                <th className='py-3 px-4 font-bold'>Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-[#555]'>
                <td className='py-3 px-4 text-red-500'>Segunda-feira</td>
                <td className='py-3 px-4 text-red-500'>Fechado</td>
              </tr>
              <tr className='border-b border-[#555]'>
                <td className='py-3 px-4'>Terça-feira</td>
                <td className='py-3 px-4'>9:00 - 19:00</td>
              </tr>
              <tr className='border-b border-[#555]'>
                <td className='py-3 px-4'>Quarta-feira</td>
                <td className='py-3 px-4'>9:00 - 19:00</td>
              </tr>
              <tr className='border-b border-[#555]'>
                <td className='py-3 px-4'>Quinta-feira</td>
                <td className='py-3 px-4'>9:00 - 19:00</td>
              </tr>
              <tr className='border-b border-[#555]'>
                <td className='py-3 px-4'>Sexta-feira</td>
                <td className='py-3 px-4'>9:00 - 19:00</td>
              </tr>
              <tr className='border-b border-[#555]'>
                <td className='py-3 px-4'>Sábado</td>
                <td className='py-3 px-4'>9:00 - 17:00</td>
              </tr>
              <tr>
                <td className='py-3 px-4 '>Domingo</td>
                <td className='py-3 px-4 '>9:00 - 17:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
