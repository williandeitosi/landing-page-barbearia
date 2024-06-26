import salon from './assets/baberSalon.jpg';
import skull from './assets/skullBg.png';
import { Header } from './components/Heeader/Header';
import { ImgSalon } from './components/ImgSalon/ImgSalon';

function App() {
  return (
    <>
      <Header />
      <ImgSalon bgimg={salon} bgalt='salon' img={skull} alt='logo' />
    </>
  );
}

export default App;
