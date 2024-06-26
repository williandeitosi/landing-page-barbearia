import salon from './assets/baberSalon.jpg';
import skull from './assets/skullBg.png';
import { About } from './components/About/About';
import { Header } from './components/Heeader/Header';
import { ImgSalon } from './components/ImgSalon/ImgSalon';

function App() {
  return (
    <div className=''>
      <Header />
      <ImgSalon bgimg={salon} bgalt='salon' img={skull} alt='logo' />
      <About />
    </div>
  );
}

export default App;
