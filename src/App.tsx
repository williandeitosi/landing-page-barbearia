import salon from './assets/baberSalon.jpg';
import skull from './assets/skullBg.png';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Heeader/Header';
import { Hours } from './components/Hours/Hours';
import { ImgSalon } from './components/ImgSalon/ImgSalon';
import { Services } from './components/Services/Services';
import { Wahtsapp } from './components/Whatsapp/Whatsapp';

function App() {
  return (
    <div className='bg-zinc-[#eeeeee]	'>
      <Header />
      <ImgSalon bgimg={salon} bgalt='salon' img={skull} alt='logo' />
      <About />
      <Hours />
      <Services />
      <Footer />
      <Wahtsapp
        phoneNumber='15551234567'
        message='Olá gostaria de saber mais sobre os serviços'
      />
    </div>
  );
}

export default App;
